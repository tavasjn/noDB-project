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

let displayFleet = {
    captain: '',
    crew: '',
    rocket: '',
    destination: '',
}



module.exports = {
    getData: (req, res) => {
        res.status(200).send(data);
    },

    // Add Methods

    addCaptain: (req, res) => {
        // const {captain} = req.body;
        const {id} = req.params;
        displayFleet.captain = data.captain[id];
        console.log(displayFleet)
        res.status(200).send(displayFleet);
    },
    addCrew: (req, res) => {
        const {id} = req.params;
        displayFleet.crew = data.crew[id];
        console.log(displayFleet)
        res.status(200).send(displayFleet);
    },
    addRocket: (req, res) => {
        const {id} = req.params;
        displayFleet.rocket = data.rocket[id];
        console.log(displayFleet)
        res.status(200).send(displayFleet);
    },
    addDestination: (req, res) => {
        const {id} = req.params;
        displayFleet.destination = data.destination[id];
        console.log(displayFleet)
        res.status(200).send(displayFleet);
    },

    // Post Methods

    postCaptain: (req, res) => {
        // console.log(req.body)
        const {captain} = req.body;
        data.captain.push(captain);
        res.status(200).send(data);
    },

    // Delete Methods 

    deleteCaptain: (req, res) => {
        // console.log(req.body)
        const {id} = req.params;
        data.captain.splice(id, 1);
        res.status(200).send(data);
    },
    deleteCrew: (req, res) => {
        // console.log(req.body)
        const {id} = req.params;
        data.crew.splice(id, 1);
        res.status(200).send(data);
    },
    deleteRocket: (req, res) => {
        // console.log(req.body)
        const {id} = req.params;
        data.rocket.splice(id, 1);
        res.status(200).send(data);
    },
    deleteDestination: (req, res) => {
        // console.log(req.body)
        const {id} = req.params;
        data.destination.splice(id, 1);
        res.status(200).send(data);
    },

    // Edit Methods 

    editCaptain: (req, res) => {
        // console.log(req.body)
        const {index} = req.params
        const {captain} = req.body;
        // console.log(captain)
        data.captain[index] = captain;
        res.status(200).send(data);
    },
    editCrew: (req, res) => {
        // console.log(req.body)
        const {index} = req.params
        const {crew} = req.body;
        data.crew[index] = crew;
        res.status(200).send(data);
    },
    editRocket: (req, res) => {
        // console.log(req.body)
        const {index} = req.params
        const {rocket} = req.body;
        data.rocket[index] = rocket;
        res.status(200).send(data);
    },
    editDestination: (req, res) => {
        // console.log(req.body)
        const {index} = req.params
        const {destination} = req.body;
        data.destination[index] = destination;
        res.status(200).send(data);
    },


    // deleteData: ()
}
