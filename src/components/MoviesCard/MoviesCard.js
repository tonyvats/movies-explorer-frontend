import "./MoviesCard.css";
import React from 'react';
import { IMAGE_BASE_URL } from "../../utils/constants";


function MoviesCard(props) {

    const [isLiked, setIsLiked] = React.useState(false);
    const [isDeleteButtonVisible, setIsDeleteButtonVisible] = React.useState(false);
    const savedMoviesInStore = JSON.parse(localStorage.getItem("savedMovies"));


    React.useEffect(() => {
        if (props.movie) {
          savedMoviesInStore?.some((i) => i.movieId === props.movie.id)
            ? setIsLiked(true)
            : setIsLiked(false);
        }
      }, [props.movie, savedMoviesInStore]);

    const convertDuration = (min) => {
        return `${Math.floor(min / 60) % 24}ч ${min % 60}м`;
    };      

    function handleCardMouseOver() {
        setIsDeleteButtonVisible(true);
    }

    function handleCardMouseOut() {
        setIsDeleteButtonVisible(false);
    }

    const handleLike = () => {
        props.onSaveMovie(props.movie, isLiked, setIsLiked);
    };

    const handleDelete = () => {
        props.onDeleteMovie(props.savedMovie);
    };

    const likeButtonClassName = `movie__like-button ${isLiked ? "movie__like-button_active" : ""}`;
    const deleteButtonClassName = `movie__delete-button ${isDeleteButtonVisible ? "movie__delete-button_visible" : ""}`;
        
    return (
        <li className="movie">
            <a className="movie__link" href={props.movie ? `${props.movie.trailerLink}` : `${props.savedMovie.trailer}`} target="_blank" rel="noreferrer" >
                <img 
                    className="movie__image"   
                    alt={ props.movie ? `Картинка к ${props.movie.title}` : `Картинка к ${props.savedMovie.title}`} 
                    src={ props.movie ? `${IMAGE_BASE_URL}${props.movie.image?.url}` : `${props.savedMovie.image}`}
                ></img>
            </a>
            <div className="movie__row-description" onMouseEnter={handleCardMouseOver} onMouseLeave={handleCardMouseOut}>
                <h2 className="movie__title">{props.movie ? props.movie.nameRU : props.savedMovie.nameRU}</h2>
                {
                    !props.isInSavedList ? 
                        <button className={likeButtonClassName} onClick={handleLike}></button> :
                        <button className={deleteButtonClassName} onClick={handleDelete}></button>
                }
            </div>
            <span className="movie__duration">
                { props.movie ? convertDuration(props.movie.duration) : convertDuration(props.savedMovie.duration)}
            </span>
        </li>
    );
}

export default MoviesCard;
