```javascript
const request = require('supertest');
const app = require('../../backend/server');

describe('Settings Routes', () => {
    let token;

    beforeAll((done) => {
        request(app)
            .post('/api/auth/login')
            .send({
                email: 'test@test.com',
                password: 'password'
            })
            .end((err, response) => {
                token = response.body.token; 
                done();
            });
    });

    test('It should require authorization', () => {
        return request(app)
            .get('/api/settings')
            .then(response => {
                expect(response.statusCode).toBe(401);
            });
    });

    test('It responds with JSON', () => {
        return request(app)
            .get('/api/settings')
            .set('Authorization', `Bearer ${token}`)
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.type).toBe('application/json');
            });
    });

    test('It should update user settings', () => {
        return request(app)
            .put('/api/settings')
            .set('Authorization', `Bearer ${token}`)
            .send({
                theme: 'dark',
                fontSize: 'large',
                aiFormality: 'formal'
            })
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.body.settings.theme).toBe('dark');
                expect(response.body.settings.fontSize).toBe('large');
                expect(response.body.settings.aiFormality).toBe('formal');
            });
    });
});
```