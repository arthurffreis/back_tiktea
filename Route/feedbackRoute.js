import { createFeedback } from '../Controllers/feedbackController.js';
import express from 'express';
import requireAuth from '../Middleware/requireAuth.js';

const router = express.Router();

router.post("/", requireAuth, createFeedback);

export default router;