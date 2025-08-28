import { Heart, Briefcase, Star, Home, Gem, Clock, Sparkles } from "lucide-react"

const services = [
  {
    title: "Birth Chart Reading",
    description: "Complete natal chart analysis revealing your personality, strengths, and life path",
    color: "from-yellow-400 to-orange-300"
  },
  {
    title: "Love & Relationships",
    description: "Compatibility analysis and guidance for romantic relationships and marriage",
    color: "from-pink-400 to-rose-300",
    // icon: Heart
  },
  {
    title: "Career Guidance",
    description: "Professional path analysis and timing for career changes and opportunities",
    color: "from-blue-400 to-blue-200",
    // icon: Briefcase
  },
  {
    title: "Vedic Astrology",
    description: "Traditional Indian astrology with precise calculations and remedial measures",
    color: "from-purple-400 to-indigo-300",
    // icon: Star
  },
  {
    title: "Vastu Consultation",
    description: "Harmonizing your living and working spaces with cosmic energies",
    color: "from-green-400 to-emerald-300",
    // icon: Home
  },
  {
    title: "Gemstone Therapy",
    description: "Personalized gemstone recommendations for enhancing positive energies",
    color: "from-indigo-400 to-violet-300",
    // icon: Gem
  },
  {
    title: "Muhurat Selection",
    description: "Auspicious timing selection for important life events and ceremonies",
    color: "from-cyan-400 to-teal-300",
    // icon: Clock
  },
  {
    title: "Spiritual Guidance",
    description: "Meditation practices and spiritual development based on your cosmic blueprint",
    color: "from-yellow-400 to-amber-300",
    // icon: Sparkles
  }
]

export default function CosmicServices() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#FFD6C0] via-[#FFE97F] to-[#A3D9D6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* Label */}
          <div className="inline-block bg-purple-100 text-purple-600 text-sm font-medium px-4 py-1 rounded-full mb-4">
            Astrological Services
          </div>
          
          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-black">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
              Cosmic Services
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover a wide range of astrological services designed to illuminate your path, enhance your well-being, and guide you towards your highest potential.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
           
            return (
              <div key={index} className="bg-white rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto mb-4`}>
                 
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
