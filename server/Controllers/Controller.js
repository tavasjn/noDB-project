let data = {
    captain: ['Elon Musk', 
    'Jack Sparrow', 
    'BUTLY', 
    'Tavas', 
    'John', 
    'Donald Trump'],
    crew: ['Yellow Minions', 
    'Tortuga Drunks', 
    'DevMtn Cohort', 
    'U.S.A Military', 
    'Umpa Lumpas', 
    'Star Fleet Command'],
    rocket:['SuperHeavy Starship', 
    'The Black Pearl', 
    'USS Discovery', 
    'USS Enterprise', 
    'Millennium Falcon', 
    'The Death Star'],
    destination: ['Colonize Mars', 
    'Colonize The Moon', 
    'Titan', 
    'The Final Frontier', 
    'Tatooine', 
    'Dagobah System']
}



module.exports = {
    getData: (req, res) => {
        res.status(200).send(data);
    },

    postCaptain: (req, res) => {
        // console.log(req.body)
        const {captain} = req.body;
        data.captain.push(captain);
        res.status(200).send(data);
    },

    deleteCaptain: (req, res) => {
        console.log(req.body)
        const {id} = req.params;
        data.captain.splice(id, 1);
        res.status(200).send(data);
    },
    deleteCrew: (req, res) => {
        console.log(req.body)
        const {id} = req.params;
        data.crew.splice(id, 1);
        res.status(200).send(data);
    },
    deleteRocket: (req, res) => {
        console.log(req.body)
        const {id} = req.params;
        data.rocket.splice(id, 1);
        res.status(200).send(data);
    },
    deleteDestination: (req, res) => {
        console.log(req.body)
        const {id} = req.params;
        data.destination.splice(id, 1);
        res.status(200).send(data);
    },

    editCaptain: (req, res) => {
        const {index, newName} = req.body;
        data.captain[index] = newName;
        res.status(200).send(data);
    },
    editCrew: (req, res) => {
        const {index, newName} = req.body;
        data.crew[index] = newName;
        res.status(200).send(data);
    },
    editRocket: (req, res) => {
        const {index, newName} = req.body;
        data.rocket[index] = newName;
        res.status(200).send(data);
    },
    editDestination: (req, res) => {
        const {index, newName} = req.body;
        data.destination[index] = newName;
        res.status(200).send(data);
    },


    // deleteData: ()
}
