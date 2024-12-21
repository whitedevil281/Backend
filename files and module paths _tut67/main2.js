import { log } from "console";
import fs from "fs/promises"

let a = await fs.readFile("ooh.txt")
console.log(a.toString());
let b = await fs.writeFile("ooh.txt", "\n\n\n\n\n\nYeahhhhhhhhhhhhhhhhhhhhh") 
