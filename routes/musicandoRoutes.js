const express = require ('express')
const musicandoControllers = require('../controllers/musicandoControllers')
const router = express.Router();



router.get ('/generos', musicandoControllers.getListGenero);
router.get ('/artistas', musicandoControllers.getListArtista);
router.get ('/albumes', musicandoControllers.getListAlbumes);
router.get ('/canciones', musicandoControllers.getListCanciones);
router.get ('/canciones/crear', musicandoControllers.getCreateSong);


module.exports = router;