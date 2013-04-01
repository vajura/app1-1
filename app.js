var express = require('express'),
    nano    = require('nano')('http://127.0.0.1:5984/'),
    db      = nano.use('user');
    routes  = require('./routes'),
    http    = require('http'),
    path    = require('path');
    app     = express(),
    server  = http.createServer(app),
    io      = require('socket.io').listen(server);
 
app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon(__dirname + '/public/images/favicon.ico')); 
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});
 
app.configure('development', function(){
    app.use(express.errorHandler());
});
 
app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/lobby/:id', routes.lobby);
app.get('/room/:id', routes.room);

server.listen(app.get('port'), function() { console.log("Express server listening on port " + app.get('port')); });

io.sockets.on('connection', function(socket) {

    socket.on('connect', function() {

        console.log('Connected: ' + msg);
    });
});