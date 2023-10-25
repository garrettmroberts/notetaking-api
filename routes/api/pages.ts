import express from "express";
import PageController from "../../controllers/PageController";

const router = express.Router({ mergeParams: true });

router.route("/pages").get(PageController.findAll);

export { router as PageRoutes };
