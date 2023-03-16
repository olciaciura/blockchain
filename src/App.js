import './App.css';
import React, {useState} from 'react'

function App() {

    const [optionsUp, setOptionsUp] = useState([
        'Add transaction to blocks', 
        'search block by hash', 
        'search block by UUID',
        'add new user',
        'print user information'
    ])
    const [optionsDown, setOptionsDown] = useState([
        'show last block',
        'write users to file',
        'write blockchain file',
        'read user JSON',
        'print user'
    ])

    return (
        <div className="App">
            <div className="Options">
                {optionsUp.map((option, index) => (
                    <button id='Option'>
                        <p id='Name'>{option}</p>
                    </button>
                ))}
            </div>
            <div className="PageTitle">
                <p id="Title">BLOCKCHAIN</p>
            </div>
            <div className="Options">
                {optionsDown.map((option, index) => (
                    <button id='Option'>
                        <p id='Name'>{option}</p>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default App;
