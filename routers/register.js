const shoperRouter = require('express').Router();
const index = require('../controllers/index');


const beforeLogin = (req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.redirect('/shoperRegister/shoperId')
    }
}

const afterLogin = (req, res, next) => {
    if(req.session.user){
        res.redirect('/shoperRegister')
    }else{
        next()
    }
}

shoperRouter.get('/', beforeLogin, index.home)
shoperRouter.get('/shoperId', afterLogin, index.showLogin)
shoperRouter.post('/shoperId', index.postLogin)
shoperRouter.get('/logout', beforeLogin, index.logout)
shoperRouter.get('/register', index.formRegister)
shoperRouter.post('/register', index.registerUser)


module.exports = shoperRouter;