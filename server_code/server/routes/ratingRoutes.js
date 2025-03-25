import express from "express";
import { submitRating, getRatings } from "../controllers/ratingController.js";
import { authenticateToken } from "../config/authMiddleware.js";

const router = express.Router();

router.post("/submit", authenticateToken, submitRating);
router.get("/company/:company_id", getRatings);

export default router;