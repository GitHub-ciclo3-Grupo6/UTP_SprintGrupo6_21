import mongoose from "mongoose";
const Schema = mongoose.Schema;


const UsuarioSchema = new Schema({

    usuarioId: String,
    nombre: { type: String, required: [true, 'Nombre obligatorio'] },
    correo: { type: String, required: [true, 'Correo obligatorio'] },
    clave: { type: String, required: [true, 'Clave obligatorio'] },
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }

});

//convertir a modelo
const Usuario = mongoose.model('Usuario', UsuarioSchema);
export default Usuario;