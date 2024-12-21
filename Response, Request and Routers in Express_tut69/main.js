const express = require('express')
const app = express()
const port = 3000
const blogs = require('./routes/about.js')
app.use(express.static("public"))


app.use('/blog', blogs)


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/', (req, res) => {
  console.log("hello world post");

  res.send('Hello World helllo workk!')
})
app.put('/', (req, res) => {
  console.log("hello world put");

  res.send('Hello World pputttt!')
})
app.post("/index", (req, res) => {
  const a = req.body
    console.log(a);
  // res.send("gettt yeaahhh")
  res.sendFile("./public/test.html", { root: __dirname })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})