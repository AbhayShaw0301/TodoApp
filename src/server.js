require('dotenv').config();
const express = require('express')
const TodoRoutes = require("./routes/todo.routes");
const UserRoutes =require("./routes/user.routes")
const session = require('express-session');
const app = express()
const port = process.env.PORT;

app.use(express.json());
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:process.env.SECRET_KEY,
    cookie: { maxAge:60*60*1000}, 
    rolling:true,
  }))
app.use('/',TodoRoutes);
app.use('/',UserRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: "Endpoint not found" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})