import { useEffect, useState } from "react";
import Scanner from "./scanner/Scanner";

function App() {
  const [carmera, setCarmera] = useState(false);
  const [resultList, setResultList] = useState([]);
  const [result, setResult] = useState(null);

  const onClickToggleCarmera = () => {
    setCarmera((prev) => !prev);
    setResult(null);
  };

  const onDetected = (data) => {
    setResult(data);
  };

  useEffect(() => {
    const isInResultList = resultList.findIndex((item) => item === result) > -1;
    if (isInResultList) return;
    if (result !== null) {
      setResultList([...resultList, result]);
    }
  }, [result, resultList]);

  return (
    <div className="App">
      <p>결과 목록:</p>
      <div>
        {resultList.map((item) => {
          return (
            <label key={item}>
              <input type="radio" name="barcode" /> {item}
            </label>
          );
        })}
      </div>
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
