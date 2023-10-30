const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("Welcome to our home page")
    }
    if(req.url === "/about") {
        res.end("welcome to the about page")
    }
    res.end(`<h1>Oops!</h1>`)
})

server.listen(5001)

