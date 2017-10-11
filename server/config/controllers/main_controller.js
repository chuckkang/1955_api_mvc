
var mongoose = require("mongoose");
var People = mongoose.model('People');

module.exports = {
	getPeople: function(req, res){
		People.find({}, function(err, result){
			res.json(result);
		})
		
	},
	addPerson: function (req, res) {
		var newPerson = new People({name: req.params.name});
		newPerson.save(function(err){
			if (err){
				console.log("There was an error", {error: err})
			}
			else{
				res.redirect("/");
			}
		})

	},
	removePerson: function(req, res){
		People.remove({name: req.params.name}, function(err){
			if (err) {
				console.log("There was an error", { error: err })
			}
			else {
				res.redirect("/");
			}
		})

	},
	showPerson: function(req, res){
		People.find({name: req.params.name}, function(err, result){
			res.json(result);
		})
	}

}