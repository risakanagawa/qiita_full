const mongoose = require('mongoose');
const url = process.env.MONGODB_URI


const articles = [
    {title : "Harry Potter and the Philosopher's Stone", account: "this_english"},
    {title : "Harry Potter en die Towenaar se Steen", account: "is_Afrikaans"},
    {title : "هاري بوتر وحجرالفيلسوف", account: "arabiaan"},
    {title : "哈利·波特与魔法石", account: "in_chinese"},
    {title : "Hari Poter kaj la Ŝtono de la Saĝulo", account: "where_is_esperanto"},
    {title : "ハリー・ポッターと賢者の石", account: "we_allknow_this"},
    {title : "Harry Potter a Kámen mudrců", account: "czechbeer_good"},
    {title : "Harry Potter en de Steen der Wijzen", account: "Haineken_"},
    {title : "Harry Potter und der Stein der Weisen", account: "german_"},
    {title : "Harry Potter At Ang Pilospong Bato", account: "tagalog_"},
    {title : "Ἄρειος Ποτὴρ καὶ ἡ τοῦ φιλοσόφου λίθος", account: "ancient_greek"},
    {title : "Harry Potter ujarallu inuunartoq", account: "green_landic"},
    {title : "Harry Potter és a bölcsek köve", account: "hungarian"},
    {title : " Harry Potter dan Batu Bertuah", account: "indonesian_migoren"},
    {title : "Harry Potter agus an Órchloch", account: "whiskey_irish"},
    {title : "Harry Potter e la Pietra Filosofale", account: "italia_n"},
    {title : "해리 포터와 마법사의 돌 ", account: "is_korean"},
    {title : "Harrius Potter et Philosophi Lapis", account: "latin_defficult"},
    {title : "Harry Potter dengan Batu yang Berhikmat", account: "malay_sian"},
    {title : "Харри Поттер ба Шидэт Чулуу", account: "mongolian"},
    {title : "هری پاتر-سنگ جاد", account: "persian_hard"},
    {title : "Harry Potter i Kamień Filozoficzny", account: "polish"},
    {title : "Гарри Поттер и философский камень", account: "russian_bolciti"},
    {title : "Harry Potter agus Clach an Fheallsanaich", account: "scottish_gaelic"},
    {title : "Hari Poter i kamen mudrosti", account: "serbian_latin"},
    {title : "Harry Potter a kameň mudrcov", account: "slovak"},
    {title : " แฮร์รี่ พอตเตอร์ กับศิลาอาถรรพ์", account: "thai_land"},
    {title : "Harry Potter ve Felsefe Taşı", account: "melhaba_turkish"},
    {title : "Гаррі Поттер та філософський камінь", account: "u_krainian"},
]

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })


const articleSchema = mongoose.Schema({
    title : {type: String,},
    account: {type: String,}
})

articleSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject._v
    }
  })

  module.exports = mongoose.model('Article', articleSchema)
