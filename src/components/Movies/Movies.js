import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { movies } from "../../utils/constants";
import LoadMore from "../LoadMore/LoadMore";

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList movies={movies} />
      <LoadMore />
    </>
  );
}

export default Movies;
