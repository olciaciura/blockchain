import React, {useEffect, useState} from 'react'
import './AddUser.css'
import { addUser } from '../../functions/fetchApi';

export const AddUser = props => {

    const [username, setUsername] = useState('');
    const [balance, setBalance] = useState('');
    const [queryState, setQueryState] = useState('');
    const [response, setResponse] = useState('');

    useEffect (() => {
        if( queryState == 'sending'){
            addUser(username, balance, setResponse);
            setQueryState('');
            setUsername(null);
            setBalance(null);
            console.log(queryState);
        }
    }, [queryState]);

    return (
        <div className='addUser'>
            { response === '' &&
                <>
                    <div>
                        <button onClick={() => props.setAppState('menu')}>BACK</button>
                    </div>
                        
                    <input type='text' className='addUserInput' placeholder='Type username...' 
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input type='text' className='addUserInput' placeholder='Type balance...' 
                        required
                        value={balance}
                        onChange={(e) => setBalance(e.target.value)}
                    />
                    <button className='SearchButton' onClick={() => setQueryState('sending')}>SEND</button>
                </>
            }
            {
                response === null &&
                <div>
                    <button onClick={() => setResponse('')}>BACK</button>
                    <p id='Error'>ERROR</p>
                </div>
                
            }
            {
                response === 'true' &&
                <div>
                    <button onClick={() => setResponse('')}>BACK</button>
                    <p id='Error'>Correctly added user to database</p>
                </div>
            }
            {
                response === 'Name already in use' &&
                <div>
                    <button onClick={() => setResponse('')}>BACK</button>
                    <p id='Error'>{response}</p>
                </div>
            }
        </div>
    )
}
export default AddUser;