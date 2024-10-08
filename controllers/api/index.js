const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const commentsRoutes = require('./commentsRoutes');

router.use('/users', userRoutes);
router.use('/upload', blogRoutes);
router.use('/sub', commentsRoutes);
module.exports = router;
