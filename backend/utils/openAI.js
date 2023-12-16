```javascript
const axios = require('axios');

const openAIChat = async (message) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: message,
      max_tokens: 60
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });

    if (response.data.choices && response.data.choices.length > 0) {
      return response.data.choices[0].text.trim();
    } else {
      throw new Error('No response from OpenAI');
    }
  } catch (error) {
    console.error(`Error in OpenAI API: ${error}`);
    throw error;
  }
};

module.exports = {
  openAIChat
};
```