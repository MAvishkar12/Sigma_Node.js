const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World2!')
})
app.get("/profile/:name",(req,res)=>{
  console.log(req.params);
  console.log(req.query);
  
  res.send(`Name of user is ${req.params.name} and ${req.body} `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})