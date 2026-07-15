import { useState } from "react";
import "./App.css";

function TopBread() {
  return <div className="topBread"></div>;
}

function Tomato() {
  return <div className="tomato"></div>;
}

function Meat() {
  return <div className="meat"></div>;
}

function Lettuce() {
  return <div className="lettuce"></div>;
}

function BaseBread() {
  return <div className="baseBread"></div>;
}

function App() {
  const [tomato, setTomato] = useState(true);
  const [meat, setMeat] = useState(true);
  const [lettuce, setLettuce] = useState(true);

  return (
    <div className="container">
      <div className="controls">
        <h2>Burger Ingredients</h2>

        <div className="control">
          <h3>Tomato</h3>
          <button onClick={() => setTomato(true)}>Add</button>
          <button onClick={() => setTomato(false)}>Remove</button>
          <p>{tomato ? "✔ Selected" : "✖ Removed"}</p>
        </div>

        <div className="control">
          <h3>Meat</h3>
          <button onClick={() => setMeat(true)}>Add</button>
          <button onClick={() => setMeat(false)}>Remove</button>
          <p>{meat ? "✔ Selected" : "✖ Removed"}</p>
        </div>

        <div className="control">
          <h3>Lettuce</h3>
          <button onClick={() => setLettuce(true)}>Add</button>
          <button onClick={() => setLettuce(false)}>Remove</button>
          <p>{lettuce ? "✔ Selected" : "✖ Removed"}</p>
        </div>
      </div>

      <div className="burger">
        <TopBread />
        {tomato && <Tomato />}
        {meat && <Meat />}
        {lettuce && <Lettuce />}
        <BaseBread />
      </div>
    </div>
  );
}

export default App;
