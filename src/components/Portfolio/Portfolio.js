import './Portfolio.css';

function Portfolio() {
  return(
<section className="portfolio">
  <h2 className="portfolio__title">Портфолио</h2>
  <div className="portfolio__container">
    <a className="portfolio__link" href="https://tonyvats.github.io/how-to-learn/">Статичный сайт</a>
    <div className="portfolio__arrow-button"></div>
  </div>
  <div className="portfolio__container">
    <a className="portfolio__link" href="https://tonyvats.github.io/russian-travel/">Адаптивный сайт</a>
    <div className="portfolio__arrow-button" ></div>
  </div>
  <div className="portfolio__container">
    <a 
        className="portfolio__link"  
        href="https://vatc.nomoredomains.icu"
    >
        Одностраничное приложение
    </a>
    <div className="portfolio__arrow-button" ></div>
  </div>
</section>
  );
}

export default Portfolio;