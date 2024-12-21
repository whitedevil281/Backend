
//use
use("cruddb")
//create 
db.createCollection("crudop")


//write
// db.crudop.insertOne(
//     {
//         "name": "Eshwar",
//         "work": "web developwer",
//         "salary": 2000,
//         "class": 10
//     }
// )
// db.crudop.insertMany([

//     {
//         name: "Eshwar", work: "web developer", salary: 2000, class: 10
//     },
//     { name: "Eshwar", work: "web developer", salary: 2000, class: 10 },
//     { name: "Eshwar", work: "web developer", salary: 2000, class: 10 },
//     { name: "Eshwar", work: "web developer", salary: 2000, class: 10 },
//     { name: "Eshwar", work: "web developer", salary: 2000, class: 10 },
//     { name: "Eshwar", work: "web developer", salary: 2000, class: 10 },
//     { name: "Eshwar", work: "web developer", salary: 2000, class: 10 },
//     { name: "Eshwar", work: "web developer", salary: 2000, class: 10 },
//     { name: "Eshwar", work: "web developer", salary: 2000, class: 10 },
//     { name: "Eshwar", work: "web developer", salary: 2000, class: 10 },
// ]
// )

//read
let a = db.crudop.find({"name": "Eshwar"})
console.log(a.count());
// let b = db.crudop.findOne({"name": "Eshwar"})
// console.log(b);

//update

db.crudop.updateOne({"salary": 2000},{$set:{"salary":5000}})
db.crudop.updateMany({"salary": 2000},{$set:{"salary":6000}})


//delete
db.crudop.deleteMany({salary:6000})