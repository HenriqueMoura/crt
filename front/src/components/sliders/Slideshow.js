import React from 'react';
import './Slideshow.css';

//make it better
// EXEMPLE STRUTUR
const dataSlide = [
    {
        "title": "Olá, o que você está buscando?",
        "description": " Criar ou migrar seu e-commerce?",
        "dataImg": "/images/banner-1.jpg"

    },
    {
        "title": "Slide 2, o que você está buscando?",
        "description": " Criar ou migrar seu  e-commerce?",
        "dataImg": "/images/banner-1.jpg"


    },
    {
        "title": "Slide 3, o que você está buscando?",
        "description": " Criar ou migrar seu e-commerce?",
        "dataImg": "/images/banner-1.jpg"
    }
];
// EXEMPLE
const delay = 100000;

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
                        <div className="slideInfo">
                            <h3>{e.title}</h3>
                            <p>{e.description}</p>
                        </div>
                    </div>

                ))}

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