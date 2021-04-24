import React from "react";
import image1 from "../../assets/images/1 300.png"
import image2 from "../../assets/images/2 300.png"
import image3 from "../../assets/images/3 300.png"
import image4 from "../../assets/images/HTML.jpg"
import image5 from "../../assets/images/React.jpg"


const Awards = () => {
    const [header] = React.useState({
        subHeading: "НАГРАДЫ"
    });
    const [state] = React.useState([
        {
            id: 1,
            heading: "Благодарственное письмо",
            img: image1,
        },
        {
            id: 2,
            heading: "Грамота",
            img: image2,
        },
        {
            id: 3,
            heading: "Благодарственное письмо",
            img: image3,
        },
        {
            id: 4,
            heading: "Сертификат",
            img: image4,
        },
        {
            id: 5,
            heading: "Сертификат",
            img: image5,
        },
    ]);
    return (
        <div className="awards" id="awards">
            <div className="container">
                <div className="common">
                    <h1 className="mainHeader">{header.subHeading}</h1>
                    <div className="commonBorder"></div>
                </div>
                <div className="row">
                    {state.map((prices) => (
                        <div className="col-4" key={prices.id}>
                            <div className="award">
                                <div className="awardHeading">{prices.heading}</div>
                                <div className="awards-images">
                                    <img src={prices.img} alt=""/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Awards;
