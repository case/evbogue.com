
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.locals.pretty = true;
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(require('stylus').middleware(__dirname, '/node_modules/embittered'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname, 'node_modules/embittered'));
app.use(app.router);

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/digitalocean', routes.digitalocean);
app.get('*', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Evbogue.com is listening on port ' + app.get('port'));
});
