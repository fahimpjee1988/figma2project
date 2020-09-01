//import Express

const express = require('express')

//Server Erstellen 

const app = express ()

//Server abhören

app.listen(3002, ()=>{
    console.log('server listening at http://localhost:3002')
}
)

// Routing 
// Single
// req:request
// res:response


//static files abhoren
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname})
})


app.get('/solutions',(req,res)=>{
    res.sendFile('./views/solutions.html',{root:__dirname})
})

app.get('/community',(req,res)=>{
    res.sendFile('./views/community.html',{root:__dirname})
})

app.use((req,res)=>{
    res.status(404)
    res.sendFile('./views/404.html', {root:__dirname})})



