import React, {useEffect, useState} from 'react'
import './SearchByHash.css'
import { findBlockByHash } from '../../functions/fetchApi';

export const SearchByHash = props => {

    const [hash, setHash] = useState('');
    const [queryState, setQueryState] = useState('');
    const [response, setResponse] = useState('');

    useEffect (() => {
        if( queryState == 'sending'){
            findBlockByHash(hash, setResponse);
            setQueryState('');
            setHash(null);
            console.log(queryState);
        }
    }, [queryState]);

    return (
        <div className='searchByHash'>
            {   response === '' &&
                <>
                    <div>
                        <button onClick={() => props.setAppState('menu')}>BACK</button>
                    </div>
                    
                    <input type='text' className='searchByHashInput' placeholder='Type hash...' 
                        required
                        value={hash}
                        onChange={(e) => setHash(e.target.value)}
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
                response === 'hash' &&
                <div>
                    <button onClick={() => setResponse('')}>BACK</button>
                    <p id='Error'>bad length of hash</p>
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
export default SearchByHash;