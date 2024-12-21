import express from "express";
import path from "path";
import mongoose from "mongoose";
const app = express();
const port = 3000;
import {Employee} from "./models/data.js";
let con  = await mongoose.connect("mongodb://localhost:27017/company")

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(express.json())

app.get('/', (req, res) => {
  res.render(path.resolve("./views/index.ejs"));
});

app.post('/data', async (req, res) => {
  const employees = req.body; // This will be an array of employee objects
  const savedEmployees = [];
  await Employee.deleteMany({});
  for (let employeeData of employees) {
    const employee = new Employee(employeeData); // Create a new instance of Employee
    const savedEmployee = await employee.save(); // Save the employee to the database
    savedEmployees.push(savedEmployee); // Add saved employee to the results array
  }

  console.log(savedEmployees); // Log the saved employees to the console
  res.json(savedEmployees); // Send the saved employees back as the response
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});