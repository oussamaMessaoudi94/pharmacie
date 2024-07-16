const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pharma')



const app = express();
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path');
const user = require('./modules/signup');
const product = require('./modules/product');
const cart = require('./modules/cart');
const invoice = require('./modules/invoice');
const carts2 = require('./modules/carts2');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(path.join('src/assets/images')))

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',

}

const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'src/assets/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});



// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});


// add user (signup)
app.post('/users/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10).then((bcrypted) => {
        const userObj = new user({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            tel: req.body.tel,
            password: bcrypted
        })
        userObj.save((err, doc) => {
            if (err) {
                res.status(200).json({
                    message: 'signup not existe'
                })
            } else {
                res.status(200).json({
                    message: 'success'
                })
           }
        })
    })
})


// login (user)
app.post('/users/login', (req, res) => {
    console.log('here into login', req.body);
    user.findOne({ email: req.body.email }).then(
        (emailResult) => {
            console.log('result after find email', emailResult);
            if (!emailResult) {
                res.status(200).json({
                    message: '0',

                })
            }
            return bcrypt.compare(req.body.password, emailResult.password)
        }
    ).then(
        (passwordResult) => {
            if (!passwordResult) {
                res.status(200).json({
                    message: '1'
                })
            }
            user.findOne({ email: req.body.email }).then(
                (findedUser) => {

                    console.log("findedUser", findedUser);
                    res.status(200).json({
                        user: findedUser,
                        message: '2',

                    });
                }
            )
        }
    )

})

// add shop (create)
app.post('/products/', multer({ storage: storage }).fields([{
    name: 'img', maxCount: 10
}]), (req, res) => {
    const productObj = new product({
        proN: req.body.proN,
        price: req.body.price,
        quantity: req.body.quantity,
        mark: req.body.mark,
        description: req.body.description,
        img: req.files.img[0].filename
    })
    productObj.save((err, doc) => {
        if (err) {
            res.status(200).json({
                message: 'not existe'
            })
        } else {
            res.status(200).json({
                message: 'success'
            })
        }
    })
})

// get all products
app.get('/products/', (req, res) => {
    product.find().then(
        (result) => {
            res.status(200).json({
                finded: result
            })
        }
    )
})


// get product by id
app.get('/products/:id', (req, res) => {
    product.findOne({ _id: req.params.id }).then(
        (result) => {
            res.status(200).json({
                findedP: result
            })
        }
    )
})

// edit product
app.put('/products/:id', (req, res) => {
    product.updateOne({ _id: req.params.id }, req.body).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'UPDATE'
                })
            }
        }
    )
})

// delete product
app.delete('/products/:id', (req, res) => {
    product.deleteOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'deleted'
                })
            }
        }
    )
})

// add cart 
app.post('/carts/addCart', (req, res) => {
    const cartObj = new cart({
        img: req.body.img,
        proN: req.body.proN,
        price: req.body.price,
        materiel: req.body.materiel,
        description: req.body.description,
        mark: req.body.mark,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        somme: req.body.somme,
        number: req.body.number,
        id: req.body.id
    })
    cartObj.save((err, result) => {
        if (err) {
            res.status(200).json({
                message: 'erreur'
            })
        } else {
            res.status(200).json({
                message: 'Added'
            })
        }
    })
})

// add cart2 for admin
app.post('/carts2/addCart', (req, res)=>{
    cartsObj = new carts2({
        img: req.body.img,
        proN: req.body.proN,
        price: req.body.price,
        materiel: req.body.materiel,
        description: req.body.description,
        mark: req.body.mark,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        somme: req.body.somme,
        number: req.body.number,
        id: req.body.id
    })
    cartsObj.save((err, res)=>{
        if (err) {
            res.status(200).json({
                message: 'err'
            })
        } else {
            res.status(200).json({
                message: 'ok'
            })
        }
    })
})

//  get all cart
app.get('/carts/', (req, res) => {
    cart.find().then(
        (result) => {
            res.status(200).json({
                doc: result
            })
        }
    )
})

// delete cart
app.delete('/carts/:id', (req, res) => {
    cart.deleteOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'success'
                })
            }
        }
    )
})

// add invoice
app.post('/invoices/addInvoice', (req, res) => {
    const invoiceObj = new invoice({
        country: req.body.country,
        fName: req.body.fName,
        lName: req.body.lName,
        adresse: req.body.adresse,
        state: req.body.state,
        zip: req.body.zip,
        email: req.body.email,
        phone: req.body.phone,
        note: req.body.note,
        carts: req.body.carts
    })
    invoiceObj.save((err, doc)=>{
        if (err) {
            res.status(200).json({
                message: 'erreur'
            })
        } else {
            res.status(200).json({
                message: 'success'
            })
        }
    })
})

app.delete('/carts/', (req, res)=>{
    cart.deleteMany().then(
        (result)=>{
            if (result) {
                res.status(200).json({
                    message: 'OK'
                })
            }
        }
    )
})

// get all invq
app.get('/invoices/', (req, res)=>{
    invoice.find().then(
        (result)=>{
            res.status(200).json({
                inv: result
            })
        }
    )
})

// delete invouces
app.delete('/invoices/:id', (req, res)=>{
    invoice.deleteOne({_id: req.params.id}).then(
        (result)=>{
            if (result) {
                res.status(200).json({
                    message: 'Deleted'
                })
            }
        }
    )
})

// get invoices by id
app.get('/invoices/:id', (req, res)=>{
    invoice.findOne({_id: req.params.id}).then(
        (result)=>{
            res.status(200).json({
                findedInv: result
            })
        }
    )
})










module.exports = app;