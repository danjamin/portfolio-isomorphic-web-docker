var http = require('http')

var server = http.createServer((req, res) => {
  res.end('Site under maintenance.  Check back soon!')
}).listen(process.env.PORT ? process.env.PORT : 8000)
