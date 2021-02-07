import { useEffect, useState } from "react";
import Person from "./Person";
import "./App.css";
import ContextAPI from "./ContextAPI";
// import Data from "./data";

function App() {
  // const { products } = Data;

  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <ContextAPI />
      <div className="App">
        {Data.map((product) => (
          <div className="row" key={product.id}>
            <p>{product.name}</p>
            <p>{product.email}</p>
          </div>
        ))}
      </div>
      <br />
      <Counter name={"Roni"} count={"1"} />
      <Person Data={Data} />
    </>
  );
}
function Counter(props) {
  const { name, count } = props;
  return (
    <div>
      Hello:{name} and {count}
    </div>
  );
}

export default App;
