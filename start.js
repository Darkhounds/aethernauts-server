/**
 * Created by Cain on 13-08-2015.
 */
var express = require("express");
var app     = express();
app.use(express.static('public'));

var server  = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});