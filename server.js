const express = require('express');

const app = express();

//server
const PORT = process.env.PORT || 9000
app.listen(PORT, console.log("Server is running on port "+ PORT))