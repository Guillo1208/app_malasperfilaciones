import express from "express";
import {
  getAllMp,
  updateMp,
} from "../controllers/MalaPerfilacionController.js";
const router = express.Router();

router.get("/", getAllMp);
router.put("/:id", updateMp);

export default router;
