const {Category, User} = require('../models')
const {comparePassword} = require('../helpers/encrypPass')

class Controller {
    
    static home(req, res){
        Category.findAll()
        .then(data => {
            // console.log(data)
            res.render('category', {data, name:req.session.user})
        }).catch(err => {
            res.send(err)
        });
    }

    /***************************handle login and register Admin****************************/

    static showLoginAdmin(req, res){
        
        let err = req.query.errors || []
        res.render('loginAdmin', {err, notif: req.query.notif})
        
    }

    static postLoginAdmin(req, res){
        User.findOne({
            where: {
                userName: req.body.userName,
            },
        })
        .then(user => {
            
            if(user && comparePassword(req.body.password, user.password)){
                req.session.user = user.userName
                res.redirect(`/shoper`)
            } else {
                throw new Error('Invalid username and password')
            }
            
        })
        .catch( error => {
            const input = `Periksa kembali inputan anda`
            res.redirect('/shoper/shoperId?notif=' + input)
            console.log(error.message);
        })
    }

    static logoutAdmin(req, res){
        req.session.destroy(err => {
            if (err) res.send(err)
            res.redirect('/shoper/shoperId')
        })
    }

    static formRegisterAdmin(req, res){
        res.render('registerAdmin')
    }

    static registerAdmin(req, res){
        
        User.create({
            name : req.body.name,
            email : req.body.email,
            phone : +req.body.phone,
            userName : req.body.userName,
            password : req.body.password,
            address : req.body.address,
            role : req.body.role,
        })
        .then((result)=>{
            res.redirect('/shoper/shoperId')
        })
        .catch(err =>{
            
            if (err.name === 'SequelizeValidationError') {
                res.render('ErrorRegisterAdmin', { errors: err.errors })
            } else {
                res.send(err.message)
            }
        })
    }

    /***************************handle login and register User****************************/

    static showLogin(req, res){
        
        let err = req.query.errors || []
        res.render('login', {err, notif: req.query.notif})
        
    }

    static postLogin(req, res){
        User.findOne({
            where: {
                userName: req.body.userName,
            },
        })
        .then(user => {
            
            if(user && comparePassword(req.body.password, user.password)){
                req.session.user = user.userName
                res.redirect(`/shoperRegister`)
            } else {
                throw new Error('Invalid username and password')
            }
            
        })
        .catch( error => {
            const input = `Periksa kembali inputan anda`
            res.redirect('/shoperRegister/shoperId?notif=' + input)
            console.log(error.message);
        })
    }

    static logout(req, res){
        req.session.destroy(err => {
            if (err) res.send(err)
            res.redirect('/shoperRegister/shoperId')
        })
    }

    static formRegister(req, res){
        res.render('register')
    }

    static registerUser(req, res){
        
        User.create({
            name : req.body.name,
            email : req.body.email,
            phone : +req.body.phone,
            userName : req.body.userName,
            password : req.body.password,
            address : req.body.address,
            role : req.body.role,
        })
        .then((result)=>{
            const input = `Terimakasih telah bergabung bersama ShoperId`
            res.redirect('/shoperRegister/shoperId?notif=' + input)
        })
        .catch(err =>{

            if (err.name === 'SequelizeValidationError') {
                res.render('ErrorRegister', { errors: err.errors })
            } else {
                res.send(err.message)
            }
        })
    }
}

module.exports = Controller;