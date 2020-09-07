const http = require('http')
const server = http.createServer((req, res) => {
  res.end('Server started!')
})
server.listen(8080, () => console.log('Server running at 8080 update'))