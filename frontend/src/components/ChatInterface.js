```javascript
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage } from '../services/chatService';
import { CHAT_MESSAGE } from '../redux/actions';

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const chatLog = useSelector(state => state.chat);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() !== '') {
      const response = await sendMessage(message);
      dispatch({ type: CHAT_MESSAGE, payload: response });
      setMessage('');
    }
  };

  useEffect(() => {
    const chatInterface = document.getElementById('chatInterface');
    chatInterface.scrollTop = chatInterface.scrollHeight;
  }, [chatLog]);

  return (
    <div id="chatInterface">
      <div className="chatLog">
        {chatLog.map((chat, index) => (
          <div key={index} className={`chatMessage ${chat.sender}`}>
            <p>{chat.message}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          id="chatInput"
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Type your message here..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatInterface;
```