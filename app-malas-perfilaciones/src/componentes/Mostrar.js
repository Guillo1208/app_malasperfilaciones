import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/malaperfilacion/";

const CompMostrar = () => {
  const [malas_perfilaciones, setMalas_Perfilaciones] = useState([]);

  useEffect(() => {
    getMala_Perfilacion();
  }, []);

  //Porcedimiento para mostrar las malas perfilaciones en la tabla
  const getMala_Perfilacion = async () => {
    const respuesta = await axios.get(URI);
    setMalas_Perfilaciones(respuesta.data);
  };

  return (
    <>
      <header className="App-header">
        <h3>Gestionar mala perfilacion</h3>
      </header>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table">
              <thead className="table-primary">
                <tr>
                  <th>Gestion</th>
                  <th>CC_Cliente</th>
                  <th>CC_Asesor</th>
                  <th>Fecha</th>
                  <th>Estado</th>
                  <th>Hallazgo</th>
                  <th>Gestionar</th>
                </tr>
              </thead>
              <tbody>
                {malas_perfilaciones.map((mala_perfilacion) => (
                  <tr key={mala_perfilacion.id}>
                    <td>
                      {mala_perfilacion.estado && (
                        <i className="fa-sharp fa-solid fa-circle-check"></i>
                      )}
                    </td>
                    <td>{mala_perfilacion.cc_cliente}</td>
                    <td>{mala_perfilacion.cc_asesor}</td>
                    <td>{mala_perfilacion.fecha_mp}</td>
                    <td>{mala_perfilacion.estado}</td>
                    <td>{mala_perfilacion.hallazgo}</td>
                    <td>
                      <Link
                        to={
                          mala_perfilacion.cc_cliente !== 0 &&
                          mala_perfilacion.cc_asesor !== 0 &&
                          mala_perfilacion.fecha_mp !== "0000-00-00"
                            ? `/editrechazar/${mala_perfilacion.id}`
                            : null
                        }
                        className="btn btn-danger"
                      >
                        Rechazar
                      </Link>
                      <Link
                        to={`/editaprobar/${mala_perfilacion.id}`}
                        className="btn btn-primary"
                      >
                        Aprobar
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompMostrar;
