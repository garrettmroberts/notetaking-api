import express from "express";
import BinderController from "../../../controllers/BinderController";

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(BinderController.findAll)
  .post(BinderController.createBinder);

export { router as BinderRoutes };
