import fs from "fs/promises"

let a=await fs.readFile("hello.txt")
console.log(a.toString());
