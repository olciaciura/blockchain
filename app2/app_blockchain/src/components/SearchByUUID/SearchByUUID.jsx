import React, {useEffect, useState} from 'react'
import './SearchByUUID.css'
import { findBlockByUUID } from '../../functions/fetchApi';

export const SearchByUUID = props => {

    const [uuid, setUuid] = useState('');
    const [queryState, setQueryState] = useState('');
    const [response, setResponse] = useState('');

    useEffect (() => {
        if( queryState == 'sending'){
            findBlockByUUID(uuid, setResponse);
            setQueryState('');
            setUuid(null);
            console.log(queryState);
        }
    }, [queryState]);

    return (
        <div className='searchByUUID'>
            {   response === '' &&    
                <>
                    <div>
                        <button onClick={() => props.setAppState('menu')}>BACK</button>
                    </div>
                    
                    <input type='text' className='searchByUuidInput' placeholder='Type uuid...' 
                        required
                        value={uuid}
                        onChange={(e) => setUuid(e.target.value)}
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
                response === 'uuid' &&
                <div>
                    <button onClick={() => setResponse('')}>BACK</button>
                    <p id='Error'>bad length of uuid</p>
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
export default SearchByUUID;