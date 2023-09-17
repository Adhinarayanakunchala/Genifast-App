import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hospitalimg1 from '../../assets/images/Hospitalimg1.png';
import Hospitalimg2 from '../../assets/images/Hospitalimg2.png';
import Hospitalimg3 from '../../assets/images/Hospitalimg3.png';
import Hospitalimg4 from '../../assets/images/Hospitalimg4.png';
import Hospitalimg5 from '../../assets/images/Hospitalimg5.png';
import './Slider.css';
const Slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className="slide">
                        <img src={Hospitalimg1} alt="Hospitalimages" />
                    </div>
                    <div className="slide">
                        <img src={Hospitalimg2} alt="Hospitalimages" />
                    </div>
                    <div className="slide">
                        <img src={Hospitalimg3} alt="Hospitalimages" />
                    </div>
                    <div className="slide">
                        <img src={Hospitalimg4} alt="Hospitalimages" />
                    </div>
                    <div className="slide">
                        <img src={Hospitalimg5} alt="Hospitalimages" />
                    </div>
                </Slider>
            </div>
        </>
    )

};
export default Slide;