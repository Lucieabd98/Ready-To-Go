import { useState } from "react";
import "./App.css";
import rocket from "./assets/rocket.svg";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <header>
        <div>
          <img src={rocket} />
          <h1>Ready To Go</h1>
        </div>
      </header>
      <main className="container">
        <div className="allButtons">
          <div>
            <button
              className={switch1 === true ? "purple" : "white"}
              onClick={() => {
                setSwitch1(!switch1);
              }}
            >
              <p>ON</p>
            </button>
            <button
              className={switch1 === false ? "purple" : "white"}
              onClick={() => {
                setSwitch1(!switch1);
              }}
            >
              <p>OFF</p>
            </button>
          </div>
          <div>
            <button
              className={switch2 === true ? "purple" : "white"}
              onClick={() => {
                setSwitch2(!switch2);
              }}
            >
              <p>ON</p>
            </button>
            <button
              className={switch2 === false ? "purple" : "white"}
              onClick={() => {
                setSwitch2(!switch2);
              }}
            >
              <p>OFF</p>
            </button>
          </div>
          <div>
            <button
              className={switch3 === true ? "purple" : "white"}
              onClick={() => {
                setSwitch3(!switch3);
              }}
            >
              <p>ON</p>
            </button>
            <button
              className={switch3 === false ? "purple" : "white"}
              onClick={() => {
                setSwitch3(!switch3);
              }}
            >
              <p>OFF</p>
            </button>
          </div>
        </div>
        <div className="mainButton">
          <button
            className={
              switch1 === true && switch2 === true && switch3 === true
                ? "green"
                : "red"
            }
          >
            <p>
              {(switch1 === true) & (switch2 === true) & (switch3 === true)
                ? "GO"
                : "NO WAY !"}
            </p>
          </button>
        </div>
        <div className="resetButton">
          <button
            onClick={() => {
              setSwitch1(false);
              setSwitch2(false);
              setSwitch3(false);
            }}
          >
            <p>RESET</p>
          </button>
        </div>
      </main>
      <footer>
        <p>
          Made with <span>React</span> at <span>Le Reacteur</span> by
          <span> Lucie Abadia</span>
        </p>
      </footer>
    </>
  );
}

export default App;
