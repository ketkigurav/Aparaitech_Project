import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatBot = () =>
   {

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi 👋 How can I help you?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => 
    {
  if (!input.trim()) return;

  const userMsg = { text: input, sender: "user" };
  const msg = input.toLowerCase();

  let botReply = "";

  if (msg.includes("job") || msg.includes("opening")) {
    botReply = "We have exciting roles 🚀 Check 'Open Roles' page!";
  } 
  else if (msg.includes("apply")) {
    botReply = "Click on Apply page and fill the form. It’s quick 👍";
  } 
  else if (msg.includes("salary")) {
    botReply = "Salary depends on role & experience 💼";
  } 
  else if (msg.includes("location")) {
    botReply = "We offer Remote, Hybrid & On-site roles 🌍";
  } 
  else if (msg.includes("hello") || msg.includes("hi")) {
    botReply = "Hey there 👋 How can I assist you today?";
  } 
  else {
    botReply = "Ask me about jobs, applying, or company info 😊";
  }

  const botMsg = { text: botReply, sender: "bot" };

  setMessages(prev => [...prev, userMsg, botMsg]);
  setInput("");
};

  return (
    <div className="fixed bottom-5 right-5 z-50">

      {/* Chat Window */}
      {open && (
        <div className="w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 flex justify-between">
            <span>Chat Assistant</span>
            <X onClick={() => setOpen(false)} className="cursor-pointer" />
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[70%] ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 flex border-t">
            <input
              type="text"
              className="flex-1 border rounded px-2 py-1"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="ml-2 px-3 bg-blue-600 text-white rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <MessageCircle />
      </button>

    </div>
  );
};

export default ChatBot;