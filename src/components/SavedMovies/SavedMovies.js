import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import {savedMovies} from '../../utils/constants';

function SavedMovies() {
  return(
    <>
      <SearchForm />
      <MoviesCardList movies={savedMovies} isSavedMovie={true}/>
    </>
  )
}

export default SavedMovies;