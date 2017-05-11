var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

var express = require('express')
var app = express()
var server = require('http').createServer(app)

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/view/index.html')
})

app.get('/json', function (req, res) {
	res.send(JSON.stringify({json:true}))
})

server.listen(server_port,server_ip_address,function () {
	console.log("Listening on " + server_ip_address + ", port " + server_port)
})
