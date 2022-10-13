//importamos la conexion a la BD
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const MalaPerfilacionModel = db.define("mala_perfilacions", {
  cc_cliente: { type: DataTypes.NUMBER },
  cc_asesor: { type: DataTypes.NUMBER },
  fecha_mp: { type: DataTypes.DATE },
  estado: { type: DataTypes.STRING },
  hallazgo: { type: DataTypes.STRING },
});

export default MalaPerfilacionModel;
