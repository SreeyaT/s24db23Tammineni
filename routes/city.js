var express = require('express');
var passport = require('passport')
const City_controllers = require('../controllers/city')
var router = express.Router();
//A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}

/* GET home page. */
router.get('/', City_controllers.City_view_all_Page);

/* GET detail costume page */
router.get('/detail', City_controllers.City_view_one_Page);

/* GET create costume page */
router.get('/create', secured, City_controllers.City_create_Page);

/* GET create update page */
router.get('/update', secured, City_controllers.City_update_Page);

router.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/');
});

/* GET delete costume page */
router.get('/delete', secured, City_controllers.City_delete_Page)

module.exports = router;
