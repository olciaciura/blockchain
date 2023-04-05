import './App.css';
import React, {useState} from 'react'

import Menu from './components/menu/Menu.jsx'
import SearchUser from './components/SearchUser/SearchUser';

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

    const [appState, setAppState] = useState('menu');

    return (
        <div className="App">
        {
            appState == 'menu' && 
            <Menu setAppState={setAppState} optionsUp={optionsUp} optionsDown={optionsDown}/>
        }
        {
            appState == optionsUp[4] &&
            <SearchUser setAppState={setAppState} />
        }
        </div>
    );
}

export default App;
