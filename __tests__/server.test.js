'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');

const request = supertest(server.app);

describe('Basic Express Server', () => {
  test('returns 404 for an unknown route', async () => {
    const response = await request.get('/missing');

    expect(response.status).toEqual(404);
  });

  test('returns 404 for an unsupported method', async () => {
    const response = await request.post('/person?name=fred');

    expect(response.status).toEqual(404);
  });

  test('returns 500 when the name query is missing', async () => {
    const response = await request.get('/person');

    expect(response.status).toEqual(500);
  });

  test('returns 200 when the name query is provided', async () => {
    const response = await request.get('/person?name=fred');

    expect(response.status).toEqual(200);
  });

  test('returns the provided name in the response object', async () => {
    const response = await request.get('/person?name=fred');

    expect(response.body).toEqual({
      name: 'fred',
    });
  });
});