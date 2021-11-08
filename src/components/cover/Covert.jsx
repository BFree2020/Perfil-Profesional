import React from 'react';
import './Cover.css';
import coverTierra from '../../media/coverTierra.mp4';

const Covert = () => {
    return( 
    <div className='cover-container'>
    <video className='video' src={coverTierra} autoPlay loop muted/>
    <h1>Iván Castiblanco</h1>
    <p>Administrator | Developer | Designer | Front end</p>

</div>
    );
};

export default Covert
