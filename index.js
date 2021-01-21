const express = require('express');
const port = process.env.PORT;
const products = JSON.parse('{"products": [{"name":"Sudd Johan","description":"Bara gamla goda Johan.","price":{"discount": {"price":"10,99 kr","reason":"Fick vibbarna"},"original":"14, 99 kr"},"img":"imgs/Sudd/Sudd Johan.png","link":"sudd/sudd-johan","type":"sudd","ondisplay":"true"}, {"name":"Johans Hoodie","description":"fyfan va varmt","price":{"discount": {"price":"149,99 kr","reason":"PÅSKREA"},"original":"499,99 kr"},"img":"imgs/Johans Hoodie/Johans Hoodie White Front.jpg","link":"merchandise/johans-hoodie","type":"merchandise","ondisplay":"true"}, {"name":"Johans Flip-Flops","description":"LFIPÅPT FLOP","price":{"discount": {"price":"1000,99 kr","reason":"PÅSKREA"},"original":"349, 99 kr"},"img":"imgs/Johans Flip-Flops/Johans Flip-Flops Medium Above.png","link":"merchandise/johans-flip-flops","type":"merchandise","ondisplay":"true"}, {"name":"Johans Mobilskal","description":"Skydda din mobil!","price":{"original":"149,99 kr"},"img":"imgs/Johans Mobilskal/Johans Mobilskal iPhone 12 Pro Max.png","link":"merchandise/johans-mobilskal","type":"merchandise","ondisplay":"true"}]}');

var sudd = "";
var merchandise = [];
var onDisplay = [];
var individualItems = '{"items":{';

for (var i in products.products) {
  if (products.products[i].type = "sudd") {sudd += JSON.stringify(products.products[i]) + ","};
  if (products.products[i].type = "merchandise") {merchandise.push(products.products[i])};
  if (products.products[i].ondisplay = "true") {onDisplay.push(products.products[i])};
  individualItems += '"' + (products.products[i].name.replace(" ", "") + '":' + JSON.stringify(products.products[i]) + ',');
  //individualItems.push(products.products[i].name);
}

sudd = sudd.slice(0, -1);
individualItems = individualItems.slice(0, -1);
individualItems += "}}";

express()
  //.get('/', (req, res) => res.send(JSON.parse(individualItems).items.SuddJohan))
  .get("/", (req, res) => res.send("The Official Server of Johanssudd"))
  .get("/products", (req, res) => res.json(products))
  .get("/product", (req, res) => res.json(JSON.parse(individualItems).items[req.query.wanted]))
  .get("/sudd", (req, res) => res.json(JSON.parse(sudd)))
  .listen(port, () => console.log("Listening on " + port));
