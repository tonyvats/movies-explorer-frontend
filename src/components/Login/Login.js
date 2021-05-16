import React from 'react';
import "./Login.css";
import {Link} from "react-router-dom";

function Login(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onLogin(props.values);
    }

    const errorStatusTransformer = (status) => {
        if(status === '400') {
          return "Вы ввели неправильный логин или пароль."
        }
        if(status === '401') {
          return "При авторизации произошла ошибка. Токен не передан или передан не в том формате."
        }
        if(status === '500') {
          return "На сервере произошла ошибка."
        }
        if(status === '404') {
          return " Страница по указанному маршруту не найдена."
        }
        if(status === '429') {
          return "Слишком много запросов."
        }
    }

    const errorMessage = errorStatusTransformer(props.submitError)

    return (
        <section className="login">
            <form className="form" noValidate onSubmit={handleSubmit}>
            <div className="form__fields">
                <Link className="form__logo" to="/"></Link>
                <h2 className="form__title">Рады видеть!</h2>
                <label className="form__label">E-mail</label>
                <input 
                    required 
                    type="email" 
                    className="form__input" 
                    name="email" 
                    onChange={props.handleChange}
                    value={props.values.email}
                />
                <span className="form__error">{props.errors.email}</span>
                <label className="form__label">Пароль</label>
                <input 
                    required 
                    minLength="8" 
                    type="password" 
                    name="password" 
                    className="form__input" 
                    onChange={props.handleChange}
                    value={props.values.password}
                />
                <span className="form__error">{props.errors.password}</span>
            </div>
            <div className="form__submit">
                <span className="form__submit-error">{errorMessage}</span>
                <button   className="form__submit-button" type="submit" onSubmit={handleSubmit} disabled={!props.isValid}>
                    {props.isLoading ? "Загрузка..." : "Войти"}
                </button>
                <div className="form__link-row">
                    <span className="form__span">Еще не зарегистрированы?</span>
                    <Link to="/signup" className="form__link">Регистрация</Link>
                </div>
            </div>
            </form>
        </section>
    )
}

export default Login;