```javascript
const request = require('supertest');
const app = require('../../backend/server');

describe('Chat Routes', () => {
  it('should send a chat message and get a response', async () => {
    const res = await request(app)
      .post('/api/chat')
      .send({ message: 'Hello, AI!' });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('response');
  });

  it('should handle invalid chat requests', async () => {
    const res = await request(app)
      .post('/api/chat')
      .send({});

    expect(res.statusCode).toEqual(400);
  });
});
```