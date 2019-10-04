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
    }
}
