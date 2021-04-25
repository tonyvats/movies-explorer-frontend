import "../Navigation/Navigation.css";
import { Link } from "react-router-dom";

function Navigation({ isLoggedIn }) {
  return isLoggedIn ? (
    <div className="nav">
        <div className="nav__menu">
            <nav>
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link className="nav__link" to="/movies">
                            Фильмы
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to="/saved-movies">
                            Сохранённые фильмы
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="nav__profile">
            <nav>
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link className="nav__link menu__link_type_profile" to="/profile">
                            Аккаунт
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  ) : (
    <nav className="nav">
        <ul className="nav__list">
            <li className="nav__item">
            <Link className="nav__link" to="/signup">
                Регистрация
            </Link>
            </li>
            <li className="nav__item">
            <Link className="nav__link nav__button" to="/signin">
                Войти
            </Link>
            </li>
        </ul>
    </nav>
  );
}

export default Navigation;