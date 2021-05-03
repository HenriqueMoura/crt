import React, { useState } from 'react';
import './Slideshow.css';
// EXEMPLE RESPONSE -  REQUEST

const dataSlide = [
    {
        "html": "Testo um",
        "dataImg": "/images/banner-1.jpg"

    },
    {
        "html": "Testo dois",
        "dataImg": "/images/banner-1.jpg"


    },
    {
        "html": "Testo tres",
        "dataImg": "/images/banner-1.jpg"
    }
];
// EXEMPLE
const delay = 5000;

function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === dataSlide.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >

                {dataSlide.map((e, index) => (
                    <div
                        className="slide"
                        key={index}
                        style={{ backgroundImage: `url(${e.dataImg})` }}
                    >
                        {e.html}
                    </div>

                ))}
                {console.log(dataSlide)}

            </div>

            <div className="slideshowDots">
                {dataSlide.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow