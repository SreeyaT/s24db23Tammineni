var City = require('../models/City');
// List of all Citys
exports.City_list = function(req, res) {
 res.send('NOT IMPLEMENTED: City list');
};
// for a specific City.
//exports.City_detail = async function(req, res) {
   // try {
       // const City = await City.findById(req.params.id);
      //  res.render('City', { title: 'City Details', City: City });
 //   } catch (err) {
       // res.status(500).json({ error: err.message });
   // }
//};

exports.City_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await City.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    

// Handle City create on POST.
exports.City_create_post = async function(req, res) {
    console.log("QQQQQQQQQQQQQQQQQQQQQQ")
    let document = new City();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"name":"goat", "country":12, "population":"large"}
    document.name = req.body.name;
    document.country = req.body.country;
    document.population = req.body.population;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
   
// Handle City delete from on DELETE.
exports.City_delete = async function(req, res) {
    try {
        await City.findByIdAndDelete(req.params.id);
        res.json({ message: 'City item deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// Handle City update form on PUT.
// exports.City_update_put = async function(req, res) {
//     try {
//         await City.findByIdAndUpdate(req.params.id, req.body);
//         res.json({ message: 'City item updated successfully' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };
 

exports.City_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await City.findById( req.params.id)
// Do updates of properties
if(req.body.name)
toUpdate.name = req.body.name;
if(req.body.country) toUpdate.country = req.body.country;
if(req.body.population) toUpdate.population = req.body.population;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

// List of all Citys
exports.City_list = async function(req, res) {
    try{
    theCitys = await City.find();
    res.send(theCitys);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    exports.City_delete = async function(req, res) {
        console.log("delete " + req.params.id)
        try {
        result = await City.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
        }
        };

        // Handle a show one view with id specified by query
exports.City_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await City.findById( req.query.id)
    res.render('Citydetail',
    { title: 'City Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for creating a City.
// No body, no in path parameter, no query.
// Does not need to be async
exports.City_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('citycreate', { title: 'City Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    // Handle building the view for updating a costume.
    // query provides the id
    exports.City_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await City.findById(req.query.id)
    res.render('cityupdate', { title: 'city Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle a delete one view with id from query
exports.City_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await City.findById(req.query.id)
    res.render('Citydelete', { title: 'City Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
   
    //VIEWS
    // Handle a show all view
    exports.City_view_all_Page = async function(req, res) {
    try{
    theCitys = await City.find();
    res.render('City', { title: 'City Search Results', results: theCitys });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
   
    
