require('dotenv').config();
const express = require('express')
const TodoRoutes = require("../routes/todo.routes");
const UserRoutes =require("../routes/user.routes")
const app = express()
const port = process.env.PORT;

app.use(express.json());
app.use('/',TodoRoutes);
app.use('/',UserRoutes);



app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})