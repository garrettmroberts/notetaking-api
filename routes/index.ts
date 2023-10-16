const router = require('express').Router();
import BinderRoutes from './api/binders/binder';

// API Routes
router.use('/api/binders', BinderRoutes)

export default router;