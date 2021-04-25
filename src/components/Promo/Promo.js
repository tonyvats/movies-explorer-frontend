import "./Promo.css";

function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <div className="promo__titles">
                    <h1 className="promo__title">
                        Учебный проект студента факультета Веб-разработки.
                    </h1>
                    <h3 className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h3>
                </div> 
                <div className="promo__logo"></div>
                <button className="promo__button">Узнать больше</button>
            </div>
        </section>  
    );
}

export default Promo;