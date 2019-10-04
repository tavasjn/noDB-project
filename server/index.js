const express = require('express');
const app = express();
const ctrl = require('./Controllers/Controller');

app.get('/api/captain', ctrl.getCaptain)



const port = 4450;
app.listen(port, () => {
    console.log(`Magic on port ${port}`);
});