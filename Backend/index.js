const express = require ("express")
const cors = require ("cors")
const app = express();
app.use(cors());

const uname = "saranya"
const pass = 123
app.get("/login",function(req,res)
{
    
    if(req.query.username===uname&& req.query.password == pass)
        res.send("true")
    else
        res.send("false")
})

app.listen(5000,function()
{
    console.log("server started.....")
})