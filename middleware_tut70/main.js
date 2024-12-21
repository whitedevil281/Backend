
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs/promises')
app.use( express.static("public"))

// middleware 1
app.use( async (req, res, next) =>{
  // console.log(req.headers);
  req.eshu = "guieshruiewhfuieshfueiwhfueshf"
  
  console.log('LOGGED')
   fs.writeFile(
    "public/data.txt",
    `middleware 1 is getting a ${req.method} and the time is ${Date.now()}`
  );

  const data = await fs.readFile('public/data.txt', 'utf8');
  console.log('File content:', data);
  next()
})

// middleware 2
app.use((req, res, next) =>{
  console.log('logged 2')
  next()
})


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

4




app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/about', (req, res) => {
  res.send('Hello About!' + req.eshu)
})

app.get('/contact', (req, res) => {
  res.send('Hello Contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})