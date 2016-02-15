var express = require('express');
var app = express();

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3002');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/rsvp', function (req, res) 
{

	var data = [
		{
			/* IGH Value Example, cost is high but loads of hours played and rating */
			firstname: "Tester",
			lastname: "Bovine",
			choices: [
				{
					food: "1"
				}
			]	
		}, 
		{
			/* IGH Value Example, cost is high but loads of hours played and rating */
			firstname: "Joe",
			lastname: "Bloggs",
			choices: [
				{
					food: "0"
				}
			]	
		}
		
	];

  res.send(data);

});


app.listen(3003, function () {
  console.log('Data server listening on port 3003!');
});