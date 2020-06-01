const developersModel = require('../models/developer.model');
const request = require('supertest');
const baseUrl = '/api/developers';
const app = require("../app");

describe("API developers", async () =>{
    it('It should respond with an array of developers', async () =>{
        const response = await request(app).get('/');

		expect(response.status).toBe(200);
		expect(response.body.status).toBe(true);

    })
})