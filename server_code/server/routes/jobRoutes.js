import express from "express";
import { createJob, getJobs } from "../controllers/jobController.js";
import { authenticateToken } from "../config/authMiddleware.js";

const router = express.Router();

router.post("/create", authenticateToken, createJob);
router.get("/list", getJobs);

export default router;