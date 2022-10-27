//importamos el modelo
import MalaPerfilacionModel from "../models/MalaPerfilacionModel.js";

//crear los metodos

//Mostrar todos los registros
export const getAllMp = async (req, res) => {
  try {
    const malasperfilaciones = await MalaPerfilacionModel.findAll();
    res.json(malasperfilaciones);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Mostrar un registro
export const getMp = async (req, res) => {
  try {
    const malaperfilacion = await MalaPerfilacionModel.findAll({
      where: { id: req.params.id },
    });
    res.json(malaperfilacion[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Actualizar un registro
export const updateMp = async (req, res) => {
  try {
    await MalaPerfilacionModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Registro actualizado exitosamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
