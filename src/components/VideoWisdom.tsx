import { Play, Clock, Users, Video } from "lucide-react"

const videos = [
  { title: "Understanding Your Birth Chart", duration: "15:32", views: "25K" },
  { title: "Understanding Your Birth Chart", duration: "12:45", views: "25K" },
  { title: "Understanding Your Birth Chart", duration: "18:20", views: "25K" },
  { title: "Understanding Your Birth Chart", duration: "14:15", views: "25K" },
  { title: "Understanding Your Birth Chart", duration: "16:30", views: "25K" },
  { title: "Understanding Your Birth Chart", duration: "13:25", views: "25K" }
]

export default function VideoWisdom() {
  return (
    <section className="py-20 bg-[#F5F7FF]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* Label */}
          <div className="inline-block bg-yellow-200 text-gray-800 text-xs px-3 py-1 rounded-full mb-4">
            ▶ Video Content
          </div>

          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#8A5CF6]">Video</span>{" "}
            <span className="bg-gradient-to-r from-[#8A5CF6] to-[#4E9CF6] bg-clip-text text-transparent">
              Wisdom
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base text-gray-500 max-w-2xl mx-auto mb-8">
            Explore the mysteries of astrology through our comprehensive video library,
            featuring detailed explanations and practical guidance for your spiritual journey.
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 bg-[#6B4EFF] text-white px-6 py-3 rounded-lg 
            font-medium shadow-md">
              <Video className="w-5 h-5" /> Trending Video
            </button>
            <button className="flex items-center gap-2 bg-[#6B4EFF] text-white px-6 py-3 rounded-lg 
            font-medium shadow-md">
              <Play className="w-5 h-5" /> Popular Video
            </button>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Thumbnail */}
              <div className="relative h-40 bg-gray-200 flex items-center justify-center">
                {/* Duration Badge */}
                <div className="absolute bottom-5 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-medium text-gray-800">{video.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mt-2 gap-4">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" /> {video.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {video.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
