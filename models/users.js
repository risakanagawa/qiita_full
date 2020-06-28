const mongoose = require("mongoose");
const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const users = [
    {name : "Professor Severus Snape", account: "severus_snape", number_of_contributions : 777},
    {name : "Hermione Granger", account: "granger_hermione", number_of_contributions : 555},
    {name : "Sirius Black", account: "serius_black", number_of_contributions : 444},
    {name : "Professor Albus Dumbledore", account: "albus_dumbledore", number_of_contributions : 322},
    {name : "Lord Voldemort", account: "who_you_know", number_of_contributions : 222},
    {name : "Dobby", account: "dobby", number_of_contributions : 211},
    {name : "Draco Malfoy", account: "doraco_foy", number_of_contributions : 188},
    {name : "Professor Minerva McGonagall", account: "macgonagall_", number_of_contributions : 155},
    {name : "Rubeus Hagrid", account: "hagrid", number_of_contributions : 100},
    {name : "Bellatrix Lestrange", account: "lenst_range", number_of_contributions : 80},
]

const userSchema = mongoose.Schema({
  name: String,
  account: String,
  number_of_contributions: Number,
});

userSchema.set("toJSON", {
  transfrom: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject._v;
  },
});

module.exports = mongoose.model("User", userSchema);

