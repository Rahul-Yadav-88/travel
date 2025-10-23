"use client"

import { useState } from "react"

export default function HeroSection() {
  const [where, setWhere] = useState("")
  const [when, setWhen] = useState("")

  return (
    <main className="min-h-screen bg-gradient-to-r from-orange-50 via-pink-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content Section */}
          <div className="space-y-8 pt-4">
            {/* Tagline */}
            <p className="text-sm font-medium text-gray-700 tracking-wide">
              One site, 300,000+ experiences you'll remember
            </p>

            {/* Main Heading */}
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Your Adventure
                <br />
                Travel Experts
                <br />
                In{" "}
                <span className="relative inline-block">
                  <span className="text-orange-500">World!</span>
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full"></span>
                </span>
              </h1>
            </div>

            {/* Red Accent Dot */}
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>

            {/* Search Filters Card */}
            <div className="bg-white rounded-2xl p-8 shadow-md space-y-6 max-w-md">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider">Where</label>
                  <input
                    type="text"
                    placeholder="Search destinations"
                    value={where}
                    onChange={(e) => setWhere(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wider">When</label>
                  <input
                    type="text"
                    placeholder="Feb 03 - Mar 14"
                    value={when}
                    onChange={(e) => setWhen(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Collage */}
          <div className="relative h-full min-h-96 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-96 lg:h-full lg:min-h-96">
              {/* Top Left - Beach Image */}
              <div className="absolute top-0 left-0 w-56 h-44 rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/tropical-beach.jpg"
                  alt="Tropical beach with turquoise water"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Right - Mountain Hiker */}
              <div className="absolute top-0 right-0 w-44 h-56 rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/group-of-adventurers-with-backpacks-hiking.jpg"
                  alt="Adventure group with backpacks"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Left - Landscape */}
              <div className="absolute bottom-0 left-0 w-56 h-44 rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/scenic-landscape-with-mountains-and-sky.jpg"
                  alt="Scenic mountain landscape"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Right - Mountain Peak */}
              <div className="absolute bottom-0 right-0 w-44 h-56 rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/mountain-hiking-adventure-with-scenic-view.jpg"
                  alt="Mountain hiking adventure"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
