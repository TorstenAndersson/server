const express = require("express");
const cors = require("cors");
const fetch = require('node-fetch');
const port = process.env.PORT;
var products;
//async ()=>await fetch("https://johanssuddproducts.herokuapp.com/").then(response=>response.json).then(data=>products = data);
/*
get_request();
async function get_request() {
  const res = await fetch("https://johanssuddproducts.herokuapp.com/");
  products = await res.json();//assuming data is json
}
*/
//products = JSON.parse('{"products": [{"name":"Sudd Johan","description":"Bara gamla goda Johan.","price":{"discount": {"price":"10,99 kr","reason":"Fick vibbarna"},"original":"14, 99 kr"},"img":"imgs/Sudd/Sudd Johan.png","link":"sudd/sudd-johan","type":"sudd","onDisplay":"true"}, {"name":"Johans Hoodie","description":"fyfan va varmt","price":{"discount": {"price":"149,99 kr","reason":"2020 REA"},"original":"499,99 kr"},"img":"imgs/Johans Hoodie/Johans Hoodie White Front.jpg","link":"merchandise/johans-hoodie","type":"merchandise","onDisplay":"false"}, {"name":"Johans Flip-Flops","description":"LFIPÅPT FLOP","price":{"discount": {"price":"1000,99 kr","reason":"PÅSKREA"},"original":"349, 99 kr"},"img":"imgs/Johans Flip-Flops/Johans Flip-Flops Medium Above.png","link":"merchandise/johans-flip-flops","type":"merchandise","onDisplay":"true"}, {"name":"Johans Mobilskal","description":"Skydda din mobil!","price":{"original":"149,99 kr"},"img":"imgs/Johans Mobilskal/Johans Mobilskal iPhone 12 Pro Max.png","link":"merchandise/johans-mobilskal","type":"merchandise","onDisplay":"true"}]}');
getProducts();
async function getProducts() {
  const response = await fetch("https://johanssuddproducts.herokuapp.com/");
  products = await response.json();
  launch();
}

function launch() {
  var sudd = '{"sudd":[';
  var merchandise = '{"merchandise":[';
  var onDisplay = '{"onDisplay":[';
  var individualItems = '{"items":{';

  for (var i in products.products) {
    if (products.products[i].type == "sudd") sudd += JSON.stringify(products.products[i]) + ",";
    if (products.products[i].type == "merchandise") merchandise += JSON.stringify(products.products[i]) + ",";
    if (products.products[i].onDisplay == "true") onDisplay += JSON.stringify(products.products[i]) + ",";
    individualItems += '"' + (products.products[i].name.replace(" ", "") + '":' + JSON.stringify(products.products[i]) + ',');
    //individualItems.push(products.products[i].name);
  }

  sudd = sudd.slice(0, -1);
  sudd += "]}";
  merchandise = merchandise.slice(0, -1);
  merchandise += "]}";
  onDisplay = onDisplay.slice(0, -1);
  onDisplay += "]}";
  individualItems = individualItems.slice(0, -1);
  individualItems += "}}";
  sudd = JSON.parse(sudd);
  merchandise = JSON.parse(merchandise);
  onDisplay = JSON.parse(onDisplay);
  individualItems = JSON.parse(individualItems);

  var allItems = JSON.parse('{"products":' + JSON.stringify(sudd).slice(0, -1) + "," + JSON.stringify(merchandise).slice(1, -1) + "," + JSON.stringify(onDisplay).slice(1, -1) + "," + JSON.stringify(individualItems).slice(1) + "}");

  express()
    .use(cors({options: "https://xenodochial-varahamihira-6786dc.netlify.app/"}))

    .get("/", (req, res) => res.send("<html><body><h1>HEY</h1></body></html>"))

    .get("/products", (req, res) => res.json(eval(req.query.wanted)))

    .get("/product", (req, res) => res.json(individualItems.items[req.query.wanted]))

    .get("/all", (req, res) => res.json(allItems))

    .listen(port);
}