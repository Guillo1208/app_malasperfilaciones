import logo from "./logo.svg";
import "./App.css";
import CompMostrar from "./componentes/Mostrar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de malas perfilaciones</h1>
      </header>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<CompMostrar/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
