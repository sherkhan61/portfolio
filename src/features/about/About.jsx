import React from "react";
import photo from "../../assets/images/photo.png"

const About = () => {
    const [header] = React.useState({
        subHeader: "ОБО МНЕ",
        text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
    });
    const [state] = React.useState([
        { id: 1, title: "Name:", text: "Шерхан Тулкибай" },
        { id: 2, title: "Email:", text: "sherkhan-92@bk.ru" },
        { id: 3, title: "Phone:", text: "+7 777 774 13 61" },
        { id: 4, title: "Linkedin", text: "sherkhan-tulkibay" },
    ]);
    return (
        <div className="about">
            <div className="container">
                <div className="common">
                    <h1 className="mainHeader">{header.subHeader}</h1>
                    <div className="commonBorder"></div>
                </div>
                <div className="row  h-650 alignCenter">
                    <div className="col-6">
                        <div className="about__img">
                            <img src={photo} alt="photo" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about__info">
                            <h1>Привет</h1>
                            <div className="about__info-p1">
                                Меня зовут Шерхан. Я начинающий frontend разработчик. Стараюсь практиковаться и
                                совершенствовать свои навыки, а также приобретать более глубокие знания в области
                                front-end. Очень нравиться программировать. Хочу чтобы работа способствовала моему
                                профессиональному росту.
                            </div>
                            <div className="about__info-p2">
                                В настоящее время работаю старшим
                                инженером Департамента информатизации и связи Центрального аппарата Министерства
                                внутренних дел Республики Казахстан
                            </div>
                            <div className="info__contacts">
                                <div className="row">
                                    {state.map((info) => (
                                        <div className="col-6">
                                            <strong>{info.title}</strong>
                                            <p>{info.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
