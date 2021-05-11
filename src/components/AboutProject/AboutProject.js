import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about">
      <h2 className="about__title">О проекте</h2>
      <div className="about__articles">
        <article className="about__article">
          <h3 className="about__article about__article_title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about__article about__article_text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </article>
        <article className="about__article">
          <h3 className="about__article about__article_title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about__article about__article_text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>

      <div className="about__schedule">
        <div className="about__schedule-frontend">
          1 неделя
        </div>
        <div className="about__schedule-backend">4 недели</div>
        <div className="about__schedule-subtitle">
          Back-end
        </div>
        <div className="about__schedule-subtitle">
          Front-end
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
