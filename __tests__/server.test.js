'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('Testing server', () => {
  it('should find a person on GET `/person`', async () => {
    const response = await request.get('/person/?name=Tim');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Tim');
  });
  it('should send a 500 error when no person is found', async () => {
    const response = await request.get('/person');

    expect(response.status).toEqual(500);
  });
  it('should send a 404 when no route is triggered', async () => {
    const response = await request.get('/wrong');

    expect(response.status).toEqual(404);
  });
});