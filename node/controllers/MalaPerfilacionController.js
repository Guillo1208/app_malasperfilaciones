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

//Actualizar un registro
export const updateMp = async (req, res) => {
  try {
    await MalaPerfilacionModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Resgistro actualizado exitosamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
