var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ImageSchema = new Schema({
  image_id: {type: String,index: { unique: true}},
  url: String,
  tags: [String],
  hash: String,
  created_at: {type: Date, default: Date.now}
});

var Image = mongoose.model('Image', ImageSchema);

exports.Image =Image