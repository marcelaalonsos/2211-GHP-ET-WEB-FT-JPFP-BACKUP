
const router = require('express').Router();
const campusRouter = require('./campusRoutes');
const studentRouter = require('./studentRoutes');


router.use('/students', studentRouter);
router.use('/campuses', campusRouter);

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
