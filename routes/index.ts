import express from "express";
import { BinderRoutes } from "./api/binders/binder";

const router = express.Router();

// API Routes
router.use("/api/binders", BinderRoutes);

export default router;
