import './App.css';

function App() {
  return (
    <main>
      <h1>400<span>.00</span></h1>
      <form >
        <div className="basic">
          <input type="text" placeholder='Item name'/>
          <input type="datetime-local" />
        </div>
        <div className='description'>
          <input type="text" placeholder='description'/>
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
