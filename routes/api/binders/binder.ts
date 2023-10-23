import express from "express";
import BinderController from "../../../controllers/BinderController";

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(BinderController.findAll)
  .post(BinderController.createBinder);

router
  .route("/:binderId")
  .get(BinderController.findById)
  .delete(BinderController.deleteById);

export { router as BinderRoutes };
