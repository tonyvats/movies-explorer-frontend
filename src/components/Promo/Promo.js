import "./Promo.css";
import logo from "../../images/promo-logo.svg"
import { Link } from "react-scroll";

function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <img className="promo__logo" src={logo} alt="Логотип Web-планета"></img>
                <div className="promo__titles">
                    <h1 className="promo__title">
                        Учебный проект студента факультета<br />Веб-разработки.
                    </h1>
                    <h3 className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h3>
                    <Link className="promo__link" to="portfolio" smooth={true}>Узнать больше</Link>
                </div> 
            </div>
        </section>  
    );
}

export default Promo;