const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const cors = require('cors')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/lekkahub.com/privkey.pem', 'utf8')
const certificate = fs.readFileSync('/etc/letsencrypt/live/lekkahub.com/cert.pem', 'utf8')
const ca = fs.readFileSync('/etc/letsencrypt/live/lekkahub.com/chain.pem', 'utf8')

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

app.set('port', port)

//Middleware
app.use(bodyParser.json())
app.use(cors())

const posts = require('./routes/api/posts')
app.use('/api/posts', posts)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)
  const httpServer = http.createServer(app)
  const httpsServer = https.createServer(credentials, app)
  // Listen the server

  httpsServer.listen(port, () => {
    console.log('HTTPS Server running on port 443')
  })

}
start()
