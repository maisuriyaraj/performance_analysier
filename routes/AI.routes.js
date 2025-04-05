import express from 'express';
import { generateAIReport } from '../controllers/AIAnalysier.controller.js';
const router = express.Router();

router.post('/generate-report', generateAIReport)

export default router;