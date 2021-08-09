const { response } = require('express');

const usuariosGet = (req, res = response) => {
    const params = req.query;
    res.status(200).json({
        msg: 'get api controlador',
        params
    });
}

const usuariosPost = (req, res) => {
    const {nombre, edad} = req.body;

    res.json({
        msg: 'post api controlador',
        nombre,
        edad
    });
}

const usuariosDelete =(req, res) => {
    res.json({
        msg: 'delete api controlador'
    });
}

const usuariosPut =(req, res) => {

    const id = req.params.id;

    res.json({
        msg: 'put api controlador',
        id
    });
}


module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}