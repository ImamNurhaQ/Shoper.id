const { Category, Product } = require('../models');
const { Op } = require('sequelize');

class Controller {

    static listproduct(req, res) {

        let productName = req.query.name;

        let option = {
            include: [Category],
            order: [
                ['createdAt', 'DESC']
            ],
            where: {}
        }

        if (productName) option.where.name = {
            [Op.iLike]: `%${productName}%`
        }
        Product.findAll(option)
            .then(results => {
                res.render('listProduct', { results, notif: req.query.notif, name:req.session.user })
            }).catch(err => {
                res.send(err)
            });
    }

    static productForm(req, res) {
        Category.findAll()
            .then(result => {
                res.render('productForm', { result })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addProduct(req, res) {

        Product.create({
            name: req.body.name,
            description: req.body.description,
            img: req.body.img,
            stock: req.body.stock,
            price: req.body.price,
            CategoryId: +req.body.CategoryId
        })
            .then(result => {
                res.redirect(`/shoper`)
            })
            .catch(err => {
                if (err.name === 'SequelizeValidationError') {
                    res.render('Error', { errors: err.errors })
                } else {
                    res.send(err.message)
                }
            })
    }

    static editForm(req, res) {

        Product.findByPk(+req.params.ProductId)
            .then(result => {
                res.render('editForm', { result })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editProduct(req, res) {

        Product.update({
            name: req.body.name,
            description: req.body.description,
            img: req.body.img,
            stock: req.body.stock,
            price: req.body.price,
        }, {
            where: {
                id: +req.params.ProductId
            },
        })
            .then(result => {
                res.redirect(`/shoper`)
            })
            .catch(err => {
                res.send(err)
            })
    }


    static delete(req, res) {
        Product.destroy({
            where: {
                id: Number(req.params.id)
            }
        })
            .then(result => {
                let input = `Removed Product Success 🗑`
                res.redirect(`/shoper/?notif=` + input)
            })
            .catch(err => {
                res.send(err.message)
            })
    }


    static showProduct(req, res) {

        Product.findAll({
            where: {
                CategoryId: Number(req.params.CategoryId),
                stock: {
                    [Op.gt]: 0
                }
            },
            order: [
                ['name', 'ASC']
            ]
        })
            .then(results => {
                res.render('product', { results })
            })
            .catch(err => {
                res.send('Ada yg tidak beres..\n' + err.message)
            });
    }

    static pageDetail(req, res) {

        Product.findByPk(+req.params.ProductId,{
            include:[Category]
        })
            .then((result) => {
                res.render('pageDetail', { result })
            })
            .catch((err) => res.send(err.message));
    }

    static transaction(req, res){
        
        Product.findByPk(+req.params.ProductId,{
            include: [Category]
        })
        .then((result) =>{
            res.render('transaction', { result, notif: req.query.notif })
        })
        .catch((err) => res.send(err.message));
    }

    static transactionSuccsess(req, res){
        let obj = {
            id: req.params.ProductId,
            stock: req.query.stock
        }
        Product.dealTransaction(obj)
        .then(() => {
            let input = `Terimakasih telah berbelanja di ShoperId 🛒`
            res.redirect(`/shoper/${req.params.ProductId}/detail/transaction?notif=` + input)
        })
        .catch((err) => res.send(err.message));
    }

}

module.exports = Controller;