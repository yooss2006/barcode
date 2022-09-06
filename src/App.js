import { useState } from "react";
import Scanner from "./scanner/Scanner";

function App() {
  const [carmera, setCarmera] = useState(false);
  const [result, setResult] = useState(null);

  const onClickToggleCarmera = () => {
    setCarmera((prev) => !prev);
  };

  const onDetected = (result) => {
    setResult(result);
  };
  return (
    <div className="App">
      <p>
        결과: <span>{result}</span>
      </p>
      <button onClick={onClickToggleCarmera}>
        {carmera ? "종료" : "시작"}
      </button>
      <div className="container">
        {carmera && <Scanner onDetected={onDetected} />}
      </div>
    </div>
  );
}

export default App;
