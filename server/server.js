import express from "express"

const PORT = process.env.PORT || 5050
const app = express()

const choices = [
    {value: 0, text: 'rock'},
    {value: 1, text: 'paper'},
    {value: 2, text: 'scissors'}
]

app.get('/rps', (req,res)=>{
    const choice = Math.floor(Math.random()*3)
    res.send(choices[choice])
})

app.listen(PORT, ()=>{
    console.log('listening on port', PORT)
})