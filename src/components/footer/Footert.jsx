import React from 'react'
import '../footer/Footer.css'


const Footert = () => {
    return (
        <footer className='footer'>
            <div className='footer-info'>
                <h1>Your Name</h1>
                <p>Based in Your City</p>
            </div>
            <div className='footer-contact'>
                <h3>Contact Me</h3>
                <p>And let´s get down to work</p>
            </div>
            <div className='footer-sns'>
                <div className='desing-by'>
                    Desing By Iván Castiblanco
                </div>
                <div className='sns-links'>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>

                    <a href="https://twiter.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter twitter"></i>
                    </a>

                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook facebook"></i>
                    </a>


                </div>
            </div>

        </footer>
    )
}

export default Footert
