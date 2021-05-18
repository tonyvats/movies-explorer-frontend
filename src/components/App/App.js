import React from "react";

import './App.css';
import Main from '../Main/Main';
import { Route, Switch, useHistory, Redirect, useLocation } from 'react-router';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";


import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

import {
  register,
  login,
  checkToken,
  updateProfile,
} from "../../utils/MainApi";

import {
  getMovies,
  saveMovie,
  getSavedMovies,
  deleteMovie,
} from "../../utils/MoviesApi";

import {
  EMPTY_REQ_ERR_MES, 
  FAIL_REQ_ERR_MES, 
  EMPTY_RES
} from "../../utils/constants"

import Validation from "../../utils/Validation";


function App() {

  const { handleChange, errors, values, isValid } = Validation();
  
  const storedMovies = JSON.parse(localStorage.getItem("storedMovies"));
  const savedMoviesInStore = JSON.parse(localStorage.getItem("savedMovies"));

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [submitError, setSubmitError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [movies, setMovies] = React.useState(storedMovies);
  const [savedMovies, setSavedMovies] = React.useState(savedMoviesInStore);
  const [searchError, setSearchError] = React.useState("");
  const [isShortMovie, setIsShortMovie] = React.useState(false);
  const location = useLocation().pathname;
  
  const history = useHistory();


// =============================================================


  function handleCheckToken() {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      checkToken(jwt)
        .then((res) => {
            if (res) {
              setLoggedIn(true);
              setCurrentUser(res);
              history.push(location)
            }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  React.useEffect(() => {
      handleCheckToken()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleRegister(data) {
    register(data.username, data.email, data.password)
      .then(() => {
        handleLogin(data);
        setCurrentUser(data.username)
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
        setSubmitError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleLogin = (data) => {
    login(data.email, data.password)
        .then((res) => {
            if (res.token) {
                setLoggedIn(true);
                setCurrentUser(data.username);
                localStorage.setItem('jwt', res.token);
            }
        })
        .catch((err) => {
          console.log(`Ошибка ${err}`);
          setSubmitError(err);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
          history.push("/movies");
        });
  } 

  function handleEditProfile(data, setIsEditable, setIsSuccessPopupOpen) {
    updateProfile(data.username, data.email)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(`Ошибка ${err.status}`);
        setSubmitError(err.status);
      })
      .finally(() => {
        setIsLoading(false);
        setIsEditable(false);
        setIsSuccessPopupOpen(true);
      });
  }

  function handleSignOut(e) {
    e.preventDefault();
    localStorage.removeItem("jwt");
    localStorage.removeItem("savedMovies");
    localStorage.removeItem("foundedMovies");
    localStorage.removeItem("storedMovies");
    setLoggedIn(false);
    history.push("/");
  }


  // =============================================================


  function movieFilter(allMovies) {
    return new Promise((resolve, reject) => {
      if (searchValue === "") {
        return reject(EMPTY_REQ_ERR_MES);
      }
      if (!allMovies) {
        return reject(FAIL_REQ_ERR_MES);
      }

      const foundedData = allMovies.filter((item) =>
        item.nameRU.toLowerCase().includes(searchValue.toLowerCase())
      );
      if (foundedData.length === 0) {
        reject(EMPTY_RES);
      }
      localStorage.setItem("storedMovies", JSON.stringify(foundedData));
      setMovies(foundedData);
      resolve();
    });
  }

  function handleSearchMovies(e) {
    e.preventDefault();
    setIsLoading(true);
    setSearchError("");
    setMovies([]);

    if (localStorage.getItem("foundedMovies") === null) {
      getMovies()
        .then((data) => {
          localStorage.setItem("foundedMovies", JSON.stringify(data));
          movieFilter(data)
            .then(() => {})
            .catch((err) => {
              console.log(err);
              setSearchError(err);
            })
            .finally(() => {
              setIsLoading(false);
            });
        })
        .catch((err) => {
          console.log(err);
          setSearchError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      movieFilter(JSON.parse(localStorage.getItem("foundedMovies")))
        .then(() => {})
        .catch((err) => {
          setSearchError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  function handleSearchSavedMovies(e) {
    e.preventDefault();
    setIsLoading(true);
    setSearchError("");
    setSavedMovies(savedMoviesInStore);
    getSavedMovies()
      .then((data) => {
        if (searchValue === "") {
          throw new Error(EMPTY_REQ_ERR_MES);
        }
        if (!data) {
          throw new Error(FAIL_REQ_ERR_MES);
        }

        const foundedData = data.filter((item) =>
          item.nameRU.toLowerCase().includes(searchValue.toLowerCase())
        );
        if (foundedData.length === 0) {
          throw new Error(EMPTY_RES);
        }

        setSavedMovies(foundedData);
      })

      .catch((err) => {
        console.log(err);
        setSearchError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSearchInput(e) {
    const { value } = e.target;
    setSearchValue(value);
  }

  function handleSaveMovie(movie, isLiked, setIsLiked) {
    if (isLiked) {
      getSavedMovies()
        .then((res) => {
          console.log(res)
          Promise.resolve(res.find((i) => i.movieId === movie.id)).then(
            (movieId) => {
              deleteMovie(movieId._id).then(() => {
                const newMovies = savedMovies.filter(
                  (m) => m._id !== movieId._id
                );
                localStorage.setItem("savedMovies", JSON.stringify(newMovies));
                const movies = JSON.parse(localStorage.getItem("savedMovies"));
                setSavedMovies(movies);
                setIsLiked(false);
              });
            }
          );
        })

        .catch((err) => console.log(err));
    } else {
      setIsLiked(true);
      saveMovie(movie)
        .then(() => {
          getSavedMovies()
            .then((res) => {
              localStorage.setItem("savedMovies", JSON.stringify(res));
              const movies = JSON.parse(localStorage.getItem("savedMovies"));
              setSavedMovies(movies);
              setIsLiked(true);
            });
        })
        .catch((err) => console.log(err));
    }
  }

  function checkIsShortMovie(e) {
    e.target.checked ? setIsShortMovie(true) : setIsShortMovie(false);
  }

  const handleDeleteMovie = (movie) => {
    deleteMovie(movie._id)
      .then((res) => {
        const newMovies = savedMovies.filter((m) => m._id !== movie._id);
        localStorage.setItem("savedMovies", JSON.stringify(newMovies));
        const movies = JSON.parse(localStorage.getItem("savedMovies"));
        setSavedMovies(movies);
      })
      .catch((err) => console.log(err));
  };


  // =============================================================
  

  return (
    <CurrentUserContext.Provider value={currentUser}>

        <Switch>

          <Route exact path="/">
            <Main isLoggedIn={loggedIn} />
          </Route>

          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            isLoggedIn={loggedIn}
            movies={movies}
            isLoading={isLoading}
            onSubmit={handleSearchMovies}
            onChange={handleSearchInput}
            onSaveMovie={handleSaveMovie}
            handleCheck={checkIsShortMovie}
            searchError={searchError}
            isShortMovie={isShortMovie}
            searchValue={searchValue}
          />

          <ProtectedRoute
            path="/saved-movies"
            isLoggedIn={loggedIn}
            handleCheck={checkIsShortMovie}
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            onSubmit={handleSearchSavedMovies}
            onDeleteMovie={handleDeleteMovie}
            component={SavedMovies}
            onChange={handleSearchInput}
            searchValue={searchValue}
            searchError={searchError}
            isShortMovie={isShortMovie}
          />

          <Route path="/signup">
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <Register
                onRegister={handleRegister}
                handleChange={handleChange}
                submitError={submitError}
                errors={errors}
                isLoading={isLoading}
                values={values}
                isValid={isValid}
              />
            )}
          </Route>

          <Route path="/signin">
            {loggedIn ? (
              <Redirect to="/" />
            ) : (
              <Login
                values={values}
                isLoading={isLoading}
                submitError={submitError}
                onLogin={handleLogin}
                handleChange={handleChange}
                errors={errors}
                isValid={isValid}
              />
            )}
          </Route>

          <ProtectedRoute
            path="/profile"
            onSubmit={handleEditProfile}
            component={Profile}
            loggedIn={loggedIn}
            submitError={submitError}
            onSignOut={handleSignOut}
            isLoggedIn={loggedIn}
            values={values}
            isLoxding={isLoading}
            handleChange={handleChange}
            isValid={isValid}
            errors={errors}
          />

          <Route path="*">
            <PageNotFound />
          </Route>

      </Switch>

    </CurrentUserContext.Provider>
  );
}

export default App;
