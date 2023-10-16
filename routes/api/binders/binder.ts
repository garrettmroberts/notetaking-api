const router = require('express').Router();
import BinderController from '../../../controllers/BinderController';


router.route('/')
  .get(BinderController.findAll)

export default router;