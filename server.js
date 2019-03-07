var express = require('express'),
cors = require('cors'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Project = require('./Models/ProjectModel'),
bodyParser = require('body-parser');
const mongodb = process.env.MONGO_URI || 'mongodb://localhost:27017/openwebinars'

app.use(cors())

mongoose.connect(mongodb)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/ProjectRoutes'); //importing route
routes(app); //register the route

console.log(mongoose.connection)

app.listen(port);

console.log('API server started on: ' + port);