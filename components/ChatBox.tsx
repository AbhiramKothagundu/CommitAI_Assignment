'use client';

import { useState } from 'react';

interface Message {
  user: string;
  text: string;
  time: string;
}

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([
    { user: 'Abhiram', text: 'Hi IM Abhiram...', time: '10:00 AM' },
    { user: 'Kothagundu', text: 'Welcome to India', time: '10:01 AM' }
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMsg: Message = {
      user: 'You',
      text: newMessage,
      time: time
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <div className="border rounded p-4 shadow-md mt-4">
      <h2 className="font-semibold text-lg mb-2">Chat</h2>
      <div className="flex flex-col gap-2 mb-4">
        {messages.map((msg, idx) => (
          <div key={idx}>
            <span className="font-bold">{msg.user}:</span> {msg.text}
            <div className="text-xs">{msg.time}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border rounded p-2"
          placeholder="Type your message..."
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
}
