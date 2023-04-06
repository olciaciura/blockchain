import React, {useEffect, useState} from 'react'
import './SearchByAddress.css'
import { showTransactionByWalletAddress } from '../../functions/fetchApi';

export const SearchByAddress = props => {

    const [address, setAddress] = useState('');
    const [queryState, setQueryState] = useState('');
    const [response, setResponse] = useState('');

    useEffect (() => {
        if( queryState == 'sending'){
            showTransactionByWalletAddress(address, setResponse);
            setQueryState('');
            setAddress(null);
            console.log(queryState);
        }
    }, [queryState]);

    return (
        <div className='searchByAddress'>
            {   response === '' &&
                <>
                    <div>
                        <button onClick={() => props.setAppState('menu')}>BACK</button>
                    </div>
                    <input type='text' className='searchUserInput' placeholder='Type address...' 
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
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
                response === 'address' &&
                <div>
                    <button onClick={() => setResponse('')}>BACK</button>
                    <p id='Error'>bad length of address</p>
                </div>
            }
            {
                response.constructor == Object &&
                <div>
                    <button onClick={() => setResponse('')}>BACK</button>
                    <p id='Error'>{response['balance']}</p>
                </div>
            }
        </div>
    )
}
export default SearchByAddress;