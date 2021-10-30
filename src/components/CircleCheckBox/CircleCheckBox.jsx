import React from 'react';
import CheckMark from '../../assets/checkmark.svg';
import './style';

const CircleCheckBox = ({ checked }) => {
    return (
        <div className="circle-checkbox">
            <img className="circle-checkbox-checkmark" src={CheckMark} />
        </div>
    );
}

export default CircleCheckBox;