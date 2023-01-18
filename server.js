console.log("hello")

//reqireはモジュールの読み込み
const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const io = require("socket.io")(server)
const PORT = 8000


app.get("/", (req, res)=> {
    res.send("hello")
})

server.listen(PORT, () =>{
    console.log("listening on 8000")
})


