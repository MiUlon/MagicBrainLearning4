import React from 'react';
import './DetectImage.css';

const DetectImage = ({ linkURL }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img alt='' src={linkURL} width='500px' height='auto'></img>
            </div>
        </div>
    )
}

export default DetectImage;