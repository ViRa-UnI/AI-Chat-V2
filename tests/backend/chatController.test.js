```javascript
const request = require('supertest');
const app = require('../../server');
const { User } = require('../../models/User');
const { Chat } = require('../../models/Chat');

describe('Chat Controller', () => {
    let token;
    let userId;

    beforeAll(async () => {
        const user = new User({
            name: 'Test User',
            email: 'testuser@gmail.com',
            password: 'testpassword'
        });
        userId = user._id;
        await user.save();
        token = user.generateAuthToken();
    });

    afterAll(async () => {
        await User.deleteMany({});
        await Chat.deleteMany({});
    });

    describe('POST /api/chat', () => {
        it('should return 401 if user is not logged in', async () => {
            const res = await request(app)
                .post('/api/chat')
                .send({ message: 'Hello AI' });
            expect(res.status).toBe(401);
        });

        it('should return 400 if message is not provided', async () => {
            const res = await request(app)
                .post('/api/chat')
                .set('x-auth-token', token)
                .send({});
            expect(res.status).toBe(400);
        });

        it('should return 200 and the AI response if valid request', async () => {
            const res = await request(app)
                .post('/api/chat')
                .set('x-auth-token', token)
                .send({ message: 'Hello AI' });
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('message');
        });
    });
});
```