const http = require('http')
const server = http.createServer((req, res) => {
  res.end('Server tested and pushed to docker successfully!!')
})
server.listen(8080, () => console.log('Server running at 8080!'))