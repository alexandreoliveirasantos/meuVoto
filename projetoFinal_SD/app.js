var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');

var questao1Router = require('./routes/questao1');//Para teste de resposta (POST)

var questao1RespRouter = require('./public/javascripts/questao1');

var app = express();

var session = require('express-session'), Redistore = require('connect-redis')(session);

var sessionStore = new Redistore({
	host : 'localhost',
	port: 6379,
	ttl : (60000 * 24 *30),
	pass : ''
});

app.use(session({
	resalve: false,
	saveUninitialized: false,
	name : 'COOKIE_NAME',
	secret : 'COOKIE_PASS',
	store : sessionStore,
	cookie : {magAge : (60000 * 24 * 30)},
	resave : false
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/questao1', questao1Router);
app.use('/questao1RespRouter', questao1RespRouter);

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


app.listen(3001, () =>{/*Colocar servidor em funcionamento*/
	console.log('Servidor em funcionamento em: http://localhost:3001')
	console.log('Para finalizar: pressione Ctrl+C')
})