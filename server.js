const http = require('http')

const server = http.createServer((req, res) => {
  res.end('hello world from docker')
})

server.listen(8000, () => console.log(`Server running at 8000!`))