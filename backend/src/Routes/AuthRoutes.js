import express from "express";
import {
  signupValidation,
  loginValidation,
} from "../Middlewares/AuthValidation.js";
import { userSignup, userLogin } from "../Controllers/AuthController.js";

const router = express.Router();

router.post("/signup", signupValidation, userSignup);
router.post("/login", loginValidation, userLogin);

export default router;
