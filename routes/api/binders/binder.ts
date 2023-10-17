import { Router } from "express";
import BinderController from "../../../controllers/BinderController";

const router = Router();

router
  .route("/")
  .get(BinderController.findAll)
  .post(BinderController.createBinder);

export default router;
