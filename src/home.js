import React from 'react';
import './home.css';
import index1 from './img/index-1.png';
import index2 from './img/index-2.png';
import index3 from './img/fb.png';

const Home = () => {
    return (
        <div className="hover">
            <img src={ index2 } alt="index2" />
            <img src={ index1 } alt="index1" />
            <img src={ index3 } alt="index3" className="fb" />
        </div>
    )
}

export { Home };