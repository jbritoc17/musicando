const express = require ('express')
const musicandoControllers = require('../controllers/musicandoControllers')
const router = express.Router();


router.get ('/canciones', musicandoControllers.getListCanciones);
router.post ('/canciones', musicandoControllers.getCreate);

router.get ('/canciones/:id', musicandoControllers.getDetailCancion);
router.put ('/canciones/:id', musicandoControllers.getUpdateCancion);
router.delete ('/canciones/:id', musicandoControllers.getDeleteCancion);

router.get ('/generos', musicandoControllers.getListGenero);

router.get ('/artistas', musicandoControllers.getListArtista);
router.get ('/albumes', musicandoControllers.getListAlbumes);
module.exports = router;