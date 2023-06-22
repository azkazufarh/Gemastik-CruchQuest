const express = require("express");
const mainRouter = require("./routes/router");
const app = express();
app.use(cors("*"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.use("/", mainRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
