import React from 'react';
import '../App.css';
import './HomeSections.css';
import { useState } from 'react';
import { useEffect } from 'react';
import plane from '../images/plane.png';
import Fade from 'react-reveal/Fade';

function HeroSection() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
    }, []);

    return (
        <Fade>
            <div className='hero-container'>
                
                <div className='plane' >
                    <img src={plane} alt='plane' style={{ transform: `translateX(${offsetY * 0.3}px)` }}/>
                </div>
                
                <div className='hero-text'>
                <h1>Hello!</h1>               
                <h1>I am Camila.</h1>        
                </div>    
                
                <div className="cloud-1" style={{ transform: `translateX(${offsetY * -0.2}px)` }}></div>
                <div className="cloud-2" style={{ transform: `translateX(${offsetY * 0.4}px)` }}></div>
                <div className="cloud-3" style={{ transform: `translateX(${offsetY * 0.1}px)` }}></div>
                <div className="cloud-4" style={{ transform: `translateX(${offsetY * -0.3}px)` }}></div>  
                <div id='scroll'><p>psst, scroll down</p></div>
            </div> 
        </Fade>
           

        
    )
}

export default HeroSection;