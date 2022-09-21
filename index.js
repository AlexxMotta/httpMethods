const express = require('express')
const app = express()

app.use(express.json())


app.get('/server', function(req,res){
    //query params
    const {name, category} = req.query
    console.log(name,category)
    return res.json([
        "Alex Junior"
    ])
})

app.post('/server', function(req,res){
    //pega os dados contidos no json da request
    const {name, owner} = req.body
    console.log(name,owner)
    return res.json([
        "Alex Junior",
        "Kauan Santana"
    ])
})


app.put('/server/:id', function(req,res){
    const {id} = req.params
    const {name,owner} = req.body
    console.log(id,name,owner)


    return res.json([
        {name :name},
        {owner :owner},
    ])
})

app.delete('/server/:id', function(req,res){
    console.log('delete')
    return res.json([
        {name :'Alex Junior'},
    ])
})

//a chamada da porta deve ficar nas ultimas linhas
app.listen(3000, ()=>{
    console.log("Server started.")
}) 