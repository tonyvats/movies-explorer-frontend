import "./SearchForm.css";

function SearchForm(props) {

    return (
        <section className="search-form">
        <form noValidate onSubmit={props.onSubmit} className="search-form__container">
            <input 
                className="search-form__input" 
                type="text" 
                value={props.searchValue || ""}
                required 
                placeholder="Фильм" 
                onChange={props.onChange}
            >
            </input>
            <button className="search-form__submit-button" type="submit">Поиск</button>
            <label className="search-form__checkbox-label">Короткометражки
                <input className="search-form__checkbox" type="checkbox" onChange={props.handleCheck}></input>
                <span className="checkbox">
                    <span className="checkbox__switch"></span>
                </span>
            </label>
        </form>
        </section>
    );
}

export default SearchForm;
