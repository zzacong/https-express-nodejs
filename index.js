const express = require('express')
// const fs = require('fs')
// const path = require('path')
// const https = require('https')

// const certOptions = {
// key: fs.readFileSync(path.resolve('cert/localhost.key')),
// cert: fs.readFileSync(path.resolve('cert/localhost.crt')),
// }

const app = express()

app.get('/box', (req, res) => {
  console.log('--- URL ---')
  console.log(req.url)
  console.log('--- HEADERS ---')
  console.log(req.headers)
  console.log('--- BODY ---')
  console.log(req.body)
  console.log('--- PARAMS ---')
  console.log(req.params)
  console.log('--- QUERY ---')
  console.log(req.query)

  res.send({ msg: 'Webhook notifications received' })
})

// const server = https.createServer(certOptions, app)

// server.listen(443, () =>
//   console.log(`Server is listening on https://localhost:443`)
// )

const PORT = process.env.PORT || 5000
app.listen(3000, () =>
  console.log(`Server is listening at http://localhost:${PORT}`)
)
