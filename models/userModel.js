const mongoose = require("mongoose")


const user = new mongoose.Schema({
   name: {
      type: String
   },
   image: {
      type: String
   },
   summery: {
      type: String
   }
})

module.exports = mongoose.model("user", user)