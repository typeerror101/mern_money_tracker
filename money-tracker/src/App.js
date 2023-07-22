import './App.css';
import {useEffect, useState} from "react";



function App() {

  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState([]);
  const price = name.split(' ')[0];

  useEffect( () => {
    getTransactions().then(transactions => {
      setTransactions(transactions);
    })
  }, []);

  async function getTransactions(){
    const url = process.env.REACT_APP_API_URL+ '/transactions';
    const response = await fetch(url);
    return await response.json();
  }

  function addNewTransaction(ev){
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL+ '/transaction';

    fetch(url, {
      method: 'POST',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify({
        name: name.substring(price.length+1),
        description,
        datetime,
        price,
      })
    }).then(response =>{
      response.json().then(json => {
        setDatetime('');
        setDescription('');
        setName('');

        console.log('result',json);
      });
    });
  }

  let balance = 0;
  for(let transaction of transactions){
    balance = balance + parseInt(transaction.price);
    console.log(balance)
  }

  balance = balance.toFixed(2);
  const fraction = balance.split('.')[1];
  balance = balance.split('.')[0];



  return (
    <main>
      <h1>₹{balance}<span>.{fraction}</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input 
          value={name} 
          onChange={ev => setName(ev.target.value)} 
          type="text" placeholder='+30₹ Item name'
          required
          />
          <input 
          value={datetime}
          onChange={ev => setDatetime(ev.target.value)}
          type="datetime-local" 
          required  
          />
        </div>
        <div className='description'>
          <input 
          value={description}
          onChange={ev => setDescription(ev.target.value)}
          type="text" 
          placeholder='description'
          required
          />
        </div>
        <button type='submit'>Add</button>
        {transactions.length > 0 && transactions.map(transaction => (

          <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">{transaction.name}</div>
            <div className="description">{transaction.description}</div>
          </div>
          <div className="right">
            <div className={"price " + (transaction.price<0 ?'red':'green')}>{transaction.price+ ' ₹'}</div>
            <div className="dateTime">{transaction.datetime}</div>
          </div>
        </div>
      </div>

        ))}
      </form>
      
    </main>
  );
}

export default App;
