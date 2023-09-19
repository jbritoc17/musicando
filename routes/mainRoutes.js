const express = require ('express')

const mainControllers = require('../controllers/mainControllers');

const router = express.Router();

//@get /index
router.get ( '/' , mainControllers.getIndex );



module.exports = router;