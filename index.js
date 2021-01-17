const express = require('express')
const app = express()
const port = process.env.PORT
const products = '{"products": [{"name":"Sudd Johan", "description": "Bara gamla goda Johan.", "price": {"discount": {"price": "10,99 kr", "reason": "Fick vibbarna"}, "original": "14, 99 kr"}, "img":"imgs/Sudd/Sudd Johan.png", "link":"sudd/sudd-johan"}, {"name":"Johans Hoodie", "description": "fyfan va varmt", "price": {"discount": {"price": "149,99 kr", "reason": "PÅSKREA"}, "original": "499,99 kr"}, "img":"imgs/Johans Hoodie/Johans Hoodie White Front.jpg", "link":"merchandise/johans-hoodie"}, {"name":"Johans Flip-Flops", "description": "LFIPÅPT FLOP", "price": {"discount": {"price": "1000,99 kr", "reason": "PÅSKREA"}, "original": "349, 99 kr"}, "img":"imgs/Johans Flip-Flops/Johans Flip-Flops Medium Above.png", "link":"merchandise/johans-flip-flops"}, {"name":"Johans Mobilskal", "description": "Skydda din mobil!", "price": {"original": "149,99 kr"}, "img":"imgs/Johans Mobilskal/Johans Mobilskal iPhone 12 Pro Max.png", "link":"merchandise/johans-mobilskal"}]}'

express()
  .get('/', (req, res) => res.json(products))
  .listen(port, () => console.log(`Listening on ${ port }`))
/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
*/
