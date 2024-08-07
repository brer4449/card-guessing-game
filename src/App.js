import "./App.css";
import images from "./utils/importImages";
import cardBack from "./assets/cards/card-back.png";

function App() {
  const cardNames = ["ac.png", "jh.png", "kc.png", "qd.png"];
  return (
    <div className="App">
      <header className="App-header">
        <p>Hunt the Ace</p>
      </header>
      <main>
        <div class="card-container">
          {cardNames.map((cardName, idx) => (
            <div key={cardName} className={`card-pos-${idx}`}>
              <div class="card">
                <div class="card-inner">
                  <div class="card-front">
                    <img src={images[cardName]} alt={cardName} />
                  </div>
                  <div class="card-back">
                    <img src={cardBack} alt="back of card" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
