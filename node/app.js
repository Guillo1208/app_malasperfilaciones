import express from "express";
import cors from "cors";
import db from "./database/db.js";
import mpRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/malaperfilacion", mpRoutes);

try {
  await db.authenticate();
  console.log("Conexion exitosa a la BD");
} catch (error) {
  console.log(`el error de la conexion es: ${error} `);
}

app.listen(8000, () => {
  console.log("Server UP running in http://localhost:8000/");
});
