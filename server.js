const express = require("express");
const app = express();

//set the port and the app path
const port = process.env.PORT || 3000;
app.use("/", require("./routes"));

app.listen(port, () => {console.log(`Running on port ${port}`)});

