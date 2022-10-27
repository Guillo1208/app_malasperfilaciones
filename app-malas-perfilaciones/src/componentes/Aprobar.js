import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8000/malaperfilacion/";

const CompAprobar = () => {
  const estado = "Aprobada";
  const [hallazgo, setHallazgo] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      estado: estado,
      hallazgo: hallazgo,
    });
    navigate("/");
  };

  const cancelar = (e) => {
    e.preventDefault();
    navigate("/");
  };

  useEffect(() => {
    const getmalaperfilacionID = async () => {
      const res = await axios.get(URI + id);
      setHallazgo(res.data.hallazgo);
    };
    getmalaperfilacionID();
  }, [id]);

  return (
    <>
      <header className="App-header">
        <h3>GESTIONAR MALAS PERFILACIONES</h3>
      </header>
      <div className="container">
        <form onSubmit={update}>
          <div className="mb-3">
            <label className="form-label">
              <h2>Estado</h2>
            </label>
            <div className="estado">
              <h3>{estado}</h3>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">
              <h2>Hallazgos</h2>
            </label>
            <textarea
              value={hallazgo}
              onChange={(e) => setHallazgo(e.target.value)}
              type="text"
              className="form-control"
            />
          </div>
          {hallazgo && (
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          )}
          <button onClick={cancelar} className="btn btn-danger">
            Cancelar
          </button>
        </form>
      </div>
    </>
  );
};

export default CompAprobar;
