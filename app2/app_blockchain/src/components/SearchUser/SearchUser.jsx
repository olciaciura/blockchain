import React, {useEffect, useState} from 'react'
import './SearchUser.css'
import { showUserByName } from '../../functions/fetchApi';

export const SearchUser = props => {

    const [name, setName] = useState('');
    const [queryState, setQueryState] = useState('');

    useEffect (() => {
        if( queryState == 'sending'){
            showUserByName(name);
            setQueryState('');
            console.log(queryState);
        }
    }, [queryState]);

    return (
        <div className='searchUser'>
            <div>
                <button onClick={() => props.setAppState('menu')}>BACK</button>
            </div>
            
            <input type='text' className='searchUserInput' placeholder='Type name...' 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {console.log('tets')}
            <button className='SearchButton' onClick={() => setQueryState('sending')}>SEND</button>
        </div>
    )
}
export default SearchUser;