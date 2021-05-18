// =============================================================

const MOVIE_BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";
const IMAGE_BASE_URL = "https://api.nomoreparties.co";
// const BASE_URL = "http://localhost:3000";
// const REACT_APP_API_URL = "https://api.vatc.movies.nomoredomains.icu";

// =============================================================

const EMPTY_REQ_ERR_MES = "Введите запрос";
const FAIL_REQ_ERR_MES = "Произошла ошибка";
const EMPTY_RES = "Ничего не найдено, попробуйте изменить запрос."

// =============================================================

const SHORT_MOVIE_DURATION = 40;
const FOR_FIVE_COLUMNS = 15;
const FOR_THREE_AND_FOUR_COLUMNS = 12;
const FOR_TOW_COLUMNS = 8;
const FOR_TOW_COLUMNS_MOBILE = 5;
const LOAD_MORE_DESKTOP_FIVE_COLUMNS = 5;
const LOAD_MORE_DESKTOP_FOUR_COLUMNS = 4;
const LOAD_MORE_DESKTOP_THREE_COLUMNS = 3;
const LOAD_MORE_MOBILE = 2;

// =============================================================

const UPDATE_ERR = "При обновлении профиля произошла ошибка.";
const SERVER_ERR = "На сервере произошла ошибка.";
const NOT_FOUND_ERR = "Страница не найдена"

// =============================================================

export {
  MOVIE_BASE_URL,
  IMAGE_BASE_URL,
  // BASE_URL,
  SHORT_MOVIE_DURATION,
  FOR_FIVE_COLUMNS,
  FOR_THREE_AND_FOUR_COLUMNS,
  FOR_TOW_COLUMNS,
  FOR_TOW_COLUMNS_MOBILE,
  LOAD_MORE_DESKTOP_THREE_COLUMNS,
  LOAD_MORE_DESKTOP_FOUR_COLUMNS,
  LOAD_MORE_DESKTOP_FIVE_COLUMNS,
  LOAD_MORE_MOBILE,
  EMPTY_REQ_ERR_MES,
  FAIL_REQ_ERR_MES,
  EMPTY_RES,
  UPDATE_ERR,
  SERVER_ERR,
  NOT_FOUND_ERR
};
