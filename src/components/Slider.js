import { useState } from "react";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";
import "../styles/Slider.css";


function Slider({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    function nextSlide() {
        setCurrent(current === length -1 ? 0 : current+1);
    };
    function prevSlide() {
        setCurrent(current === 0 ? length -1 : current-1);
    };

    return(
        <div className="slider">
        {slides.map((picture, index) => {
        return(    
            <div key={index} 
            className={index === current ? "slide active-picture" : "slide inactive-picture"}
            > {index === current && (<img src={picture} alt ="" className="pic-slider" />)}
            </div>)
        })}

        {length > 1 ? (
            <>
                <div className="prev-slider" onClick={prevSlide}>
                    <img src={arrowLeft} alt ="" className="iconPrev-slider"/>
                </div>
                <div className="next-slider" onClick={nextSlide}>
                    <img src={arrowRight} alt="" className="iconNext-slider"/>
                </div>
            </> ) : null }
        </div>    
    );
};

export default Slider;