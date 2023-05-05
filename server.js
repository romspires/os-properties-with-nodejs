const http = require("http")
const host = 'http://localhost';
const port = 8000;
const stats = require('./pcRamUsage')


http
    .createServer((req,res)=>{
        let url = req.url;

        if (url === "/stats") {
            res.end(JSON.stringify(stats, null))
        } else {
            res.end('<h1>Seja bem-vindo!</h1>')
        }
    })
    .listen(port, () => console.log(`Server is running in: ${host}:${port}`))