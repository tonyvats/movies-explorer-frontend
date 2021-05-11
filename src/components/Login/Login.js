import "./Login.css";
import {Link} from "react-router-dom";



function Login() {
    return (
        <section className="login">
            <form className="form" noValidate>
            <div className="form__fields">
                <Link className="form__logo" to="/"></Link>
                <h2 className="form__title">Рады видеть!</h2>
                <label className="form__label">E-mail</label>
                <input required type="email" className="form__input" name="email"></input>
                <span className="form__error"></span>
                <label className="form__label">Пароль</label>
                <input required minLength="8" type="password" name="password" className="form__input"></input>
                <span className="form__error"></span>
            </div>
            <div className="form__submit">
                <span className="form__submit-error"></span>
                <button   className="form__submit-button" type="submit">Войти</button>
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