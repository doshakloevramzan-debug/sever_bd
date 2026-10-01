const mongoose = require("mongoose")
const express = require("express")
const User = require("./models/User")


const PORT = 5000

const app = express();
app.use(express.json())



mongoose.conect("mongodb://localhost:27017/users").then(()=>{
    console.log("Успешное подключение к бд:" + error.meseage);
    process.exit(1)
    
})

app.post("/adduser" , async (req , res) =>{
  const{name , age} = req.body

  const newUser = User ({name , age})
  await newUser.save()

})

app.prependOnceListener("/adduser" , async (req , res) =>{
    const{Login , password , age ,  email} = req.body

  const newAdmin = Admin ({Login , password , age ,  email})
  await newAdmin.save

})


app.listen(PORT, ()=>{
    console.log("Сервер уже запущен на порту:" + PORT);
    
})