import React, {useEffect, useState} from 'react'
import './SearchUser.css'
import { showUserByName } from '../../functions/fetchApi';

export const SearchUser = props => {

    const [name, setName] = useState('');
    const [queryState, setQueryState] = useState('');
    const [response, setResponse] = useState('');

    useEffect (() => {
        if( queryState == 'sending'){
            showUserByName(name, setResponse);
            setQueryState('');
            setName(null);
            console.log(queryState);
        }
    }, [queryState]);

    return (
        <div className='searchUser'>
            {   response === '' &&  
                <>
                    <div>
                        <button onClick={() => props.setAppState('menu')}>BACK</button>
                    </div>
                    
                    <input type='text' className='searchUserInput' placeholder='Type name...' 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                response === 'name' &&
                <div>
                    <button onClick={() => setResponse('')}>BACK</button>
                    <p id='Error'>bad length of name</p>
                </div>
            }
            {
                response.constructor == Object &&
                <div>
                    <button onClick={() => setResponse('')}>BACK</button>
                    <p id='Error'>{response['timeOfCreation']}</p>
                </div>
            }
        </div>
    )
}
export default SearchUser;