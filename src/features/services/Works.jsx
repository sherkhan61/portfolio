import React from "react";
import {FaCloudSun, FaFilm, FaMicrophone, FaRegCreditCard, FaStore, FaUser,} from "react-icons/fa";

const Works = () => {
    const [header] = React.useState({
        mainHeader: "РАБОТЫ",
        subHeading: "Мои работы",
    });
    const [state] = React.useState([
        {
            id: 1,
            icon: <FaUser className="commonIcons" />,
            heading: "Developers",
            text:
                "Мини социальная сеть взаимодействие с помощью API с backend данными юзеров, новостей и музыки",
            url: 'https://sherkhan61.github.io/developers/'
        },
        {
            id: 2,
            icon: <FaRegCreditCard className="commonIcons" />,
            heading: "E-commerce",
            text:
                "Мини онлайн магазин взаимодействие с помощью API с backend данными Commercejs.com",
            url: 'https://sherkhan-e-store.netlify.app'
        },
        {
            id: 3,
            icon: <FaCloudSun className="commonIcons" />,
            heading: "Weather",
            text:
                "Прогноз погоды взаимодействие с помощью API с backend данными openweathermap",
            url: 'https://sherkhan61.github.io/weather/'
        },
        {
            id: 4,
            icon: <FaFilm className="commonIcons" />,
            heading: "Movie",
            text:
                "Фильмы онлайн взаимодействие с помощью API с backend данными themoviedb",
            url: 'https://sherkhan61.github.io/movie'
        },
        {
            id: 5,
            icon: <FaMicrophone className="commonIcons" />,
            heading: "Podcast",
            text:
                "Подкасты о путешествии, впечатлениях о новых местах, а также беседы с любителями путешествий",
            url: 'https://zhanagul-46e9d.firebaseapp.com'
        },
        {
            id: 6,
            icon: <FaStore className="commonIcons" />,
            heading: "DAVID CHU'S CHINA BISTRO",
            text:
                "Выполненное задание во время изучения HTML, CSS, JS на онлайн платформе курсов программирования Coursera ",
            url: 'https://sherkhan61.github.io/coursera-html-css-javascript/module5-solution/'
        },
    ]);
    return (
        <div className="works">
            <div className="container">
                <div className="works__header">
                    <div className="common">
                        <h3 className="heading">{header.mainHeader}</h3>
                        <h1 className="mainHeader">{header.subHeading}</h1>
                        <div className="commonBorder"></div>
                    </div>

                    <div className="row bgMain">
                        {state.map((info) => (
                            <div className="col-4 bgMain">
                                <a href={info.url} target="_blank">
                                    <div className="works__box">
                                        {info.icon}
                                        <div className="works__box-header">{info.heading}</div>
                                        <div className="works__box-p">{info.text}</div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;
