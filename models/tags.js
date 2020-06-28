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

const fs = require("fs");
const python = "../img/python.jpg";
const js = "../img/js.jpg";
const rails = "../img/rails.jpg";
const ruby = "../img/ruby.jpg";
const aws = "../img/aws.jpg";
const beginner = "../img/beginner.jpg";
const php = "../img/php.jpg";
const docker = "../img/docker.jpg";
const laravel = "../img/laravel.jpg";
const react = "../img/react.jpg";

const tags = [
  { name: "Python", img: python, number_of_contributions: 287 },
  { name: "JavaScript", img: js, number_of_contributions: 205 },
  { name: "Rails", img: rails, number_of_contributions: 159 },
  { name: "Ruby", img: ruby, number_of_contributions: 150 },
  { name: "AWS", img: aws, number_of_contributions: 122 },
  { name: "初心者", img: beginner, number_of_contributions: 109 },
  { name: "PHP", img: php, number_of_contributions: 101 },
  { name: "Docker", img: docker, number_of_contributions: 82 },
  { name: "Laravel", img: laravel, number_of_contributions: 74 },
  { name: "React", img: react, number_of_contributions: 62 },
];

const tagSchema = mongoose.Schema({
  name: String,
  number_of_contributions: Number,
  img: { data: Buffer, contentType: String },
});

tagSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject._v;
  },
});

module.exports = mongoose.model("Tag", tagSchema);

// async function addToDB() {
//   for (tag of tags) {
//     var newTag = new Tag(tag);
//     newTag.img.data = fs.readFileSync(tag.img);
//     newTag.img.contentType = "image/jpg";
//     await newTag.save();
//   }
//   console.log("tag saved!");
//   mongoose.connection.close();
// }


