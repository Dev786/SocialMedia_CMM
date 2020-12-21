const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');
app.use(cors());
const userRoutes = require('./Modules/user/route');
app.use(express.json());
app.use('/user', userRoutes);

app.listen(port, () => {
    console.log("The Server is listening at port -- ", port);
});