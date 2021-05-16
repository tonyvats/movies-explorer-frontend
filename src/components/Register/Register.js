import "./Register.css";
import {Link} from "react-router-dom";



function Register(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onRegister(props.values);
    }

    const errorStatusTransformer = (status) => {

        if(status === '400') {
            return "При регистрации пользователя произошла ошибка."
        }
        if(status === '409') {
            return "Пользователь с таким email уже существует."
        }
        if(status === '500') {
            return "На сервере произошла ошибка."
        }
        if(status === '404') {
            return " Страница по указанному маршруту не найдена."        
        }
    
    }
    
    const errorMessage = errorStatusTransformer(props.submitError)

    return (
        <section className="register">
            <form className="form" noValidate onSubmit={handleSubmit}>
            <div className="form__fields">
                <Link className="form__logo" to="/"></Link>
                <h2 className="form__title">Добро пожаловать!</h2>

                <label className="form__label">Имя</label>
                <input 
                    minLength="2" 
                    maxLength="30" 
                    required 
                    type="text" 
                    value={props.values.username || ""}
                    name="username" 
                    className="form__input" 
                    onChange={props.handleChange} 
                >    
                </input>
                <span className="form__error">{props.errors.username}</span>

                <label className="form__label">E-mail</label>
                <input 
                    required 
                    type="email" 
                    onChange={props.handleChange}
                    className="form__input" 
                    name="email" 
                    value={props.values.email}
                >
                </input>
                <span className="form__error">{props.errors.email}</span>

                <label className="form__label">Пароль</label>
                <input 
                    required 
                    minLength="8" 
                    type="password" 
                    value={props.values.password}
                    name="password" 
                    className="form__input" 
                    onChange={props.handleChange}
                >
                </input>
                <span className="form__error">{props.errors.password}</span>
            </div>
            <div className="form__submit">
                <span className="form__submit-error">{errorMessage}</span>
                <button className="form__submit-button" type="submit" disabled={!props.isValid}>
                    {props.isLoading ? "Загрузка..." : "Зарегистрироваться"}
                </button>
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