const router = require('express').Router();
const shoperRouter = require('./shoperRouter')


router.get('/', (req, res) => res.render('home.ejs'))
router.use('/shoper', shoperRouter)

module.exports = router