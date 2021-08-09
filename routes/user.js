const { Router } = require('express');
const { check } = require('express-validator');

const { usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPut } = require('../controllers/usuarios');
const {
    validateRol,
    validateCorreo,
    validateUsuarioId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

router.get('/', usuariosGet);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener mas de 4 letras').isLength({ min: 4 }),
    check('correo', 'El correo no es valido').isEmail().custom(validateCorreo),
    // check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom(validateRol),
    validarCampos
], usuariosPost);

router.delete('/:id', [
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(validateUsuarioId),
    validarCampos
] , usuariosDelete);

router.put('/:id', [
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(validateUsuarioId),
    check('rol').custom(validateRol),
    validarCampos
], usuariosPut);



module.exports = router;