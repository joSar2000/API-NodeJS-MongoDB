const { Router } = require('express');
const { consultarPublicaciones, guardarPublicaciones, eliminarPublicaciones, modificarPublicaciones } = require('../controllers/publicationController');
const router = Router();

router.get('/socialApi/publications', consultarPublicaciones);
router.post('/socialApi/publications/registro', guardarPublicaciones);
router.delete('/socialApi/publications/eliminar/:id', eliminarPublicaciones);
router.put('/socialApi/publications/modificar', modificarPublicaciones);

module.exports = router;
