import { Star, User2, Globe } from "lucide-react"

export default function CosmicGuide() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">

          {/* Top Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-medium text-sm mb-6 shadow-sm">
            <Star className="w-4 h-4 mr-2 text-purple-500" />
            Master Rajesh Sharma - Vedic Astrologer & Spiritual Guide
          </div>

          {/* Title */}
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-black">
            Meet Your{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
              Cosmic Guide
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            With over 15 years of experience in Vedic Astrology, I have dedicated my life 
            to helping individuals discover their true potential through the ancient wisdom 
            of the stars. My journey began in the sacred temples of India, where I studied 
            under renowned masters of astrological sciences.
          </p>

          {/* Badges Row */}
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            <span className="px-3 py-1 rounded-md bg-purple-100 text-purple-700 text-sm font-medium">
              15+ Years Experience
            </span>
            <span className="px-3 py-1 rounded-md bg-blue-100 text-blue-700 text-sm font-medium">
              Certified Astrologer
            </span>
            <span className="px-3 py-1 rounded-md bg-yellow-100 text-yellow-700 text-sm font-medium">
              Vedic Expert
            </span>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-8">
            {/* Clients */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <User2 className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-purple-600">2000+</div>
              <p className="text-sm text-gray-600">Happy Clients Guided</p>
            </div>

            {/* Rating */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-600">4.9★</div>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>

            {/* Countries */}
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-yellow-600">25+</div>
              <p className="text-sm text-gray-600">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
