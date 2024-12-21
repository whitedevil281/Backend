import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

// Middleware to handle CORS and JSON requests
app.use(cors()); // Note the parentheses to invoke `cors`
app.use(express.json()); // This is essential to parse JSON payloads

// Handle GET requests
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Handle POST requests
app.post('/', (req, res) => {
  console.log(req.body); // Logs the data received from the client
  res.send('Data received successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
