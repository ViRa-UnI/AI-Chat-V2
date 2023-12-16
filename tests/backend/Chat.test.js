```javascript
const request = require('supertest');
const app = require('../../backend/server');
const Chat = require('../../backend/models/Chat');

describe('Chat Routes', () => {
    it('should create a new chat message', async () => {
        const res = await request(app)
            .post('/api/chat')
            .send({
                userId: 'testUserId',
                message: 'Hello, AI!'
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('message');
    });

    it('should fetch all chat messages for a user', async () => {
        const res = await request(app)
            .get('/api/chat')
            .send({
                userId: 'testUserId'
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('messages');
    });

    afterAll(async () => {
        await Chat.deleteMany();
    });
});
```