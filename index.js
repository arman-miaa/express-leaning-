const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
    {id:1, name:'Arman', email:'arman@gmail.com'},
    {id:2, name:'shohidullah', email:'shohidullah@gmail.com'},
    {id:3, name:'Abdullah', email:'abdullah@gmail.com'},
]

app.get('/', (req, res) => {
    res.send('User management servise is runing');
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log('post api getting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
    // const newUser = req.body;
    // newUser.id = users.length + 1;
    // users.push(newUser);
    // res.send(newUser)
})

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
})