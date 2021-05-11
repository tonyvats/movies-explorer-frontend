import "./MoviesCard.css";
import React from 'react';

function MoviesCard({ movie, isSavedMovie }) {

    const [isLiked, setIsLiked] = React.useState(false);
    const [isDeleteButtonVisible, setIsDeleteButtonVisible] = React.useState(false);

    function handleCardMouseOver() {
        setIsDeleteButtonVisible(true);
    }

    function handleCardMouseOut() {
        setIsDeleteButtonVisible(false);
    }

    const handleLike = () => {
        isLiked ? setIsLiked(false) : setIsLiked(true);
    }

    const handleDelete = () => {
        // тут что то будет потом
    }

    const likeButtonClassName = `movie__like-button ${isLiked ? "movie__like-button_active" : ""}`;
    const deleteButtonClassName = `movie__delete-button ${isDeleteButtonVisible ? "movie__delete-button_visible" : ""}`;

    // console.log(saveButtonClassName);

    return (
        <li className="movie">
            <img className="movie__image" alt={`Картинка к ${movie.title}`} src={movie.image}></img>
            <div className="movie__row-description" onMouseEnter={handleCardMouseOver} onMouseLeave={handleCardMouseOut}>
                <h2 className="movie__title">{movie.title}</h2>
                {
                    isSavedMovie ? 
                        <button className={deleteButtonClassName} onClick={handleDelete}></button> :
                        <button className={likeButtonClassName} onClick={handleLike}></button>
                }
            </div>
            <span className="movie__duration">
                {movie.duration}
            </span>
        </li>
    );
}

export default MoviesCard;
