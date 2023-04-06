import React from 'react'
import './Menu.css'

export const Menu = props => {
    return (
        <div className="Menu">
            <div className="Options">
                {props.optionsUp.map((option, index) => (
                    <button id='Option' onClick={() => {props.setAppState(option)}}>
                        <p id='Name'>{option}</p>
                    </button>
                ))}
            </div>
            <div className="PageTitle">
                <p id="Title">BLOCKCHAIN</p>
            </div>
            <div className="Options">
                {props.optionsDown.map((option, index) => (
                    <button id='Option' onClick={() => {props.setAppState(option)}}>
                        <p id='Name'>{option}</p>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Menu;

