import express from 'express';
import { loginUser, registerUser,getUser, verifyPassword  } from '../Controllers/userController.js';
import requireAuth from '../Middleware/requireAuth.js';


const router = express.Router();

router.post("/login",loginUser);
router.post("/register",registerUser);
router.get("/getuser/:id", requireAuth, getUser)
router.post("/verify-password", requireAuth, verifyPassword);

export default router;