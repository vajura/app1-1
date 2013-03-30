exports.index = function(req, res) {

    res.render('index', { title: 'Home' });
};

exports.about = function(req, res) {

    res.render('about', { title: 'About' });
};

exports.lobby = function(req, res) {

     res.render('lobby', { title: 'Lobby' + req.params.id, name: req.params.id } );
};