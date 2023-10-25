import express from "express";
import FolderController from "../../controllers/FolderController";

const router = express.Router({ mergeParams: true });

router.route("/folders").get(FolderController.findAll);

router
  .route("/:binderId/folders")
  .get(FolderController.findById)
  .post(FolderController.createFolder);
// .put(FolderController.updateOne);

router.route("/folders/:folderId").delete(FolderController.deleteById);

export { router as FolderRoutes };
