import express from "express";
import BinderController from "../../controllers/BinderController";

const router = express.Router({ mergeParams: true });

router
  .route("/binders")
  .get(BinderController.findAll)
  .post(BinderController.createBinder);

router
  .route("/binders/:binderId")
  .get(BinderController.findById)
  .delete(BinderController.deleteById)
  .put(BinderController.updateById);

export { router as BinderRoutes };
