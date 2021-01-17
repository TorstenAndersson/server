const express = require('express')
const app = express()
const port = process.env.PORT

express()
  .get('/', (req, res) => res.json('products.json'))
  .listen(port, () => console.log(`Listening on ${ port }`))
/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
*/
