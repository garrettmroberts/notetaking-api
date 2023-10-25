import express from "express";
import { BinderRoutes } from "./api/binders";
import { FolderRoutes } from "./api/folders";
import { PageRoutes } from "./api/pages";

const router = express.Router();

// API Routes
router.use(BinderRoutes);
router.use(FolderRoutes);
router.use(PageRoutes);

export default router;
