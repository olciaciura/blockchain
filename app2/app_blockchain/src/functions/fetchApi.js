import { scryRenderedComponentsWithType } from "react-dom/test-utils";

export const getHostname = () => {
    return 'https://virtserver.swaggerhub.com/JOACHIMSZEWIOR/Blockchain-Simulation-Backend/1.0.0/'
}

export const findBlockByHash = async (hash) => {
    //hash len == 256
    try{
        const API = await fetch(getHostname() + 'findBlockByHash/' + hash, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!API.ok){
            console.error('API error: ' + API.status);
            return;
        }

        const apiAnswer = await API.json();
        console.log(apiAnswer);
        return;
    }
    catch (error) {
        console.error('API Error: ' + error);
        return;
    }    

/*
Poprawna odp: 
{
  "listOfTransactions": [
    {}
  ],
  "timeOfCreation": "2017-01-13T17:09:42.411",
  "blockHeader": {},
  "blockchainVersion": 0
}
Niepoprawna: null
*/

}

export const findBlockByUUID = async (uuid) => {
    //uuid len == 64
    try{
        const API = await fetch(getHostname() + 'findBlockByUUID/' + uuid, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!API.ok){
            console.error('API error: ' + API.status);
            return;
        }

        const apiAnswer = await API.json();
        console.log(apiAnswer);
        return;
    }
    catch (error) {
        console.error('API Error: ' + error);
        return;
    }    
    /*
POprawna odp:    {
  "listOfTransactions": [
    {}
  ],
  "timeOfCreation": "2017-01-13T17:09:42.411",
  "blockHeader": {},
  "blockchainVersion": 0
}
niepoprawny: null
    
    */
}

export const addUser = async (username, balance) => {
    try{
        const API = await fetch(getHostname() + 'addUser' , {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': username,
                'balance': balance
            })
        });

        if(!API.ok){
            console.error('API error: ' + API.status);
            return;
        }

        const apiAnswer = await API.json();
        console.log(apiAnswer);
        return;
    }
    catch (error) {
        console.error('API Error: ' + error);
        return;
    }    


/*
Poprawna odp: true
Niepoprawna: "Name already in use"
*/

}

export const showUserByName = async (name) => {
    //name len > 0
    try{
        const API = await fetch(getHostname() + 'showUserByName/' + name, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!API.ok){
            console.error('API error: ' + API.status);
            return;
        }

        const apiAnswer = await API.json();
        console.log(apiAnswer);
        return;
    }
    catch (error) {
        console.error('API Error: ' + error);
        return;
    }

/*
Poprawna odp: 
{
  "listOfTransactions": [
    {}
  ],
  "timeOfCreation": "2017-01-13T17:09:42.411",
  "blockHeader": {},
  "blockchainVersion": 0
}
Niepoprawna odp: null
*/

}

export const showTransactionByWalletAddress = async (address) => {
    //address len > 0
    try{
        const API = await fetch(getHostname() + 'showTransactionByWalletAdress/' + address, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!API.ok){
            console.error('API error: ' + API.status);
            return;
        }

        const apiAnswer = await API.json();
        console.log(apiAnswer);
        return;
    }
    catch (error) {
        console.error('API Error: ' + error);
        return;
    }    


    /*
    Poprawna odp;
    {
  "adress": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
  "listOfTransactions": [
    {}
  ],
  "balance": 0.0001
}
Niepoprawna : "null"
    */
}

export const addTransaction = async (sender, receiver, balance) => {
    try{
        const API = await fetch(getHostname() + 'user/addTransaction/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'sender': sender,
                'receiver': receiver,
                'balance': balance
            })
        });

        if(!API.ok){
            console.error('API error: ' + API.status);
            return;
        }

        const apiAnswer = await API.json();
        console.log(apiAnswer);
        return;
    }
    catch (error) {
        console.error('API Error: ' + error);
        return;
    }

/*
Poprawna odp: "Added transaction"
Niepoprawna odp: "Could not add transaction to block"
*/

}

export const totalBalance = async () => {
    try{
        const API = await fetch(getHostname() + 'totalBalance', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!API.ok){
            console.error('API error: ' + API.status);
            return;
        }

        const apiAnswer = await API.json();
        console.log(apiAnswer);
        return;
    }
    catch (error) {
        console.error('API Error: ' + error);
        return;
    }


    /*
    Poprawna odp: int
    Niepoprawna: "null"
    */
}

export const lastBlockNumber = async () => {
    try{
        const API = await fetch(getHostname() + 'lastBlockNumber', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!API.ok){
            console.error('API error: ' + API.status);
            return;
        }

        const apiAnswer = await API.json();
        console.log(apiAnswer);
        return;
    }
    catch (error) {
        console.error('API Error: ' + error);
        return;
    }
/*Poprawna odp:
    {
        "listOfTransactions": [
          {}
        ],
        "timeOfCreation": "2017-01-13T17:09:42.411",
        "blockHeader": {},
        "blockchainVersion": 0
      }
Niepoprawna; "null"
*/

}

export const numberOfTransactions = async () => {
    try{
        const API = await fetch(getHostname() + 'numberOfTransactions', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!API.ok){
            console.error('API error: ' + API.status);
            return;
        }

        const apiAnswer = await API.json();
        console.log(apiAnswer);
        return;
    }
    catch (error) {
        console.error('API Error: ' + error);
        return;
    }

    /*
    Poprawna odp: int
    niepoprawna: "null"
    */
}
