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

  describe('Update Settings', () => {
    it('should update the settings', async () => {
      const res = await request(app)
        .put(`/api/settings/${settings._id}`)
        .send({
          theme: 'light',
          fontSize: 'large',
          aiBehavior: {
            formalityLevel: 'formal',
            responseTime: 'fast'
          }
        });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('settings');
      expect(res.body.settings.theme).toEqual('light');
      expect(res.body.settings.fontSize).toEqual('large');
      expect(res.body.settings.aiBehavior.formalityLevel).toEqual('formal');
      expect(res.body.settings.aiBehavior.responseTime).toEqual('fast');
    });
  });
});
```