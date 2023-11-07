import express from "express";
import { userController } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  userController(req, res);
});

export default router;
