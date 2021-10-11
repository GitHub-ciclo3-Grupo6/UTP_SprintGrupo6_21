//Instancias para configurar rutras en express
const router = require('express').Router();

//Modelo de user en models
const User = require("../models/User");

//Json web token
const jwt = require("jsonwebtoken");

//Validaciones de información
const Joi = require("@hapi/joi");
const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),

})

//Validaciones login
const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),

})

//Encriptar contraseña
const bcrypt = require("bcrypt");

//Login
router.post('/login', async (req, res) => {

    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ error: true, message: "Credenciales Invalidas" });

    const passValida = await bcrypt.compare(req.body.password, user.password)
    if (!passValida) return res.status(400).json({ error: true, message: "Credenciales Invalidas" });

    const token = jwt.sign({
        name: user.name,
        id: user._id,

    }, process.env.TOKEN_SECRET)

    res.header('auth-token', token).json({
        error: null,
        data: { token }
    })
})

//Ruta de registres para validar datos y email unico
router.post('/register', async (req, res) => {

    //Validar los campos que recibos desde el front
    const { error } = schemaRegister.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    //Buscar si el correo ya existe
    const existeElEmail = await User.findOne({ email: req.body.email });
    if (existeElEmail) return res.status(400).json({ error: true, message: "Email ya registrado" });


    //Hash contraseña 
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    //Crear el modelo de usuario 
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: password
    });

    try {
        //Guardar el modelo de usuario  
        const userDB = await user.save();
        //Responder con el usuario creado
        res.json({
            error: null,
            data: userDB
        })
    } catch (error) {
        //Responder con error
        res.status(400).json(error);
    }
})


//Siempre, importante tener export para utilizarlo en otro archivo
//Se esta utilizando en index.js  
module.exports = router;