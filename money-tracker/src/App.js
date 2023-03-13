import './App.css';
import {useState} from "react";



function App() {

  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');


  function addNewTransaction(ev){
    ev.preventDefault();
    const url = 'http://localhost:4000/api/transaction';
    
    fetch(url, {
      method: 'POST',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify({name,description,datetime})
    }).then(response =>{
      response.json().then(json => {
        console.log('result',json);
      });
    });
  }

  return (
    <main>
      <h1>400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input 
          value={name} 
          onChange={ev => setName(ev.target.value)} 
          type="text" placeholder='Item name'

          />
          <input 
          value={datetime}
          onChange={ev => setDatetime(ev.target.value)}
          type="datetime-local" 

          />
        </div>
        <div className='description'>
          <input 
          value={description}
          onChange={ev => setDescription(ev.target.value)}
          type="text" 
          placeholder='description'
          />
        </div>
        <button type='submit'>Add</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">iPhone</div>
            <div className="description">Example description</div>
          </div>
          <div className="right">
            <div className="price red">-$900</div>
            <div className="dateTime">2023-12-18 10:45</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">Money found on ground</div>
            <div className="description">Example description</div>
          </div>
          <div className="right">
            <div className="price green">+$15</div>
            <div className="dateTime">2023-12-18 10:45</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="name">Mass gainer</div>
            <div className="description">Example description</div>
          </div>
          <div className="right">
            <div className="price red">-$55</div>
            <div className="dateTime">2023-12-18 10:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
