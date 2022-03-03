const shoperRouter = require('express').Router();
const Controller = require('../controllers/controller');


shoperRouter.get('/', Controller.listproduct);
shoperRouter.get('/add', Controller.productForm);
shoperRouter.post('/add', Controller.addProduct);
shoperRouter.get('/:CategoryId', Controller.showProduct);
shoperRouter.get('/delete/:id', Controller.delete);
shoperRouter.get('/:id/:CategoryId', Controller.pageDetail);


module.exports = shoperRouter;