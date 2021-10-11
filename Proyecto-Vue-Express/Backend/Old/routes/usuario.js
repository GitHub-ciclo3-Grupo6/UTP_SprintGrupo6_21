import express from 'express'
const router = express.Router();

//importar el modelo Usuario

import Usuario from '../models/usuario';

// Agregar una Usuario

router.post('/nuevo-usuario', async (req, res) => {

    const body = req.body;
    try {

        const UsuarioDB = await Usuario.create(body);
        res.status(200).json(UsuarioDB);

    } catch (error) {

        return res.status(500).json({

            mensaje: 'Ocurrio un error',
            error
        })

    }


});

//Get con parametro

router.get('/usuario/:id', async (req, res) => {

    const _id = req.params.id;

    try {

        const UsuarioDb = await Usuario.findOne({ _id });
        res.json(UsuarioDb);

    } catch (error) {

        return res.status(500).json({

            mensaje: 'Ocurrio un error',
            error
        })

    }



});

//Get con todos los documentos

router.get('/usuario', async (req, res) => {

    try {

        const UsuarioDb = await Usuario.find();
        res.json(UsuarioDb);

    } catch (error) {

        return res.status(500).json({

            mensaje: 'Ocurrio un error',
            error
        })

    }


});

//Delete eliminar una Usuario

router.delete('/usuario/:id', async (req, res) => {


    const _id = req.params.id;

    try {

        const UsuarioDb = await Usuario.findByIdAndDelete({ _id });
        if (!UsuarioDb) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado', error
            })
        }
        res.json(UsuarioDb);

    } catch (error) {

        return res.status(500).json({

            mensaje: 'Ocurrio un error',
            error
        })

    }
});

//Actualizar una Usuario

router.put('/usuario/:id', async (req, res) => {

    const _id = req.params.id;
    const body = req.body;

    try {

        const UsuarioDb = await Usuario.findByIdAndUpdate(_id, body, { new: true });
        res.json(UsuarioDb);

    } catch (error) {

        return res.status(500).json({

            mensaje: 'Ocurrio un error',
            error
        })

    }



})

//Exportacion de router
module.exports = router;