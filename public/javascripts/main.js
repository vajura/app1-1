var socket = io.connect();

$(document).ready(function() {

   	var room = '<a href="/room/romanem"><ul class="room"><li id="id">#</li><li id="name">Name</li><li id="host">Host</li><li id="type">Type</li><li id="free">Free</li><li id="password">Password</li></ul></a>'; // Izpis za sobe
   	var type = '<select><option value="2">2P</option><option value="3">3P</option><option value="4">4P</option></select>'; // Izpis za tip igre
   	var default_text = '';
   	
   	/*var url = $(location).attr('href');
   	var game_id = url.split("/")[4];*/

	for (var a = 0; a < 10; a++)
		$('#rooms').append(room);

	$('#input').keypress(function(event) {

		if(event.which == 13) {
			
			if ($('#input').val() != '') {

				$('#messages').append('<li>' + $('#input').val() + '</li>');
				$('#input').val('');
			}
			event.preventDefault();
		}
	});
});