import "./SearchForm.css";

function SearchForm() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className="search-form">
        <form noValidate onSubmit={handleSubmit} className="search-form__container">
            <input className="search-form__input" type="text" placeholder="Фильм" required></input>
            <button className="search-form__submit-button" type="submit">Поиск</button>
            <label className="search-form__checkbox-label">Короткометражки
                <input className="search-form__checkbox" type="checkbox"></input>
                <span className="checkbox">
                    <span className="checkbox__switch"></span>
                </span>
            </label>
        </form>
        </section>
    );
}

export default SearchForm;
