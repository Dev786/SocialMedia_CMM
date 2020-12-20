const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./user/route');
app.use(express.json());
app.use('/user', userRoutes);

app.listen(port, () => {
    console.log("The Server is listening at port -- ", port);
});