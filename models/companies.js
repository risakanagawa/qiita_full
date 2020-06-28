const mongoose = require('mongoose');
const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const companies = [
    { name: "株式会社　グリフィンドール", number_of_contributions: 20 },
    { name: "株式会社　ハッフルパフ", number_of_contributions: 18 },
    { name: "株式会社　スリザリン", number_of_contributions: 16 },
    { name: "株式会社　レイブンクロー", number_of_contributions: 15 },
    { name: "株式会社　A", number_of_contributions: 13 },
    { name: "株式会社　B", number_of_contributions: 9 },
    { name: "株式会社　C", number_of_contributions: 9 },
    { name: "株式会社　D", number_of_contributions: 7 },
    { name: "株式会社　E", number_of_contributions: 6 },
    { name: "株式会社　F", number_of_contributions: 6 },
]

const companySchema = mongoose.Schema({
    name : {type: String,},
    number_of_contributions: {type: Number,}
})

companySchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject._v
    }
  })

  module.exports = mongoose.model('Company', companySchema)

  