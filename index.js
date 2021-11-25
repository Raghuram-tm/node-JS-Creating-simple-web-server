const fs = require('fs')
const http = require('http')
const url = require('url')

const server = http.createServer((req,res)=>{
    const reqPath = req.url
    if(reqPath === '/login'){
        res.end("send him to dashboard")
    }
    else if (reqPath === '/name'){
        res.end("Hello Raghu")
    }
    else if(reqPath === '/Raghu'){
        res.end("welcome Raghu")
    }
    else{
        res.writeHead(404, {
            'Content-type' : 'text/html',
            'my-header' : 'my header'
        })
        res.end( "<h1>Page not found</h1>")
    }
    
})

server.listen(4000, '127.0.0.1', () => {
    console.log("listening on port 4000")
})


