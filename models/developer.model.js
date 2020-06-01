const developers = require('../data/developers');

const getAll = () => developers ;

const create = (attributes) => {
    const {name, link_github, technologies} = attributes;
    const id = name[0]+name.replace(" ","").toLowerCase();
    if(developers[id]) {
        return 'A user with that id already exist' 
    }
    developers[id] = {name, link_github, technologies} 
}

const update = (attributes) =>{
    const {name, link_github, technologies} = attributes.body;
    developers[attributes.params.id] = {name, link_github, technologies} ;
}

const deleteDev = (id) => delete developers[id];

module.exports ={
    create,
    getAll,
    deleteDev,
    update
}
