import CTASection from '@/reusable/CTA'
import Hero from '@/reusable/Hero'
import TestimonialsSection from '@/reusable/Testimonials'
import Why from '@/reusable/Why'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      {/* Hero Component */}
      <Hero />
      {/* Testimonials Section */}
      <TestimonialsSection />
      {/* Why Choose Us Component */}
      <Why />
      {/* CTA Section */}
      <CTASection />
    </div>
  )
}

export default HomePage