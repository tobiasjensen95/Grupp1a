module.exports = function(mongoose){

  // Create a new mongoose schema
  var BostadSchema = mongoose.Schema({
    name: {type: String, required: true},
    town: {type: String, required: true},
    price: {type: Number, required: true},
    img: {type: String, required: true},
    area: {type: Number, required: true}
  });
  
  // Return the model
  return mongoose.model("Bostad", BostadSchema);
};