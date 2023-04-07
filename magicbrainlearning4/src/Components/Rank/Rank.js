import React from 'react';
import './Rank.css';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='white f3 RankDesign'>
                {`${name}, your current entries count:`}
            </div>
            <div className='white f1 RankDesign RankMarginTop'>
                {entries}
            </div>
        </div>
    )
}

export default Rank;