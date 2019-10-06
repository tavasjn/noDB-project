const express = require('express');
const app = express();
const ctrl = require('./Controllers/Controller');

app.use(express.json())

app.get('/api/data', ctrl.getData)

app.post('/api/captain', ctrl.postCaptain)

app.delete('/api/captain/:id', ctrl.deleteCaptain)
app.delete('/api/crew/:id', ctrl.deleteCrew)
app.delete('/api/rocket/:id', ctrl.deleteRocket)
app.delete('/api/destination/:id', ctrl.deleteDestination)


app.put('/api/captain', ctrl.editCaptain)
app.put('/api/crew', ctrl.editCrew)
app.put('/api/rocket', ctrl.editRocket)
app.put('/api/destination', ctrl.editDestination)


const port = 4450;
app.listen(port, () => {
    console.log(`Magic on port ${port}`);
});