var url 	= "mongodb://nodejitsu_zoranf:s622he159nr7g8isgjke2i1ght@ds051947.mongolab.com:51947/nodejitsu_zoranf_nodejitsudb8036041315",
	coll	= ['games'],
	db 		= require('mongojs').connect(url, coll);

// A user model object
function user(username, password, nickname) {

	this.username = username;
	this.password = password;
	this.nickname = nickname;
}

// A games model object
function game(name, type) {

	this.name = name;
	this.type = type;
}

//db.users.remove({"username":"zoran.felbar@gmail.com"});


/*
db.users.ensureIndex({username:1}, {unique:true});

var user1 = new user("zoran.felbar@gmail.com", "admin", "zoki");

db.users.save(user1, function(err, saved_user) {

	if (err || !saved_user) console.log("not saved: " + err);
	else console.log("Suksess");
});

db.users.find(user1, function(err, users) {

	if (err || !users.length) console.log("username: " + user.username + " not found");
	else users.forEach(function(user) {

		console.log("User found " + user.username);
	});
});*/

var snops = new game("Schnapssen", {type1: "2", type2: "3", type3: "4"}),
	uno = new game("Uno", 10),
	four_in_row = new game("Four in a row", {type1: "6x6", type2: "6x7", type3: "6x8"});

/*db.games.save(snops, function(err, saved_game) {

	if (err || !saved_game)
		console.log("Error[snops]" + err);
	else
		console.log("Add[snops]");
});

db.games.save(uno, function(err, saved_game) {

	if (err || !saved_game)
		console.log("Error[uno]" + err);
	else
		console.log("Add[uno]");
});

db.games.save(four_in_row, function(err, saved_game) {

	if (err || !saved_game)
		console.log("Error[four in a row]" + err);
	else
		console.log("Add[four in a row]");
});*/

// Find all
/*db.games.find(snops, function(err, games) {

	if (err || !games.length)
		console.log("Not found[snops]" + err);
	else games.forEach(function(game) {
		console.log(game.name + " " + game.type.type3);
	})
});*/

db.games.find(snops, function(err, game) {

	console.log('Hops: ' + game.name);
});