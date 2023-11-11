import React from 'react'
import ScrollTopArrowButton from '../HomePage/ScrollTopArrowButton'
import AboutFirstSection from './AboutFirstSection'
import AboutSecondSection from './AboutSecondSection'
import WhyUS from '../HomePage/WhyUS'
import OurLocalExperts from '../HomePage/OurLocalExperts'
import OurDestination from '../HomePage/OurDestination'
import JoinUs from '../HomePage/JoinUs'

export default function MainAbout() {
  return (
        <main>
            < ScrollTopArrowButton />
            < AboutFirstSection />
            < AboutSecondSection />
            < WhyUS />
            < OurLocalExperts />
            < OurDestination />
            < JoinUs />
        </main>
  )
}
