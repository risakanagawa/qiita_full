const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors())

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};
app.use(requestLogger);


let articles = [
  { title: "Harry Potter and the Philosopher's Stone", id: "this_english" },
  { title: "Harry Potter en die Towenaar se Steen", id: "is_Afrikaans" },
  { title: "هاري بوتر وحجرالفيلسوف", id: "arabiaan" },
  { title: "哈利·波特与魔法石", id: "in_chinese" },
  { title: "Hari Poter kaj la Ŝtono de la Saĝulo", id: "where_is_esperanto" },
  { title: "ハリー・ポッターと賢者の石", id: "we_allknow_this" },
  { title: "Harry Potter a Kámen mudrců", id: "czechbeer_good" },
  { title: "Harry Potter en de Steen der Wijzen", id: "Haineken_" },
  { title: "Harry Potter und der Stein der Weisen", id: "german_" },
  { title: "Harry Potter At Ang Pilospong Bato", id: "tagalog_" },
  { title: "Ἄρειος Ποτὴρ καὶ ἡ τοῦ φιλοσόφου λίθος", id: "ancient_greek" },
  { title: "Harry Potter ujarallu inuunartoq", id: "green_landic" },
  { title: "Harry Potter és a bölcsek köve", id: "hungarian" },
  { title: " Harry Potter dan Batu Bertuah", id: "indonesian_migoren" },
  { title: "Harry Potter agus an Órchloch", id: "whiskey_irish" },
  { title: "Harry Potter e la Pietra Filosofale", id: "italia_n" },
  { title: "해리 포터와 마법사의 돌 ", id: "is_korean" },
  { title: "Harrius Potter et Philosophi Lapis", id: "latin_defficult" },
  { title: "Harry Potter dengan Batu yang Berhikmat", id: "malay_sian" },
  { title: "Харри Поттер ба Шидэт Чулуу", id: "mongolian" },
  { title: "هری پاتر-سنگ جاد", id: "persian_hard" },
  { title: "Harry Potter i Kamień Filozoficzny", id: "polish" },
  { title: "Гарри Поттер и философский камень", id: "russian_bolciti" },
  { title: "Harry Potter agus Clach an Fheallsanaich", id: "scottish_gaelic" },
  { title: "Hari Poter i kamen mudrosti", id: "serbian_latin" },
  { title: "Harry Potter a kameň mudrcov", id: "slovak" },
  { title: " แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์", id: "thai_land" },
  { title: "Harry Potter ve Felsefe Taşı", id: "melhaba_turkish" },
  { title: "Гаррі Поттер та філософський камінь", id: "u_krainian" },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/api/notes", (request, response) => {
  response.json(articles);
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: "unknown endpoint" });
  };
  
  app.use(unknownEndpoint);