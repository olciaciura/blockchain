import './App.css';
import React, {useState} from 'react'

import Menu from './components/menu/Menu.jsx'

import SearchUser from './components/SearchUser/SearchUser.jsx';
import SearchByHash from './components/SearchByHash/SearchByHash.jsx';
import SearchByUUID from './components/SearchByUUID/SearchByUUID.jsx';
import SearchByAddress from './components/SearchByAddress/SearchByAddress.jsx';
import AddTransaction from './components/AddTransaction/AddTransaction.jsx';
import AddUser from './components/AddUser/AddUser.jsx';
import CountTransaction from './components/CountTransaction/CountTransaction.jsx';
import ShowBalance from './components/ShowBalance/ShowBalance.jsx';
import ShowLast from './components/ShowLast/ShowLast.jsx';

function App() {

    const [optionsUp, setOptionsUp] = useState([
        'Show transaction by wallet address', 
        'search block by hash', 
        'search block by UUID',
        'add new user',
        'print user information'
    ])
    const [optionsDown, setOptionsDown] = useState([
        'show last block',
        'Add transaction',
        'Show total baalnce',
        'Check number of transaction'
    ])

    const [appState, setAppState] = useState('menu');

    return (
        <div className="App">
        {
            appState === 'menu' && 
            <Menu setAppState={setAppState} optionsUp={optionsUp} optionsDown={optionsDown}/>
        }
        {
            appState === optionsUp[0] &&
            <SearchByAddress setAppState={setAppState} />
        }
        {
            appState === optionsUp[1] &&
            <SearchByHash setAppState={setAppState} />
        }
        {
            appState === optionsUp[2] &&
            <SearchByUUID setAppState={setAppState} />
        }
        {
            appState === optionsUp[3] &&
            <AddUser setAppState={setAppState} />
        }
        {
            appState === optionsUp[4] &&
            <SearchUser setAppState={setAppState} />
        }
        {
            appState === optionsDown[0] &&
            <ShowLast setAppState={setAppState} />
        }
        {
            appState === optionsDown[1] &&
            <AddTransaction setAppState={setAppState} />
        }
        {
            appState === optionsDown[2] &&
            <ShowBalance setAppState={setAppState} />
        }
        {
            appState === optionsDown[3] &&
            <CountTransaction setAppState={setAppState} />
        }

        </div>
    );
}

export default App;
