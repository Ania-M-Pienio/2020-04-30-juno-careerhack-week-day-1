var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// create the subscriberSchema
var infoSchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  title: String,
  description: String,
});

// make this schema available to the Node application
module.exports = infoSchema;
