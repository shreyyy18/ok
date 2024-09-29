const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page')
    }
    if(req.ulr==='/about'){
        res.end('Here is out short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We cant find this page</p>
        <a href="/">Back home</a>
        `)
})
server.listen(5000)