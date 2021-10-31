import React from 'react';
import './style';

const Button = ({ text, onClick, btnClass, enabled, todoId = null }) => {
    return (
        <div className="button-container">
            <div className={'button ' + btnClass, `button ${btnClass} ${enabled ? '' : 'disabled'}`} onClick={() => onClick(todoId)}>
                <span className={`${btnClass}-text button-text`}>
                    {text}
                </span>
            </div>
        </div>

    );
}

export default Button;