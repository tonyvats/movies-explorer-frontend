import './Techs.css';

function Techs() {
    return(
        <section className="techs">
        <h2 className="techs__title">Технологии</h2>
        <article className="techs__article">
            <h3 className="techs__article techs__article_title">7 технологий</h3>
            <p className="techs__article techs__article_text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </article>
        <div className="techs__type">
            <div className="techs__type-item">HTML</div>
            <div className="techs__type-item">CSS</div>
            <div className="techs__type-item">JS</div>
            <div className="techs__type-item">React</div>
            <div className="techs__type-item">Git</div>
            <div className="techs__type-item">Express.js</div>
            <div className="techs__type-item">MongoDB</div>
        </div>
        </section>
    );
}

export default Techs;