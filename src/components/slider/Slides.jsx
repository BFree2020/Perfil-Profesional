import React from "react";
import "../slider/Slider.css";

const slidesInfo = [
    {
        src:"https://images.pexels.com/photos/2524159/pexels-photo-2524159.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        alt: "Projet1",
        desc: "IMC"
    },

    {
        src:"https://images.pexels.com/photos/4482936/pexels-photo-4482936.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        alt: "Projet2",
        desc: "Calculator"
    },

    {
        src:"https://images.pexels.com/photos/7991162/pexels-photo-7991162.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        alt: "Projet3",
        desc: "Movie App"
    }
]

const slides = slidesInfo.map((slide) => (
    <div className='slide-container'>
        <img src={slide.src} alt={slide.alt} />
        <div className='slide-desc'>
            <span>{slide.desc}</span>
        </div>
     </div>
))

export default slides;

   
    

