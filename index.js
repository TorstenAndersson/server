const express = require('express')
const PORT = process.env.PORT

express()
  .get('/', (req, res) => res.render('hyper.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
