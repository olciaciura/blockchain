import React, {useEffect, useState} from 'react'
import './ShowBalance.css'
import { totalBalance } from '../../functions/fetchApi';

export const ShowBalance = props => {

    const [queryState, setQueryState] = useState('');
    const [response, setResponse] = useState('');

    useEffect (() => {
        if( queryState == 'sending'){
            totalBalance(setResponse);
            setQueryState('');
            console.log(queryState);
        }
    }, [queryState]);

    return (
        <div className='showBalance'>
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
export default ShowBalance;