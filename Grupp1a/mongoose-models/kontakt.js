module.exports = function(mongoose){

  // Create a new mongoose schema
  var kontaktSchema = mongoose.Schema({
    namn: {type: String, required: true},
    epost: {type: String, required: true},
    telefon: {type: Number, required: true}
  });

  // Return the model
  return mongoose.model("Kontakt", kontaktSchema);
};