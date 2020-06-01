API REST with Nodejs

Create an application that allows the data recording of software developers and the technologies they know. The data must be saved in the memory of the application (using an array or any collection like lists, maps, etc ...). The application must be dockerized, so a Dockerfile file must be included in the root directory of the code of your application, to be able to run it locally.
This application will expose 4 REST services:
``` 
1. GET http: // url-aplicacion / developers (list all saved data)
2. POST http: // url-aplicacion / developers (allows to save a new record)
{
"full_names": "put the names here",
"link_github": "put the github link here",
"known_technologies": ["technology-one", "technology-two", ...]
}
3. PUT http: // url-aplicacion / developers / {id} (allows editing an existing record)
{
"full_names": "put the names here",
"link_githun": "put the github link here",
"known_technologies": ["technology-one", "technology-two", ...]
}
4. DELETE http: // url-aplicacion / developers / {id} (delete the indicated record)
```

## Requirements
* [Docker compose](https://docs.docker.com/compose/install/)
* Node.js v10.15.3

## Setup
Firstly, create  .env file. you just need

* `PORT`: To specify the port of the current app, e.g. `3000`.

## Running the project
If you want to start the app:
* Make sure you have the `.env` files.
* Install project dependencies : `npm install`
* Run the project: `npm start`

## Running the project with docker
* Building your image `docker build -t diana/api-rest .`
* `docker run -p 2000:3000 -d diana/api-rest`

## APIs
* Get all `http://localhost:3000/api/developers`
* Create new POST `http://localhost:3000/api/developers` 
```
{
        "name": "Juan Lopez",
        "link_github": "https://github.com/Juan",
        "technologies": [
            "Java",
            "Git",
            "CSS"
        ]
	
}
```
* Delete `http://localhost:3000/api/developers/{id}`
* Update `http://localhost:3000/api/developers/{id}`
```
{
        "name": "Juan Lopez",
        "link_github": "https://github.com/Juan",
        "technologies": [
            "JavaScript",
            "Git",
            "CSS"
        ]
	
}
```


## Running the tests
* Run the command: `npm tests`
