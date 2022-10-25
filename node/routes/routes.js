import express from "express";
import {
  getAllMp,
  getMp,
  updateMp,
} from "../controllers/MalaPerfilacionController.js";
const router = express.Router();

router.get("/", getAllMp);
router.get("/:id", getMp);
router.put("/:id", updateMp);

export default router;
