import { Router } from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser)
router.get("/me", authMiddleware, (req, res) => {
  return res.json(req.user);
})

export default router;
