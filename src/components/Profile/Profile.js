import React from "react";

import "./Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router";
import Popup from "../Popup/Popup";

import { UPDATE_ERR, SERVER_ERR, NOT_FOUND_ERR } from "../../utils/constants";



function Profile(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const [isEditable, setIsEditable] = React.useState(false);
    const [isQuitPopupOpen, setIsQuitPopupOpen] = React.useState(false);
    const [isSuccessPopupOpen, setIsSuccessPopupOpen] = React.useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(props.values, setIsEditable, setIsSuccessPopupOpen);
    };

    const onSuccess = (e) => {
        e.preventDefault();
        history.goBack();
    };

    const handleQuit = () => {
        setIsQuitPopupOpen(true);
    };  

    const closeAllPopups = () => {
        setIsQuitPopupOpen(false);
        setIsSuccessPopupOpen(false);
    };
    
    const enableEditProfile = () => {
        setIsEditable(true);
    };

    const errorStatusTransformer = (status) => {
        if (status === '400') {
          return UPDATE_ERR;
        }
        if (status === '500') {
          return SERVER_ERR;
        }
        if (status === '404') {
          return NOT_FOUND_ERR;
        }
    };

    const errorMessage = errorStatusTransformer(props.submitError);


    return (
        <>
            <Header isLoggedIn={props.isLoggedIn} isMainPage={!props.isMainPage} />
            <section className="profile">

                <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
                <form
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    className="profile__form"
                >
                <label className="profile__label">Имя</label>
                <input
                    minLength="2"
                    maxLength="30"
                    required
                    type="text"
                    name="username"
                    id="username"
                    className="profile__input"
                    placeholder={currentUser.name}
                    onChange={props.handleChange}
                    disabled={!isEditable}
                    value={props.values.username}
                ></input>
                <span className="profile__error">{props.errors.username}</span>
                <label className="profile__label">E-mail</label>
                <input
                    required
                    type="email"
                    id="email"
                    className="profile__input"
                    name="email"
                    placeholder={currentUser.email}
                    onChange={props.handleChange}
                    disabled={!isEditable}
                    value={props.values.email}
                ></input>
                <span className="profile__error">{props.errors.email}</span>
                <span className="submit__error">{errorMessage}</span>
                {isEditable ? (
                    <button
                    className="profile__button profile__button_type_submit"
                    type="submit"
                    disabled={!props.isValid}
                    >
                    {props.isLoading ? "Сохранение..." : "Сохранить"}
                    </button>
                ) : (
                    <>
                    <button className="profile__button" onClick={enableEditProfile}>
                        Редактировать
                    </button>
                    <button
                        className="profile__button profile__button_color_red"
                        onClick={handleQuit}
                        type="button"
                    >
                        Выйти из аккаунта
                    </button>
                    </>
                )}
                </form>

                <Popup
                    isOpen={isQuitPopupOpen}
                    onClose={closeAllPopups}
                    onSubmit={props.onSignOut}
                    title="Вы уверены?"
                    buttonName="Да, выйти"
                />
                <Popup
                    isOpen={isSuccessPopupOpen}
                    onClose={closeAllPopups}
                    onSubmit={onSuccess}
                    title="Профиль обновлён!"
                    buttonName="Назад"
                />
            
            </section>
        </>
    )
}

export default Profile;