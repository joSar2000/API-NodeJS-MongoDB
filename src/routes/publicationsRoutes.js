const { Router } = require('express');
const { consultarPublicaciones, guardarPublicaciones, eliminarPublicaciones } = require('../controllers/publicationController');
const router = Router();

router.get('/socialApi/publications', consultarPublicaciones);
router.post('/socialApi/publications/registro', guardarPublicaciones);
router.delete('/socialApi/publications/eliminar/:id', eliminarPublicaciones);

module.exports = router;
