import React, {useEffect, useState} from 'react'
import './CountTransaction.css'
import { numberOfTransactions } from '../../functions/fetchApi';

export const CountTransaction = props => {

    const [queryState, setQueryState] = useState('');
    const [response, setResponse] = useState('');

    useEffect (() => {
        if( queryState == 'sending'){
            numberOfTransactions(setResponse);
            setQueryState('');
            console.log(queryState);
        }
    }, [queryState]);

    return (
        <div className='countTransaction'>
            {   response === '' &&
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
                !isNaN(response) &&
                <div>
                    <button onClick={() => setResponse('')}>BACK</button>
                    <p id='Error'>{response}</p>
                </div>
            }
        </div>
    )
}
export default CountTransaction;