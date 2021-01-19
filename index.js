const express = require('express');
const port = process.env.PORT;
const products = JSON.parse('
{
  "products": {
    "name":"Sudd Johan","description":"Bara gamla goda Johan.",
    "price":{
      "discount": {
        "price":"10,99 kr","reason":"Fick vibbarna"
      },
      "original":"14, 99 kr"
    },
    "img":"imgs/Sudd/Sudd Johan.png",
    "link":"sudd/sudd-johan",
    "type":"sudd",
    "ondisplay":"true"
  }, {
    "name":"Johans Hoodie",
    "description":"fyfan va varmt",
    "price":{
      "discount": {
        "price":"149,99 kr","reason":"PÅSKREA"
      },
      "original":"499,99 kr"
    },
    "img":"imgs/Johans Hoodie/Johans Hoodie White Front.jpg",
    "link":"merchandise/johans-hoodie",
    "type":"merchandise",
    "ondisplay":"true"
  }, {
    "name":"Johans Flip-Flops",
    "description":"LFIPÅPT FLOP",
    "price":{
      "discount": {
        "price":"1000,99 kr","reason":"PÅSKREA"
      },
    "original":"349, 99 kr"
    },
    "img":"imgs/Johans Flip-Flops/Johans Flip-Flops Medium Above.png",
    "link":"merchandise/johans-flip-flops",
    "type":"merchandise",
    "ondisplay":"true"
  }, {
    "name":"Johans Mobilskal",
    "description":"Skydda din mobil!",
    "price":{
      "original":"149,99 kr"
    },
    "img":"imgs/Johans Mobilskal/Johans Mobilskal iPhone 12 Pro Max.png",
    "link":"merchandise/johans-mobilskal",
    "type":"merchandise",
    "ondisplay":"true"
  }
}
');
var count = 0;

for (var i in products.products) {
  count += 1;
}
var sudd;
var merch;
var ondisplay;
var individualItems = [];

express()
  .get('/products', (req, res) => res.send(count));
  .listen(port, () => console.log(`Listening on ${port}`));
