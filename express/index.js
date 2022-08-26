const express = require('express')
const UserRouter = require('./Routes/UserRouter') 

const app = express();
app.use(express.json())

app.use('/api/users', UserRouter )

const Port = 5000;
app.listen(Port,err=>err? console.log(err) : console.log(`the server is running on ${Port}`))