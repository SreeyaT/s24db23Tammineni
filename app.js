require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
mongoose = require('mongoose');

var City = require('./models/City')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var CitysRouter = require('./routes/city');
var gridRouter = require('./routes/grid');
var picRouter = require('./routes/pick');
var resourceRouter = require('./routes/resourse');

// We can seed the collection if needed on
//server start
async function recreateDB(){
  // Delete everything
  await City.deleteMany();

  let instance1 = new
  City({name:"Delhi", country:'India',
 population:100000});
  instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });

  let instance2 = new
  City({name:"tokyo", country:'japan',
 population:100000});
  instance2.save().then(doc=>{
  console.log("second object saved")}
  ).catch(err=>{
  console.error(err)
  });

  let instance3= new
  City({name:"new york", country:'USA',
 population:4560000});
  instance3.save().then(doc=>{
  console.log("third object saved")}
  ).catch(err=>{
  console.error(err)
  });
  
 }
 let reseed = true;
 if (reseed) {recreateDB();}
 
const connectionString = process.env.MONGO_CON;

var app = express();

mongoose.connect(connectionString);
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/city',CitysRouter);
app.use('/grid', gridRouter);
app.use('/pick', picRouter);
app.use('/users', usersRouter);
app.use('/resource',resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;