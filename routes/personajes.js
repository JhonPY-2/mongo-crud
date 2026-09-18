const express = require('express');
const router = express.Router();
const personajeController = require('../controllers/personajeController');
const verificarToken = require('../middleware/auth');

router.post('/', verificarToken, personajeController.crear);
router.get('/', personajeController.obtenerTodos);
router.put('/:id', verificarToken, personajeController.actualizar);
router.delete('/:id', verificarToken, personajeController.eliminar);
router.get('/:id', personajeController.obtenerPorId);

module.exports = router;