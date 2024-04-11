var express = require('express');
const City_controllers = require('../controllers/city')
var router = express.Router();
 
/* GET home page. */
router.get('/', City_controllers.City_view_all_Page);

/* GET detail costume page */
router.get('/detail', City_controllers.City_view_one_Page);

/* GET create costume page */
router.get('/create', City_controllers.City_create_Page);

/* GET create update page */
router.get('/update', City_controllers.City_update_Page);

/* GET delete costume page */
router.get('/delete', City_controllers.City_delete_Page)
 
module.exports = router;
