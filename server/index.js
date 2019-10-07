const express = require('express');
const cors = require('cors');
const app = express();
const ctrl = require('./Controllers/Controller');

app.use(cors())
app.use(express.json())

app.get('/api/data', ctrl.getData)

// app.post('/api/captain', ctrl.postCaptain)


app.post('/api/captain/:id', ctrl.addCaptain)
app.post('/api/crew/:id', ctrl.addCrew)
app.post('/api/rocket/:id', ctrl.addRocket)
app.post('/api/destination/:id', ctrl.addDestination)



app.delete('/api/captain/:id', ctrl.deleteCaptain)
app.delete('/api/crew/:id', ctrl.deleteCrew)
app.delete('/api/rocket/:id', ctrl.deleteRocket)
app.delete('/api/destination/:id', ctrl.deleteDestination)




app.put('/api/captain/:index', ctrl.editCaptain)
app.put('/api/crew/:index', ctrl.editCrew)
app.put('/api/rocket/:index', ctrl.editRocket)
app.put('/api/destination/:index', ctrl.editDestination)




const port = 4450;
app.listen(port, () => {
    console.log(`Magic on port ${port}`);
});