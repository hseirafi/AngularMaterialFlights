/**
 * Created by hass on 7/20/2015.
 */
var express = require('express');
var application=express();
application.use(express.static(__dirname + '/myApp'));

application.listen(process.env.PORT || 3000);