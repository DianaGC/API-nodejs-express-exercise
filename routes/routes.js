const developerController = require('../controllers/developer.controllers');
const baseUrl = '/api/developers';

const routes  = (app) => {
   
    //Create a new developer 
    app.route(baseUrl).post(developerController.createDeveloper)
    
    //Retrieve all developers
    app.route(baseUrl).get(developerController.getDevelopers);

    // Update a developer
    app.route(baseUrl+'/:id').put(developerController.updateDeveloper);

    //Delete a developer
    app.route(baseUrl+'/:id').delete(developerController.deleteDeveloper);
}

module.exports = routes;