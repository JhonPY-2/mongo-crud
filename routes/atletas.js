const express = require('express');
const router = express.Router();
const atletaController = require('../controllers/atletaController');
const verificarToken = require('../middleware/auth');

router.post('/', verificarToken, atletaController.crear);
router.get('/', atletaController.obtenerTodos);
router.put('/:id', verificarToken, atletaController.actualizar);
router.delete('/:id', verificarToken, atletaController.eliminar);
router.get('/:id', atletaController.obtenerPorId);

module.exports = router;