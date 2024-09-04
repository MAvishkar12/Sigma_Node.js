


const fs=require('fs')


fs.writeFile("hello.txt","this is asynchroiis",()=>{
    console.log("hii");
   
    fs.appendFile("index.txt","contetn append",(e,d)=>{
        console.log(d);
        
    })
    fs.readFile("index.txt",(error,data)=>{
        console.log(error,data.toString());
        
    })
    
})

console.log("Complete");



