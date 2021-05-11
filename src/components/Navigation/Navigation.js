import "../Navigation/Navigation.css";
import React from "react";
import { Link } from "react-router-dom";
import Burger from "../Burger/Burger";

function Navigation({ isLoggedIn }) {

    const [isBurgerClicked, setIsBurgerClicked] = React.useState(false);

    React.useEffect(() => {
      const body = document.querySelector("body");
      console.log(body)
      isBurgerClicked
        ? body.classList.add("body_locked")
        : body.classList.remove("body_locked");
    }, [isBurgerClicked]);
  
    const handleBurgerClick = () => {
        isBurgerClicked ? setIsBurgerClicked(false) : setIsBurgerClicked(true);
    };

    return isLoggedIn ? (
        <>
            <div className="menu">
                <div className="menu__movies">
                    <Link to="/movies" className="menu__link menu__link_type_movies">Фильмы</Link>
                    <Link to="/saved-movies" className="menu__link menu__link_type_movies">Сохранённые фильмы</Link>
                </div>
                <div className="menu__profile">
                    <Link to="/profile" className="menu__link menu__link_type_account">Аккаунт</Link>
                </div>

                <Burger onClick={handleBurgerClick} isBurgerClicked={isBurgerClicked} />
                <div className={`menu__burger ${isBurgerClicked ? 'opened' : ''}`}>

                    <div className={`menu__burger_container ${isBurgerClicked ? 'opened' : ''}`}>
                        <div className="menu__burger_links">
                            <Link to="/" className="menu__burger_link" onClick={handleBurgerClick}>Главная</Link>
                            <Link to="/movies" className="menu__burger_link" onClick={handleBurgerClick}>Фильмы</Link>
                            <Link to="/saved-movies" className="menu__burger_link" onClick={handleBurgerClick}>Сохранённые фильмы</Link>
                            <Link to="/profile" className="menu__burger_link menu__burger_link-link_type_account" onClick={handleBurgerClick}>Аккаунт</Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    ) : (
        <div className="menu menu_position_right">
            <div className="menu__profile">
                <Link to="/signup" className="menu__link menu__link_type_register">Регистрация</Link>
                <Link to="/signin" className="menu__link menu__link_type_login">Войти</Link>
            </div>
            <Burger onClick={handleBurgerClick} isBurgerClicked={isBurgerClicked} />
            <div className={`menu__burger ${isBurgerClicked ? 'opened' : ''}`}>
                <div className={`menu__burger_container ${isBurgerClicked ? 'opened' : ''}`}>
                    <div className="menu__burger_links">
                        <Link to="/signup" className="menu__burger_link">Регистрация</Link>
                        <Link to="/signin" className="menu__burger_link menu__burger_link_type_login">Войти</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
