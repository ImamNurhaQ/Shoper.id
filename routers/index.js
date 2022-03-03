const router = require('express').Router();
const shoperRouter = require('./shoperRouter')
const shoperRegisterRouter = require('./register')

router.get('/', (req, res) => res.render('home.ejs'))
router.use('/shoper', shoperRouter)
router.use('/shoperRegister', shoperRegisterRouter)

module.exports = router;