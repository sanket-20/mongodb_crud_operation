const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//routing

// user api
app.post('/create_movie/', function (req, res) {
    var file = require(__dirname + "/src/movies/create_movie.js");
    file.main(req, res);
});

app.put('/update_movie/', function (req, res) {
    var file = require(__dirname + "/src/movies/update_movie.js");
    file.main(req, res);
});

app.delete('/delete_movie/:id', function (req, res) {
    var file = require(__dirname + "/src/movies/delete_movie.js");
    file.main(req, res);
});

app.get('/get_movie/:id', function (req, res) {
    var file = require(__dirname + "/src/movies/get_movie.js");
    file.main(req, res);
});

app.get('/get_movie_list/', function (req, res) {
    var file = require(__dirname + "/src/movies/get_movie_list.js");
    file.main(req, res);
    
});


// app.listen(PORT, () => console.log(`server started at PORT:${PORT}`))


//server
app.listen(9998, function () {
    console.log("Server is running...");
});