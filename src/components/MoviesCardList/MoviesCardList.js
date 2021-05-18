import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";
import React from "react";
import LoadMore from "../LoadMore/LoadMore";

import {
  SHORT_MOVIE_DURATION,
  FOR_FIVE_COLUMNS,
  FOR_THREE_AND_FOUR_COLUMNS,
  FOR_TOW_COLUMNS,
  FOR_TOW_COLUMNS_MOBILE,
  LOAD_MORE_DESKTOP_THREE_COLUMNS,
  LOAD_MORE_DESKTOP_FOUR_COLUMNS,
  LOAD_MORE_DESKTOP_FIVE_COLUMNS,
  LOAD_MORE_MOBILE,
} from "../../utils/constants";

function MoviesCardList(props) {

  function filterMoviesByDuration(mov) {
    return mov.filter((m) => m.duration <= SHORT_MOVIE_DURATION);
  }

  const [items, setItems] = React.useState([]);
  const [visible, setVisible] = React.useState(
    FOR_FIVE_COLUMNS
  );
  const [loadMore, setLoadMore] = React.useState(LOAD_MORE_DESKTOP_FOUR_COLUMNS);

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  function debounce(fn, ms) {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  React.useEffect(() => {
    props.movies && setItems(props.movies);
    if (dimensions.width >= 1736) {
      setVisible(FOR_FIVE_COLUMNS);
      setLoadMore(LOAD_MORE_DESKTOP_FIVE_COLUMNS);
    }

    if (dimensions.width <= 1735) {
      setVisible(FOR_THREE_AND_FOUR_COLUMNS);
      setLoadMore(LOAD_MORE_DESKTOP_FOUR_COLUMNS);
    }

    if (dimensions.width <= 1411) {
      setVisible(FOR_THREE_AND_FOUR_COLUMNS);
      setLoadMore(LOAD_MORE_DESKTOP_THREE_COLUMNS);
    }

    if (dimensions.width <= 768 && dimensions.width > 520) {
      setVisible(FOR_TOW_COLUMNS);
      setLoadMore(LOAD_MORE_MOBILE);
    }

    if (dimensions.width <= 520) {
      setVisible(FOR_TOW_COLUMNS_MOBILE);
      setLoadMore(LOAD_MORE_MOBILE);
    }

  }, [props.movies, dimensions.width]);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + loadMore);
  };

  return (
        <section className="movies">
            {props.isLoading && <Preloader />}
            {props.searchError !== "" && <span className="error">{props.searchError}</span>}
            {props.savedMovies?.length === 0 && (
                <span className="error">Вы ещё не сохранили ни одного фильма.</span>
            )}
            <ul className="movies__list">
                {props.movies &&
                (props.isShortMovie ? filterMoviesByDuration(items) : items)
                    .slice(0, visible)
                    .map((data) => {
                    return (
                        <MoviesCard
                            isInSavedList={props.isInSavedList}
                            key={data.id}
                            movie={data}
                            onSaveMovie={props.onSaveMovie}
                        />
                      );
                    })}
                {props.savedMovies &&
                (props.isShortMovie
                    ?   filterMoviesByDuration(props.savedMovies)
                    :   props.savedMovies
                ).map((data) => {
                    return (
                      <MoviesCard
                          isInSavedList={props.isInSavedList}
                          key={data._id}
                          savedMovie={data}
                          onDeleteMovie={props.onDeleteMovie}
                      />
                    );
                })}
            </ul>
            {props.movies && items.length > visible && (
                <LoadMore onLoadMoreClick={showMoreItems} />
            )}

        </section>

    );
}

export default MoviesCardList;
