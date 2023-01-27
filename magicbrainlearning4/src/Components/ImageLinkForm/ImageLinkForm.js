import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className=''>
            <p className='center black f3 ImageLinkFormDesign'>Magic Brain app will detect face in your picture. Give it a try!</p>
            <div className='center ImageLinkFormMaxWidth'>
                <input className='center f4 pa2 w-70 ImageLinkFormBorder' type='text' onChange={onInputChange}></input>
                <button className='center w-30 grow f4 link ph3 pv2 dib white ImageLinkFormBackground ImageLinkFormBorder' onClick={onButtonSubmit}>Detect!</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;