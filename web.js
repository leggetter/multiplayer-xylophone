var express = require( 'express' );
var Pusher = require( 'pusher' );

var app = express.createServer( express.logger() );
app.use( express.static( __dirname + '/public' ) );
app.use( express.bodyParser() );

var config = {
	id: process.env.PUSHER_APP_ID,
	key: process.env.PUSHER_APP_KEY,
	secret: process.env.PUSHER_APP_SECRET
};
var pusher = new Pusher( config );

app.post( '/pusher/auth', function( req, res ) {
	var socketId = req.body.socket_id;
	var channel = req.body.channel_name;
	var auth = pusher.auth( socketId, channel );
  res.send( auth );
} );

var port = process.env.PORT || 5000;
app.listen( port, function() {
  console.log( "Listening on " + port );
} );