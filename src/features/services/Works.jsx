import React from "react";
import {FaCloudSun, FaHotel, FaFilm, FaMicrophone,
    FaRegCreditCard, FaStore, FaPizzaSlice, FaUser,} from "react-icons/fa";

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
            url: 'https://sherkhan61.github.io/developers/',
            stack: "TS, React JS, Redux, SASS"
        },
        {
            id: 2,
            icon: <FaHotel className="commonIcons" />,
            heading: "Hotel",
            text:
                "Вебсайт для замечательного Отеля на берегу моря с роскошными номерами",
            url: 'https://sherkhan61-hotel.netlify.app/',
            stack: "React JS, CSS3, styled-components"
        },
        {
            id: 3,
            icon: <FaRegCreditCard className="commonIcons" />,
            heading: "E-commerce",
            text:
                "Мини онлайн магазин взаимодействие с помощью API с backend данными Commercejs.com",
            url: 'https://sherkhan-e-store.netlify.app',
            stack: "React JS, Stripe JS, Material UI"
        },
        {
            id: 4,
            icon: <FaCloudSun className="commonIcons" />,
            heading: "Weather",
            text:
                "Прогноз погоды взаимодействие с помощью API с backend данными openweathermap",
            url: 'https://sherkhan61.github.io/weather/',
            stack: "React JS, Axios, SCSS"
        },
        {
            id: 5,
            icon: <FaPizzaSlice className="commonIcons" />,
            heading: "Pizza",
            text:
                "Онлайн магазин для заказа вкусной пиццы",
            url: 'https://sherkhan61.github.io/pizza/',
            stack: "React JS, SCSS"
        },
        {
            id: 6,
            icon: <FaFilm className="commonIcons" />,
            heading: "Movie",
            text:
                "Фильмы онлайн взаимодействие с помощью API с backend данными themoviedb",
            url: 'https://sherkhan61.github.io/movie',
            stack: "React JS, Redux, Axios, Bootstrap, SCSS"
        },
        {
            id: 7,
            icon: <FaMicrophone className="commonIcons" />,
            heading: "Podcast",
            text:
                "Подкасты о путешествии, впечатлениях о новых местах, а также беседы с любителями путешествий",
            url: 'https://zhanagul-46e9d.firebaseapp.com',
            stack: "HTML, CSS"
        },
        {
            id: 8,
            icon: <FaStore className="commonIcons" />,
            heading: "DAVID CHU'S CHINA BISTRO",
            text:
                "Выполненное задание во время изучения HTML, CSS, JS на онлайн платформе курсов программирования Coursera ",
            url: 'https://sherkhan61.github.io/coursera-html-css-javascript/module5-solution/',
            stack: "HTML, CSS, JQuery"
        },
    ]);
    return (
        <div className="works" id="works">
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
                                        <div className="works__box-p">{info.stack}</div>
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
