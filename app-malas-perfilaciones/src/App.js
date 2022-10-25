import "./App.css";
//importamos los componentes
import CompMostrar from "./componentes/Mostrar.js";
import CompRechazar from "./componentes/Rechazar";
import CompAprobar from "./componentes/Aprobar";

//importamos el router
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompMostrar />} />
          <Route path="/editaprobar/:id" element={<CompAprobar />} />
          <Route path="/editrechazar/:id" element={<CompRechazar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
