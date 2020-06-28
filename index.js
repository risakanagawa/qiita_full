require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const Article = require("./models/article");
const Company = require("./models/companies");
const Tag = require("./models/tags");
const User = require("./models/users");

app.use(cors());
const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

app.use(express.static("build"));
app.use(express.json());
app.use(requestLogger);

app.get("/api/articles", (request, response) => {
  Article.find({}).then((articles) => {
    console.log(articles);
    response.json(articles);
  });
});

app.get("/api/companies", (request, response) => {
  Company.find({}).then((company) => {
    response.json(company);
  });
});

app.get("/api/tags", (request, response) => {
  Tag.find({}).then((tag) => {
    console.log(tag);
    response.json(tag);
  });
});

app.get("/api/users", (request, response) => {
  User.find({}).then((user) => {
    response.json(user);
  });
});

// EROOR HANDLER
// with unknown endpoint
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
