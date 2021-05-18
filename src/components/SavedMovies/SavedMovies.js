import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} isMainPage={!props.isMainPage} />
      <SearchForm
        onChange={props.onChange}
        searchValue={props.searchValue}
        onSubmit={props.onSubmit}
        handleCheck={props.handleCheck}
      />
      <MoviesCardList
        isInSavedList={true}
        movies={props.movies}
        savedMovies={props.savedMovies} 
        onDeleteMovie={props.onDeleteMovie}
        searchError={props.searchError}
        isShortMovie={props.isShortMovie}
      />
      <Footer />
    </>
  );
}

export default SavedMovies;