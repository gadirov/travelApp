import React from 'react'
import DestinationFirstSection from './DestinationFirstSection'
import DestionationSecondSection from './DestionationSecondSection'
import TopDestination from './TopDestination'
import DestinationImageSection from './DestinationImageSection'
import DestinationJoinUsPart from './DestinationJoinUsPart'
import ScrollTopArrowButton from '../HomePage/ScrollTopArrowButton'
export default function MainDestination() {
  return (
    <main>
        <DestinationFirstSection />
        < ScrollTopArrowButton />
        < DestionationSecondSection />
        < TopDestination />
        <DestinationImageSection />
        < DestinationJoinUsPart />
    </main>
  )
}
