import About from '@/sections/about'
import Hero from '@/sections/hero'
import Listings from '@/sections/listings'
import Testimonials from '@/sections/testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Listings />
      <Testimonials />
    </main>
  )
}
