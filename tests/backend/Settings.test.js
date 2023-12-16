```javascript
const request = require('supertest');
const app = require('../../server');
const Settings = require('../../models/Settings');

describe('Settings Controller', () => {
  let settings;

  beforeEach(async () => {
    settings = new Settings({
      theme: 'dark',
      fontSize: 'medium',
      aiBehavior: {
        formalityLevel: 'casual',
        responseTime: 'medium'
      }
    });

    await settings.save();
  });

  afterEach(async () => {
    await Settings.deleteMany();
  });

  describe('GET /settings/:id', () => {
    it('should return the settings for the given id', async () => {
      const res = await request(app).get(`/settings/${settings._id}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('theme', settings.theme);
    });
  });

  describe('PUT /settings/:id', () => {
    it('should update the settings for the given id', async () => {
      const res = await request(app)
        .put(`/settings/${settings._id}`)
        .send({
          theme: 'light',
          fontSize: 'large',
          aiBehavior: {
            formalityLevel: 'formal',
            responseTime: 'slow'
          }
        });

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('theme', 'light');
    });
  });
});
```