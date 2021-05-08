import "./Register.css";
import {Link} from "react-router-dom";



function Register() {
    return (
        <section className="register">
            <form className="form" noValidate>
            <div className="form__fields">
                <Link className="form__logo" to="/"></Link>
                <h2 className="form__title">Добро пожаловать!</h2>

                <label className="form__label">Имя</label>
                <input minLength="2" maxLength="30" required type="text" name="username" className="form__input"></input>
                <span className="form__error"></span>

                <label className="form__label">E-mail</label>
                <input required type="email" className="form__input" name="email"></input>
                <span className="form__error"></span>

                <label className="form__label">Пароль</label>
                <input required minLength="8" type="password" name="password" className="form__input"></input>
                <span className="form__error">Что-то пошло не так..</span>
            </div>
            <div className="form__submit">
                <span className="form__submit-error"></span>
                <button   className="form__submit-button" type="submit">Зарегистрироваться</button>
                <div className="form__link-row">
                    <span className="form__span">Уже зарегистрированы?</span>
                    <Link to="/signin" className="form__link">Войти</Link>
                </div>
            </div>
            </form>
    </section>
    )
}

export default Register;