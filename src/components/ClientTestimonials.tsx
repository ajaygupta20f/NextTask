import { ArrowRight } from "lucide-react"
import Image from "next/image";

const clients = [
  {
    category: "Pottery",
    title: "Vases Family",
    image: "/f1a499a86e4f5bc7b8745abd2a6986066404a5a8.jpg"
  },
  {
    category: "Oil Painting",
    title: "Camel Portrait",
    image: "/561ea3aa03fac68588981dd12915013e9563f686.jpg"
  },
  {
    category: "Abstract Painting",
    title: "Euforia",
    image: "/72b827f934b6819f244da0a618c39d3a34bcf9c2.jpg"
  },
  {
    category: "Object Design",
    title: "Classic Watch",
    image: "/6c2bd6fd9a8d95be8f5f70e7521ce4a6b70e9240.jpg"
  },
  {
    category: "Sculpture",
    title: "White Angel",
    image: "/21249f1377a03e46ac9bdb5cc6710713bb49f4ee.jpg"
  }
]

export default function ClientTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Label */}
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-600 text-sm px-4 py-1 rounded-full mb-4">
            Client Testimonials
          </div>

          {/* Title */}
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-black">
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our astrological guidance has transformed lives across
            the globe, bringing clarity, purpose, and positive change to
            thousands of satisfied clients.
          </p>
        </div>

        {/* View All Link */}
        <div className="flex justify-start mb-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Client Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md group"
            >
              {/* Background Image */}
            
 <div className="w-full h-[280px] overflow-hidden rounded-lg relative">
  <Image
    src={client.image}
    alt={client.title}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-300"
  />
</div>

              {/* Overlay - TOP LEFT */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex flex-col justify-start p-4">
                <p className="text-sm text-gray-200">{client.category}</p>
                <h3 className="text-lg font-bold text-white">{client.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div> {/* ✅ closed container div */}
    </section>
  )
}
