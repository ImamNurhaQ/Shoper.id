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

    /***************************handle login and register****************************/

    static showLogin(req, res){
        
        let err = req.query.errors || []
        res.render('login', {err})
        
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
                res.redirect('/shoperRegister')
            } else {
                throw new Error('Invalid username and password')
            }
            
        })
        .catch( error => {
            res.redirect('/shoperRegister/shoperId?err=' + error.message )
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
            res.redirect('/shoperRegister/shoperId')
        })
        .catch(err =>{
            // res.redirect('/shoperRegister/register?err=' + err.message )
            if (err.name === 'SequelizeValidationError') {
                res.render('ErrorRegister', { errors: err.errors })
            } else {
                res.send(err.message)
            }
        })
    }
}

module.exports = Controller;