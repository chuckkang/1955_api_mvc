//////  ROUTES
var controller = require('./controllers/main_controller.js');


module.exports = function Route(app){
app.get("/", function(req, res){
	controller.getPeople(req, res)
})
app.get("/new/:name", function (req, res) {
	controller.addPerson(req, res);
})
app.get("/remove/:name", function (req, res) {
	controller.removePerson(req, res);
})
app.get("/:name", function (req, res) {
	controller.showPerson(req, res);
})
//////////////////////////////////////////////
}