import React, {useEffect, useState} from 'react'
import './ShowLast.css'
import { lastBlockNumber } from '../../functions/fetchApi';

export const ShowLast = props => {

    const [queryState, setQueryState] = useState('');
    const [response, setResponse] = useState('');

    useEffect (() => {
        if( queryState == 'sending'){
            lastBlockNumber(setResponse);
            setQueryState('');
            console.log(queryState);
        }
    }, [queryState]);

    return (
        <div className='showLast'>
            {    response === '' &&  
                <>
                     <div>
                        <button onClick={() => props.setAppState('menu')}>BACK</button>
                    </div>
                    <button onClick={() => setQueryState('sending')}>SEND</button>
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
                response.constructor == Object &&
                <div>
                    <button onClick={() => setResponse('')}>BACK</button>
                    <p id='Error'>{response['timeOfCreation']}</p>
                </div>
            }
        </div>
    )
}
export default ShowLast;