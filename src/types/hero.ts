export interface HeroBadge {
  label: string
  sublabel: string
  icon: string
}

export interface HeroData {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  imageUrl: string
  badges: HeroBadge[]
}
