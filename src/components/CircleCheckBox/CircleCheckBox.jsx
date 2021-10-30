import React from 'react';
import CheckMark from '../../assets/checkmark.svg';
import './style';

const CircleCheckBox = ({ checked, handleClick, todoId }) => {
    return (
        <div className={`circle-checkbox ${checked ? 'checked' : 'unchecked'}`} onClick={() => handleClick(todoId)}>
            {checked ? <img className="circle-checkbox-checkmark" src={CheckMark} /> : null}
        </div>
    );
}

export default CircleCheckBox;