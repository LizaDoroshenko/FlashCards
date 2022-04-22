const express = require("express");
//const { config } = require('./.sequelizerc');
const config = require("./config/config");
const mainRouter = require("./routes/main.router");
const loginRouter = require("./routes/loginRouter");
const registrationRouter = require("./routes/registrationRouter");

const app = express();

const port = process.env.PORT ?? 3000;

config(app);

app.use("/", mainRouter);
app.use("/login", loginRouter);
app.use("/registration", registrationRouter);

app.listen(port, () => {
  console.log("*** PORT STARTED ***");
});
