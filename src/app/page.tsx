import Hero from "@/components/Hero"
import CosmicGuide from "@/components/CosmicGuide"
import CosmicServices from "@/components/CosmicServices"
import VideoWisdom from "@/components/VideoWisdom"
import ClientTestimonials from "@/components/ClientTestimonials"
import WebinarSection from "@/components/WebinarSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <CosmicGuide />
      <CosmicServices />
      <VideoWisdom />
      <ClientTestimonials />
      <WebinarSection />
      <Footer />
    </main>
  )
}
