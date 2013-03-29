exports.index = function(req, res) {

    res.render('index', { title: 'blue-port.org' });
};

exports.about = function(req, res) {

    res.render('about', { title: 'about' });
};

exports.lobby = function(req, res) {

     res.render('lobby', { title: 'Lobby' + req.params.id, name: req.params.id } );
};