'use client';

import Link from 'next/link';

export default function Dashboard() {
  const trips = [
    {
      id: 1,
      emoji: '🏔️',
      destination: 'Manali',
      date: 'Jan 15, 2025',
      budget: '₹5,000',
      progress: 45,
    },
    {
      id: 2,
      emoji: '🏖️',
      destination: 'Goa',
      date: 'Feb 20, 2025',
      budget: '₹8,000',
      progress: 60,
    },
    {
      id: 3,
      emoji: '⛰️',
      destination: 'Ladakh',
      date: 'Mar 10, 2025',
      budget: '₹12,000',
      progress: 30,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">Your Trips 🌍</h1>
            <p className="text-gray-600 text-lg">Manage and plan your upcoming adventures</p>
          </div>
          <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl px-8 py-4 font-bold text-lg hover:shadow-xl transition transform hover:scale-105 whitespace-nowrap">
            ✈️ New Trip
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-500">
            <div className="text-sm text-gray-600 mb-1">Total Trips</div>
            <div className="text-3xl font-bold text-teal-600">3</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-cyan-500">
            <div className="text-sm text-gray-600 mb-1">Total Budget</div>
            <div className="text-3xl font-bold text-cyan-600">₹25,000</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
            <div className="text-sm text-gray-600 mb-1">Upcoming</div>
            <div className="text-3xl font-bold text-blue-600">45 days</div>
          </div>
        </div>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white border-l-4 border-teal-500 p-6 rounded-xl shadow-md hover:shadow-2xl hover:transform hover:-translate-y-2 transition duration-300 group"
            >
              {/* Top section with emoji and destination */}
              <div className="mb-4">
                <div className="text-5xl mb-3 group-hover:scale-110 transition duration-300">{trip.emoji}</div>
                <h3 className="text-2xl font-bold text-teal-600 mb-1">{trip.destination}</h3>
                <p className="text-gray-600 text-sm">📅 {trip.date}</p>
              </div>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Planning Progress</span>
                  <span className="text-sm font-semibold text-teal-600">{trip.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${trip.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Budget section */}
              <div className="mb-6 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                <p className="text-gray-600 text-sm mb-1">Budget</p>
                <p className="text-2xl font-bold text-teal-600">{trip.budget}</p>
              </div>

              {/* Button */}
              <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105">
                View Trip →
              </button>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready for your next adventure?</h2>
          <p className="text-cyan-100 mb-6">Use our AI agent to help plan your perfect trip</p>
          <Link href="/">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-xl font-bold hover:shadow-xl transition transform hover:scale-105">
              Ask AI Agent 🤖
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
