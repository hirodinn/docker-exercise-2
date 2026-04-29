import express from "express"

const app = express()

app.get("/", (req, res) =>{
    res.send("<h1>Hello there we are cool at working right now</h1>")
})

app.listen(3000, console.log("App running on port 3000"))