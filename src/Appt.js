import React, {useState, useEffect} from 'react';
import './App.css';
import Covert from './components/cover/Covert';
import Navbart from './components/navbar/Navbart';
import About from './components/about/Aboutt';
import Slider from './components/slider/Slidert';
import Info from './components/info/Infot';
import Footer from './components/footer/Footert';

function Appt() {
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollHeight(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
       }, [scrollHeight]);
    

    return (
    <div className="App">
        <Navbart isScrolling={scrollHeight}/>
        <Covert />
        <About />
        <Slider />
        <Info />
        <Footer />
    </div>
    );
}

export default Appt;