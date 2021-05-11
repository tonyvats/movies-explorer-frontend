import "./AboutMe.css";
import myPhoto from "../../images/myPhoto.JPG"; 

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <article className="about-me__info">
          <h3 className="about-me__info_title">Антон</h3>
          <h4 className="about-me__info_subtitle">
            Фронтенд-разработчик, 28 лет
          </h4>
          <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ.
            Я безумно люблю музыку и путешевствия, поэтому каждый год мы с супругой 
            посещяем несколько музыкальных фестивалей по всей Европе. 
            Послендие 9 лет тружусь в сфере QA и год назад твердо решил 
            двигаться дальше в сторону веб разработки, начав с курсов Яндекс.Практикума.
          </p>
          <ul className="about-me__links">
            <li className="about-me__list-item">
              <a href="https://telegram.me/tonyvatc" className="about-me__link">Telegram</a>
            </li>
            <li className="about-me__list-item">
              <a href="https://github.com/tonyvats" className="about-me__link">Github</a>
            </li>
          </ul>
        </article>
        <img className="about-me__image" alt="Моя фотография" src={myPhoto}></img> 
      </div>
    </section>
  );
}

export default AboutMe;
