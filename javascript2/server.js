const http = require('http')

const listener = function(req, res) {
    console.log(req.url)
    if (req.url === '/students') {
        return res.end('hiiii')

    }
}


const server = http.createServer(listener)
//server.listen(5000, () => console.log('running...'))
server.listen(3000, () => console.log('running...'))
