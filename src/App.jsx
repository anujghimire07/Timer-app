import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, settime] = useState(0);
  const [value, setvalue] = useState(false);

  useEffect(() => {
    let id;
    if (value) {
      id = setInterval(() => {
        settime((t) => t + 1);
      }, 1000);
    }

    return () => {
      clearInterval(id);
    };
  }, [value]);

  return (
    <>
      <div className="time">{time}s</div>

      <div className="btncontainer">
        <div className="start">
          <button
            className="btn"
            onClick={() => {
              setvalue(true);
            }}
          >
            start
          </button>
        </div>
        <div className="pause">
          <button
            className="btn"
            onClick={() => {
              setvalue(false);
            }}
          >
            pause
          </button>
        </div>
        <div className="reset">
          <button
            className="btn"
            onClick={() => {
              settime(0);
              setvalue(false);
            }}
          >
            reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
