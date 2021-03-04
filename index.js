const express = require('express')
const fs = require('fs')
const path = require('path')
const https = require('https')

const certOptions = {
  key: fs.readFileSync(path.resolve('cert/localhost.key')),
  cert: fs.readFileSync(path.resolve('cert/localhost.crt')),
}

const app = express()

app.use(express.json())

app.get('/', (_, res) => {
  res.send({ msg: 'hello' })
})

const server = https.createServer(certOptions, app)

server.listen(443, () =>
  console.log(`Server is listening on https://localhost:443`)
)
