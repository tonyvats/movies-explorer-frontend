import "./Profile.css";



function Profile() {
    return (
        <section className="profile">


            <div className="profile__info">
                <h2 className="profile__title">Привет, Виталий!</h2>

                <div className="profile__info-item">
                    <h3 className="profile__text">Имя</h3>
                    <p className="profile__text">Виталий</p>
                </div>

                <div className="profile__info-item">
                    <h3 className="profile__text">E-mail</h3>
                    <p className="profile__text">pochta@yandex.ru</p>
                </div>

            </div>

            <div className="profile__buttons">
                <button className="profile__update-button">Редактировать</button>
                <button className="profile__logout-button">Выйти из аккаунта</button>
            </div>

        </section>
    )
}

export default Profile;