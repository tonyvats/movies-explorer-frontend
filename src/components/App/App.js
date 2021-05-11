import './App.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import { Route, Switch } from 'react-router';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <div className="app">
      <Switch>

        <Route exact path="/">
          {/* <Header isLoggedIn={false}> */}
          <Header isLoggedIn={true}>
            {/* <Navigation isLoggedIn={false}/> */}
            <Navigation isLoggedIn={true}/>
          </Header>
          <Main />
        </Route>

        <Route path="/movies">
          {/* <Header isLoggedIn={true}> */}
          <Header isLoggedIn={false}>
            <Navigation isLoggedIn={true} />
          </Header>
          <Movies />
          <Footer />
        </Route>

        <Route path="/saved-movies">
          <Header>
            <Navigation isLoggedIn={true} />
          </Header>
          <SavedMovies />
          <Footer />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/signup">
          <Register />
        </Route>

        <Route path="/profile">
          <Header>
            <Navigation isLoggedIn={true}/>
          </Header>
          <Profile />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
