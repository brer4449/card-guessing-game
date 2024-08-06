import './App.css';
import ace from './ac.png';
import cardBack from './card-back.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hunt the Ace
        </p>
      </header>
      <div class="card-container">
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <img src={ace} alt="ace of clubs"/>
            </div>
            <div class="card-back">
              <img src={cardBack} alt="back of card"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
