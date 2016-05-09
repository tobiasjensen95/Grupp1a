module.exports = function(mongoose){

  // Create a new mongoose schema
  var bostadSchema = mongoose.Schema({
    adress: {type: String, required: true},
    typ: {type: String, required: true},
    rum: {type: Number, required: true},
    pris: {type: Number, required: true},
    avgift: {type: Number, required: true},
    boarea: {type: Number, required: true},
    tomtarea: {type: Number, required: true},
    done: {type: Boolean, required: false}
  });

  // Return the model
  return mongoose.model("Bostad", bostadSchema);
};