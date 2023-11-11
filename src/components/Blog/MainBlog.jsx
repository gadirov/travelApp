import React from 'react'
import ScrollTopArrowButton from '../HomePage/ScrollTopArrowButton'
import BlogFirstSection from './BlogFirstSection'
import BlogSecondSection from './BlogSecondSection'
import BlogCardsSectionFirstPart from './BlogCardsSectionFirstPart'
import BlogCardsSectionSecondPart from './BlogCardsSectionSecondPart'
import OurDestination from '..//HomePage/OurDestination'
import JoinUs from '..//HomePage/JoinUs'
export default function MainBlog() {
  return (
    <main>
    < ScrollTopArrowButton />
    < BlogFirstSection />
    < BlogSecondSection />
    < BlogCardsSectionFirstPart />
    < BlogCardsSectionSecondPart />
    < OurDestination />
    < JoinUs />
    </main>
  )
}
