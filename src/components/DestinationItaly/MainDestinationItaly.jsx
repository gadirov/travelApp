import React from 'react'
import ScrollTopArrowButton from '../HomePage/ScrollTopArrowButton'
import DestinationItalyFirstSection from './DestinationItalyFirstSection'
import DestinationItalyAviableTripSection from './DestinationItalyAviableTripSection'
import DestinationMapSection from './DestinationMapSection'
import DestinationAttractionsCard from './DestinationAttractionsCard'
import DestinationImagePart from './DestinationImagePart'
import DestinationWhyUsSection from './DestinationWhyUsSection'
import OurDestination from '../HomePage/OurDestination'
import JoinUs from '../HomePage/JoinUs'

export default function MainDestinationItaly() {
  return (
    <main>
    < ScrollTopArrowButton />
    <DestinationItalyFirstSection />
    <DestinationItalyAviableTripSection />
    <DestinationMapSection />
    <DestinationAttractionsCard />
    < DestinationImagePart />
    < DestinationWhyUsSection />
    < OurDestination />
    < JoinUs />
    </main>
  )
}
