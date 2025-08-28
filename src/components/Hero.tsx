"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Phone, Star, Gem, Home } from "lucide-react"
import { HeroData } from "@/types/hero"

export default function Hero() {
  const [heroData, setHeroData] = useState<HeroData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch("/api/hero")
        if (!response.ok) throw new Error("Failed to fetch hero data")
        const data = await response.json()
        setHeroData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }
    fetchHeroData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-[#FFD6C0] via-[#FFE97F] to-[#A3D9D6] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading cosmic wisdom...</p>
        </div>
      </div>
    )
  }

  if (error || !heroData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFD3D3] via-[rgba(242,201,76,0.35)] to-[rgba(138,178,220,0.45)] flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500">Failed to load hero section</p>
          <p className="text-gray-500 mt-2">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#FFD6C0] via-[#FFE97F] to-[#A3D9D6] relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Section */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium shadow">
              <Star className="w-4 h-4 text-yellow-500" />
              Certified Vedic Astrologer
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Unlock Your </span>
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Cosmic
              </span>
              <span className="text-gray-900"> Destiny</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Discover the ancient wisdom of Vedic astrology through personalized readings,
              cosmic guidance, and spiritual insights that illuminate your life's journey.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white">
                <Calendar className="w-5 h-5 mr-2" />
                Book Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 border border-purple-900 text-gray-900 bg-white bg-gradient-to-r via-yellow-100"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-700 rounded-sm"></div>
                  <span className="ml-2 text-purple-700 font-bold text-xl sm:text-2xl">1B+</span>
                </div>
                <p className="text-sm text-gray-900 font-bold">Followers social media</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-700 rounded-sm"></div>
                  <span className="ml-2 text-purple-700 font-bold text-xl sm:text-2xl">800k</span>
                </div>
                <p className="text-sm text-gray-900 font-bold">Registration booked</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-purple-700 rounded-sm"></div>
                  <span className="ml-2 text-purple-700 font-bold text-xl sm:text-2xl">25y</span>
                </div>
                <p className="text-sm text-gray-900 font-bold">Years of experience</p>
              </div>
            </div>
          </div>

          {/* Right Section - Profile with ellipse & diagonal icons */}
          <div className="relative flex justify-center lg:justify-end items-center">
            <div className="relative w-56 h-72 sm:w-72 sm:h-96 flex items-center justify-center">
              {/* Ellipse border */}
              <div className="absolute inset-0 rounded-[50%/40%] border-2 border-purple-400"></div>

              {/* Profile Image inside ellipse */}
              <Image
                src="/Image.png"
                alt="profile image"
                width={400}
                height={350}
                className="w-48 h-60 sm:w-64 sm:h-80 object-cover p-4 sm:p-6"
              />

              {/* Diagonal Icons */}
              <div className="absolute top-3 left-3 sm:top-5 sm:left-5">
                <Image src="/Star.png" alt="star icon" width={40} height={40} />
              </div>

              <div className="absolute top-3 right-3 sm:top-5 sm:right-5">
                <Image src="/Ab.png" alt="soft star icon" width={45} height={45} />
              </div>

              <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5">
                <Image src="/At.png" alt="ab icon" width={40} height={40} />
              </div>

              <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5">
                <Image src="/SoftStar.png" alt="at icon" width={40} height={40} />
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300">
            <div className="mx-auto mb-4 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-300 shadow-lg">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">Birth Chart Analysis</h3>
            <p className="text-sm text-gray-500 mt-2">
              Complete personality analysis and life path guidance through your cosmic blueprint
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300">
            <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300 shadow-lg">
              <Gem className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">Gemstone Therapy</h3>
            <p className="text-sm text-gray-500 mt-2">
              Personalized gemstone recommendations to enhance positive energies and well-being
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300">
            <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-300 to-green-100 shadow-lg">
              <Home className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="font-semibold text-gray-900 text-lg">Vastu Consultation</h3>
            <p className="text-sm text-gray-500 mt-2">
              Harmonize your living spaces with ancient principles for prosperity and peace
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
