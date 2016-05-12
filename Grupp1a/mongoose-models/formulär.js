module.exports = function(mongoose){

  // Create a new mongoose schema
  var formulärSchema = mongoose.Schema({
    namn: {type: String, required: true},
    email: {type: String, required: true},
    adress: {type: String, required: true},
    bostadstyp: {type: String, required: true},
    ovrigt: {type: String, required: false},
  });

  // Return the model
  return mongoose.model("Formulär", formulärSchema);
};