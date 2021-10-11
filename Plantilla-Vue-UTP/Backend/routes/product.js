//Instancias para configurar rutras en express
const router = require('express').Router();

//Modelo de user en models
const Product = require("../models/Product");

//Json web token
const jwt = require("jsonwebtoken");

//Validaciones de información
const Joi = require("@hapi/joi");
const schemaRegister = Joi.object({
    code: Joi.string().min(1).max(255).required(),
    name: Joi.string().min(1).max(255).required(),
    amount: Joi.number().min(1).required(),
    purchasePrice: Joi.number().min(1).required(),
    salePrice: Joi.number().min(1).required(),
})



//Ruta de registres para validar datos y email unico
router.post('/register', async (req, res) => {

    //Validar los campos que recibos desde el front
    const { error } = schemaRegister.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    //Buscar si el correo ya existe
    const existeProducto = await Product.findOne({ code: req.body.code });
    if (existeProducto) return res.status(400).json({ error: true, message: "Producto ya existe" });

    //Crear el modelo de usuario 
    const product = new Product({
        code: req.body.code,
        name: req.body.name,
        amount: req.body.amount,
        purchasePrice: req.body.purchasePrice,
        salePrice: req.body.salePrice
    });

    try {
        //Guardar el modelo de usuario  
        const productDB = await product.save();
        //Responder con el usuario creado
        res.json({
            error: null,
            data: productDB
        })
    } catch (error) {
        //Responder con error
        res.status(400).json(error);
    }
})

//Get con todos los productos

router.get('/all',async(req,res)=>{

    try {

        const pdoductDb=await Product.find();
        res.json(pdoductDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })   
    }
});

//Delete eliminar una nota

router.delete('/:id', async(req,res)=>{


    const _id=req.params.id;

    try {

        const pdoductDb=await Product.findByIdAndDelete({_id});
        if(!pdoductDb){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', error 
            }) 
        } 
        res.json(pdoductDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
    }
});

//Actualizar una Product

router.put('/:id', async(req,res)=>{

    const _id=req.params.id;
    const body =req.body;

    try {

        const pdoductDb= await Product.findByIdAndUpdate(_id,body,{new:true});
        res.json(pdoductDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }
})

//Siempre, importante tener export para utilizarlo en otro archivo
//Se esta utilizando en index.js  
module.exports = router;