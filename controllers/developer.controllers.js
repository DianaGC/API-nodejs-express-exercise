const developersData = require('../data/developers');
const developerFunctions = require('../models/developer.model');


const getDevelopers = (req, res) =>  res.json(developerFunctions.getAll());

const createDeveloper = (req, res) =>{
    const {name, link_github, technologies} = req.body;
    if(!name || !link_github || !technologies) res.status(400).send('One or more required fields');
    const create = developerFunctions.create(req.body); 
    create ? res.status(400).send('A user with that id already exist') :  res.sendStatus(200);   
};

const updateDeveloper = (req, res) => {
    const updateDeveloper = developersData[req.params.id];
    if(updateDeveloper){
        developerFunctions.update(req);
        res.sendStatus(200);     
    }else{
        res.status(404).send('A user does not exist');
    }
};

const deleteDeveloper = (req, res) => {
    const deletedDeveloper = developersData[req.params.id];
    if(deletedDeveloper) {
        developerFunctions.deleteDev(req.params.id);
        res.sendStatus(200);
    } else{
        res.sendStatus(404).send('A user does not exist');
    } 
};

module.exports = {
     getDevelopers, 
     createDeveloper, 
     updateDeveloper, 
     deleteDeveloper 
    }