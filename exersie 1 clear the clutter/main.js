import { log } from 'console'
import express from 'express'
import fs from 'fs'

import path from 'path'

const app = express()
const port = 3000

app.use(express.static('public'))
async function movefile(filepath,newpath) {
    fs.rename(`./public/cluster/${filepath}`,`./public/${newpath}/${filepath}`,() => {
      console.log(`${filepath} moved to ${newpath}`);  
    }
    )  
}
fs.readdir("./public/cluster", (er ,files) => {
  files.forEach(file => {
    let extname = path.extname(file)
    let dirname = extname.substring(1)
    if(fs.existsSync(`./public/${dirname}`)){
        console.log("exits");
        movefile(file,dirname)
    }
    else{
        fs.mkdirSync(`./public/${dirname}`)
        movefile(file,dirname)
    }
    
  });
}
)






