import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WebinarSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-100 via-orange-100 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          {/* Subtitle */}
          <p className="text-lg text-gray-800 mb-2 font-medium">
            Join Our Webinar
          </p>

          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
            Limited-<span className="">Time</span>{" "}
            <span className="text-blue-600">Offer!</span>
          </h2>

          {/* Description */}
          <p className="text-gray-700 mb-8">
            Get 'The Guide' now and enjoy a special one-month free access to our
            upcoming AI-scoring platform with over 5000 test questions. Act fast
            – this offer expires in{" "}
            <span className="font-semibold">[Countdown Timer]</span>
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-10 ">
            {[
              { value: "24", label: "Days" },
              { value: "06", label: "Hour" },
              { value: "22", label: "Minute" },
              { value: "59", label: "Second" }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-md px-6 py-4 text-center"
              >
                <p className="text-2xl font-bold text-blue-600">{item.value}</p>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Button Centered */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="text-lg px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg shadow-lg flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Visit Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
