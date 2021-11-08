import React from 'react'
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "../slider/Slider.css";

const Slidert = () => {
    return (
        <div className= "carousel-container">
            <div className="carousel-tittle">
                <h2>My Projects</h2>
            </div>

            <Carousel 
                arrows
                slidesPerPage={3}
                infinite
                animationSpeed={200}
                centered
                offset={50}
                itemWidth={300}
                slides={Slides}
                breakpoints={{
                    960:{
                        slidePerPage:1,
                        arrows: false,
                        itemWidth:250,
                    },
                }}
             />
            
        </div>
    )
}

export default Slidert
