const express = require('express')
const router = require('./routers')
const app = express()
const session = require('express-session')
const port = 3000


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.locals.encryppass = require('./helpers/encrypPass')
app.locals.formatRupiah = require('./helpers/formatRupiah')
// app.locals.formattedDate = require('./helpers/formattedDate')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}))

app.use('/', router)

app.listen(port, ()=>{
    console.log(`http:localhost : ${port}`);
});