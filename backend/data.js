const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this will be our data base's data structure
const DataSchema = new Schema(
  {
    id: Number,
    message: String
  },
  {
    timestamps: true
  }
)

// export the schema
module.exports = mongoose.model('Data', DataSchema);