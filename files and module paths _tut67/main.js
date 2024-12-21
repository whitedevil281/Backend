const fs = require("fs")
// console.log("strting");

// fs.writeFile("ooh.txt","OOOOOOHHHHHHHHHHHHHHHH", () => {
//   console.log("YEAAAH DONE");
//   fs.readFile("ooh.txt",(error,data) => {
//     console.log(error , data.toString());
//   }
//   )
// }
// )
//   we use append apend someting in a file and also every time it will apeend 
fs.appendFile("eshwar.txt"," yeaaahh", (e,d) => {
  console.log(d);
  
fs.readFile('eshwar.txt', 'utf8', (err, data) => {
  console.log(data);
});
}
)
// console.log("ending");
