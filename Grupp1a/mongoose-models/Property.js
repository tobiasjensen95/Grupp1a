module.exports = function(mongoose){

  // Create a new mongoose schema
  var PropertySchema = mongoose.Schema({
    name: {type: String, required: true},
    town: {type: String, required: true},
    price: {type: Number, required: true},
    // image: {type: Image, required: true},
    area: {type: Number, required: true}
  });
  
  // Return the model
  return mongoose.model("Property", PropertySchema);
};