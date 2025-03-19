import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatUI = () => {
  const [messages, setMessages] = useState([]); 
  const [newMessage, setNewMessage] = useState('');
  const [editMessageId, setEditMessageId] = useState(null); 
  const [editMessageText, setEditMessageText] = useState(''); 

  const API_URL = 'http://localhost:8080/api/chat'; 

  
  
  const fetchMessages = async () => {
    try {
      const response = await axios.get(API_URL);
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  // Add a new message
  const addMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      const response = await axios.post(API_URL, { text: newMessage });
      setMessages([...messages, response.data]);
      setNewMessage('');
    } catch (error) {
      console.error('Error adding message:', error);
    }
  };

  // Edit an existing message
  const editMessage = async (id) => {
    if (!editMessageText.trim()) return;

    try {
      const response = await axios.put(`${API_URL}/${id}`, { text: editMessageText });
      setMessages(messages.map((msg) => (msg._id === id ? response.data : msg)));
      setEditMessageId(null);
      setEditMessageText('');
    } catch (error) {
      console.error('Error editing message:', error);
    }
  };

  // Delete a message
  const deleteMessage = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setMessages(messages.filter((msg) => msg._id !== id));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  // Fetch messages on component mount
  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div>
      <h2>Chat Application</h2>
      <div>
        {messages.map((msg) => (
          <div key={msg._id} style={{ marginBottom: '10px' }}>
            {editMessageId === msg._id ? (
              <div>
                <input
                  type="text"
                  value={editMessageText}
                  onChange={(e) => setEditMessageText(e.target.value)}
                />
                <button onClick={() => editMessage(msg._id)}>Save</button>
                <button onClick={() => setEditMessageId(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <span>{msg.text}</span>
                <button onClick={() => { setEditMessageId(msg._id); setEditMessageText(msg.text); }}>Edit</button>
                <button onClick={() => deleteMessage(msg._id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={addMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatUI;
