import './Footer.css';

function Footer() {
  return(
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__author">&copy; 2021 Вац Антон</p>
        <ul className="footer__links">
          <li className="footer__links-item">
            <a href="https://praktikum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
          </li>
          <li className="footer__links-item">
            <a href="https://github.com/tonyvats" className="footer__link">Github</a>
          </li>
          <li className="footer__links-item">
            <a href="https://telegram.me/tonyvatc" className="footer__link">Telegram</a>
          </li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer;