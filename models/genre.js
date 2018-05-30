var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
	name: {type: String, required: true, enum: ['Science Fiction','French Poetry','non-fiction','romance','military','history','Fantasy']}
  }
);

// Virtual for author's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);