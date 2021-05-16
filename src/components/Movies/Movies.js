import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies(props) {
  
  return (
    <>
      <Header isLoggedIn={props.isLoggedIn} isMainPage={!props.isMainPage} />
      <SearchForm
        onSubmit={props.onSubmit}
        onChange={props.onChange}
        searchValue={props.searchValue}
        handleCheck={props.handleCheck}
      />
      <MoviesCardList
        isInSavedList={false}
        movies={props.movies}
        isLoading={props.isLoading}
        searchError={props.searchError}
        onSaveMovie={props.onSaveMovie}
        isShortMovie={props.isShortMovie}
      />
      <Footer />
    </>
  );
}

export default Movies;
