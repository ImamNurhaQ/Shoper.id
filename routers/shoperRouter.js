const shoperRouter = require('express').Router();
const Controller = require('../controllers/controller');
const index = require('../controllers/index');

const beforeLogin = (req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.redirect('/shoper/shoperId')
    }
}

const afterLogin = (req, res, next) => {
    if(req.session.user){
        res.redirect('/')
    }else{
        next()
    }
}

shoperRouter.get('/', Controller.listproduct);
shoperRouter.get('/shoperId', afterLogin, index.showLoginAdmin)
shoperRouter.post('/shoperId', index.postLoginAdmin)
shoperRouter.get('/logout', beforeLogin, index.logoutAdmin)
shoperRouter.get('/register', index.formRegisterAdmin)
shoperRouter.post('/register', index.registerAdmin)
shoperRouter.get('/add', Controller.productForm);
shoperRouter.post('/add', Controller.addProduct);
shoperRouter.get('/:ProductId/edit', Controller.editForm);
shoperRouter.post('/:ProductId/edit', Controller.editProduct);
shoperRouter.get('/:CategoryId', Controller.showProduct);
shoperRouter.get('/delete/:id', Controller.delete);
shoperRouter.get('/:ProductId/detail', Controller.pageDetail);
shoperRouter.get('/:ProductId/detail/transaction', Controller.transaction)
shoperRouter.get('/:ProductId/detail/transaction/deal', Controller.transactionSuccsess)


module.exports = shoperRouter;