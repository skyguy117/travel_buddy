'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [showAIChat, setShowAIChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, type: 'bot', text: 'Hi! I\'m your Travel AI Agent. Where would you like to go?' }
  ]);
  const [userInput, setUserInput] = useState('');

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    setChatMessages([
      ...chatMessages,
      { id: chatMessages.length + 1, type: 'user', text: userInput },
      { id: chatMessages.length + 2, type: 'bot', text: 'Great choice! Let me help you plan that trip...' }
    ]);
    setUserInput('');
  };

  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-cyan-500 to-blue-600 opacity-90"></div>

        {/* Animated orbs for visual depth */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          {/* Main content */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="mb-6 inline-block">
              <span className="inline-block px-4 py-2 bg-white bg-opacity-20 text-white rounded-full text-sm font-semibold backdrop-blur-md border border-white border-opacity-30">
                ✨ AI-Powered Travel Planning
              </span>
            </div>

            <h1 className="text-7xl sm:text-8xl font-black text-white mb-6 leading-tight drop-shadow-lg">
              Travel <span className="text-cyan-200">Smarter</span>
            </h1>

            <p className="text-xl sm:text-2xl text-cyan-50 mb-8 max-w-2xl mx-auto leading-relaxed">
              Maximum experience, minimum cost. Let AI help you find the perfect destination, budget your trip, and create unforgettable memories.
            </p>

            {/* Search bar */}
            <div className="mb-10">
              <div className="max-w-2xl mx-auto bg-white bg-opacity-95 rounded-2xl shadow-2xl p-2 flex gap-2">
                <input
                  type="text"
                  placeholder="Where do you want to travel? (e.g., Bali, Tokyo, Paris)"
                  className="flex-1 px-6 py-4 text-gray-800 placeholder-gray-500 focus:outline-none text-lg"
                />
                <Link href="/dashboard">
                  <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition transform hover:scale-105 whitespace-nowrap">
                    Explore 🚀
                  </button>
                </Link>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/dashboard">
              <button className="bg-white text-teal-600 px-8 py-4 rounded-xl text-lg font-bold hover:shadow-2xl transition transform hover:scale-105 inline-block">
                Start Planning →
              </button>
            </Link>
          </div>

          {/* Floating AI Agent */}
          <button
            onClick={() => setShowAIChat(!showAIChat)}
            className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition transform hover:scale-110 flex items-center justify-center text-2xl z-50 animate-bounce"
            title="Chat with AI Travel Agent"
          >
            🤖
          </button>

          {/* AI Chat Window */}
          {showAIChat && (
            <div className="fixed bottom-28 right-8 w-96 max-w-sm h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 animate-in slide-in-from-bottom-5 duration-300">
              {/* Chat header */}
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-4 flex justify-between items-center">
                <h3 className="font-bold text-lg">Travel AI Agent</h3>
                <button
                  onClick={() => setShowAIChat(false)}
                  className="text-white hover:bg-white hover:bg-opacity-20 px-2 py-1 rounded text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-3 rounded-lg ${
                        msg.type === 'user'
                          ? 'bg-teal-500 text-white rounded-br-none'
                          : 'bg-gray-200 text-gray-800 rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200 flex gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition text-sm font-semibold"
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }

        .animate-bounce {
          animation: float 3s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
}
