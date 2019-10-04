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
    'Umpa Lumpas', 
    'U.S.A Military', 
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
    getCaptain: (req, res) => {
        res.status(200).send(data.captain);
    }
}
