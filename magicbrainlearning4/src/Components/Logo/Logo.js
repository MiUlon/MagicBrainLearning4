import React from 'react';
import MagicBrainLogo from './magicBrain.png';
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () => {
    return (
        <div className='grow' style={{ height: '150px', width: '150px'}}>
            <Tilt className='ma4' style={{ height: '150px', width: '150px'}}>
                <div className='pa2 br2 shadow-2 LogoBackground' style={{ height: '150px'}}>
                    <img alt='magicBrain' src={MagicBrainLogo} height='130px' width='130px'></img>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;