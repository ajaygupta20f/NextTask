import { NextResponse } from "next/server"
import { HeroData } from "@/types/hero"

export async function GET(): Promise<NextResponse<HeroData>> {
  // Mock data - in production this would come from a database
  const heroData: HeroData = {
    title: "Unlock Your Cosmic Destiny",
    subtitle: "Book sessions with expert astrologers and discover your true path.",
    ctaText: "Book Now",
    ctaLink: "/book",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=face&auto=format",
    badges: [
      { label: "2000+", sublabel: "Happy Clients Guided", icon: "Star" },
      { label: "4.9★", sublabel: "Average Rating", icon: "Star" },
      { label: "25+", sublabel: "Countries Served", icon: "Star" },
    ],
  }

  return NextResponse.json(heroData)
}
