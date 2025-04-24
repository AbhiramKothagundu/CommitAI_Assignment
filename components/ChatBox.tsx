interface Message {
    user: string;
    text: string;
    time: string;
  }
  
  const messages: Message[] = [
    { user: 'Alice', text: 'Hey there!', time: '10:00 AM' },
    { user: 'Bob', text: 'Hi Alice!', time: '10:01 AM' }
  ];
  
  export default function ChatBox() {
    return (
      <div className="border rounded p-4 bg-gray-100">
        <h2 className="font-semibold text-lg mb-2">Chat</h2>
        <div className="flex flex-col gap-2">
          {messages.map((msg, idx) => (
            <div key={idx}>
              <span className="font-bold">{msg.user}:</span> {msg.text}
              <div className="text-xs text-gray-500">{msg.time}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }