const Role = require('../models/role');
const Usuario = require('../models/usuario');


const validateRol = async (rol = '') => {
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`El rol: ${rol} no esta registrado en BD`);
    }
}


const validateCorreo = async (correo = '') => {
    const existeCorreo = await Usuario.findOne({correo});
    if(existeCorreo){
        throw new Error(`El correo: ${correo} existe`);
    }
}

const validateUsuarioId = async (id) => {
    const existeId = await Usuario.findById(id);
    if(!existeId){
        throw new Error(`El id: ${id} no existe`);
    }
}


module.exports = {
    validateRol,
    validateCorreo,
    validateUsuarioId
}