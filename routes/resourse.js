var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var City_controller = require('../controllers/city');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// City ROUTES ///
// POST request for creating a City.
router.post('/city', City_controller.City_create_post);
// DELETE request to delete City.
router.delete('/city/:id', City_controller.City_delete);
// PUT request to update City.
router.put('/city/:id', City_controller.City_update_put);
// GET request for one City.
router.get('/city/:id', City_controller.City_detail);
// GET request for list of all City items.
router.get('/city', City_controller.City_list);
 
 
module.exports = router;