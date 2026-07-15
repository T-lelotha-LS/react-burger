import { useState } from "react";
import "./App.css";

// Burger Components
const TopBread = () => <div className="topBread"></div>;
const Tomato = () => <div className="tomato"></div>;
const Meat = () => <div className="meat"></div>;
const Lettuce = () => <div className="lettuce"></div>;
const BaseBread = () => <div className="baseBread"></div>;

function App() {
  const [tomato, setTomato] = useState(true);
  const [meat, setMeat] = useState(true);
  const [lettuce, setLettuce] = useState(true);

  const ingredients = [
    {
      name: "Tomato",
      enabled: tomato,
      setEnabled: setTomato,
    },
    {
      name: "Meat",
      enabled: meat,
      setEnabled: setMeat,
    },
    {
      name: "Lettuce",
      enabled: lettuce,
      setEnabled: setLettuce,
    },
  ];

  return (
    <div className="container">
      {/* ===== Header ===== */}
      <header className="header">
        <h1>ACA REACT BURGER</h1>
        <h3>By T. Lelotha</h3>

        <p className="intro">
          Welcome to ACA React Burger. This application demonstrates the use of
          React state by allowing users to customise a burger through adding or
          removing ingredients. Any changes made are displayed immediately on
          the burger.
        </p>
      </header>

      {/* ===== Burger ===== */}
      <div className="burger">
        <TopBread />
        {tomato && <Tomato />}
        {meat && <Meat />}
        {lettuce && <Lettuce />}
        <BaseBread />
      </div>

      {/* ===== Controls ===== */}
      <div className="controls">
        {ingredients.map((item) => (
          <div className="control" key={item.name}>
            <h2>{item.name}</h2>

            <button onClick={() => item.setEnabled(true)}>
              Add {item.name}
            </button>

            <button onClick={() => item.setEnabled(false)}>Remove</button>

            <p className={item.enabled ? "active" : "inactive"}>
              {item.enabled
                ? `${item.name} has been added.`
                : `${item.name} has been removed.`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
