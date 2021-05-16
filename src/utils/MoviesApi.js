import { MOVIE_BASE_URL, BASE_URL, IMAGE_BASE_URL } from "./constants";

const checkResponse = (response) => response.ok
  ? response.json()
  : Promise.reject(`${response.status}`)

export const getMovies = () => {
  return fetch(`${MOVIE_BASE_URL}`).then(checkResponse);
};

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(checkResponse);
};

export const saveMovie = (movie) => {

  const {
    country,
    director,
    duration,
    year,
    description,
    trailer = movie.trailerLink,
    movieId = movie.id,
    nameRU,
    nameEN,
  } = movie;

  const image = `${IMAGE_BASE_URL}${movie.image?.url}`;
  const thumbnail = `${MOVIE_BASE_URL}${movie.image?.formats.thumbnail.url}`;

  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailer,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
    }),
  }).then(checkResponse);
};

export const deleteMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(checkResponse);
};
