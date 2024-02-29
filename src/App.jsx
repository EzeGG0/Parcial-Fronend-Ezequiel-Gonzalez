import { useState } from "react";
import Input from "./Input";
import Card from "./Card";
import './css/app.css';

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const [data, setData] = useState({
    firstName: "",
    favColor: ""
  });


  return (
    <div className="App">
      <h1>Elige un color</h1>

      <form onSubmit={handleSubmit} className="form">
          <Input text="Color" id="firstName" data={data} setData={setData} />
          <Input text="Nombre" id="favColor" data={data} setData={setData} />
          <button type="submit">Submit</button>
      </form>
      {data.firstName !== "" && data.favColor !== "" ? <Card data={ data } classCss="card"/> : null}
    </div>
  );
}

export default App;
