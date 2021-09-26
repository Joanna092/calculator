import "./App.css";

function App() {
  return (
    <div className="container border-black border-2">
      <div className="row border-black border-2">
        <span className="text-center">DISPLAY</span>
      </div>

      <div className="row">
        <div className="col border-black border-2">1</div>
        <div className="col border-black border-2">2</div>
        <div className="col border-black border-2">3</div>
        <div className="col border-black border-2">+</div>
      </div>

      <div className="row">
        <div className="col border-black border-2">4</div>
        <div className="col border-black border-2">5</div>
        <div className="col border-black border-2">6</div>
        <div className="col border-black border-2">-</div>
      </div>

      <div className="row">
        <div className="col border-black border-2">7</div>
        <div className="col border-black border-2">8</div>
        <div className="col border-black border-2">9</div>
        <div className="col border-black border-2">x</div>
      </div>

      <div className="row">
        <div className="col border-black border-2">AC</div>
        <div className="col border-black border-2">0</div>
        <div className="col border-black border-2">=</div>
        <div className="col border-black border-2">/</div>
      </div>
    </div>
  );
}

export default App;
