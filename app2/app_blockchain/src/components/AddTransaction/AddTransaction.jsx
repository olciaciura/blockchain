import React, {useEffect, useState} from 'react'
import './AddTransaction.css'
import { addTransaction } from '../../functions/fetchApi';

export const AddTransaction = props => {

    const [sender, setSender] = useState('');
    const [receiver, setReceiver] = useState('');
    const [balance, setBalance] = useState('');
    const [queryState, setQueryState] = useState('');
    const [response, setResponse] = useState('');

    useEffect (() => {
        if( queryState == 'sending'){
            addTransaction(sender, receiver, balance, setResponse);
            setSender(null);
            setReceiver(null);
            setBalance(null);
            setQueryState('');
            console.log(queryState);
        }
    }, [queryState]);

    return (
        <div className='addTransaction'>
            {response === '' &&
                <>
                    <div>
                        <button onClick={() => props.setAppState('menu')}>BACK</button>
                    </div>          
                    <input type='text' className='addTransactionInput' placeholder='Type sender...' 
                        required
                        value={sender}
                        onChange={(e) => setSender(e.target.value)}
                    />
                    <input type='text' className='addTransactionInput' placeholder='Type receiver...' 
                        required
                        value={receiver}
                        onChange={(e) => setReceiver(e.target.value)}
                    />
                    <input type='text' className='addTransactionInput' placeholder='Type balance...' 
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
                response === 'Could not add transaction to block' &&
                <div>
                    <button onClick={() => setResponse('')}>BACK</button>
                    <p id='Error'>{response}</p>
                </div>
            }
            {
                response === 'Added transaction' &&
                <div>
                    <button onClick={() => setResponse('')}>BACK</button>
                    <p id='Error'>{response}</p>
                </div>
            }
        </div>
    )
}
export default AddTransaction;