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
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table">
            <thead className="table-primary">
              <tr>
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
                  <td>{mala_perfilacion.cc_cliente}</td>
                  <td>{mala_perfilacion.cc_asesor}</td>
                  <td>{mala_perfilacion.fecha_mp}</td>
                  <td>{mala_perfilacion.estado}</td>
                  <td>{mala_perfilacion.hallazgo}</td>
                  <td>
                    <Link
                      to={`/edit/${mala_perfilacion.id}`}
                      className="btn btn-primary"
                    >
                      Aprobar
                    </Link>
                    <Link
                      to={`/edit/${mala_perfilacion.id}`}
                      className="btn btn-danger"
                    >
                      Rechazar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompMostrar;
