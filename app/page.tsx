import { Hero } from "@/components/home/Hero"
import { FeaturedExcursions } from "@/components/home/FeaturedExcursions"
import { YachtShowcase } from "@/components/home/YachtShowcase"
import { FeaturedGroupTrips } from "@/components/home/FeaturedGroupTrips"
import { Testimonials } from "@/components/home/Testimonials"
import { FAQ } from "@/components/home/FAQ"
import { LeaveReview } from "@/components/home/LeaveReview"
import { CTABanner } from "@/components/home/CTABanner"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedExcursions />
      <YachtShowcase />
      <FeaturedGroupTrips />
      <Testimonials />
      <FAQ />
      <LeaveReview />
      <CTABanner />
    </main>
  )
}
