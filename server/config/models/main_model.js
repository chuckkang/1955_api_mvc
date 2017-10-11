var mongoose = require("mongoose");

var PeopleSchema = new mongoose.Schema({
	name: { type: String, required: true, minlength: 3 },
	date: { type: Date, default: Date.now }
}, { timestamps: true });

mongoose.model('People', PeopleSchema);
var People = mongoose.model('People');
