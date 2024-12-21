// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'html');
//   res.end('<h1>Hello world</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))
// app.get ot app.post or app.delete (path ,handler)
app.get('/', (req, res) => {
  res.send('Hello World!2')
})
// app.get('/contact', (req, res) => {
//   res.send('Hello conatct!2')
// })
// app.get('/aboutus', (req, res) => {
//   res.send('Hello aboutusd!2')
// })
// app.get('/home', (req, res) => {
//   res.send('Hello home !2')
// })
app.get('/:slug', (req, res) => {
  res.send(`Hello  ${req.params.slug}!`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
