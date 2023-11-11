import React from 'react'
import ScrollTopArrowButton from '../HomePage/ScrollTopArrowButton'
import ContactFirstSection from './ContactFirstSection'
import ContactSecondSection from './ContactSecondSection'
import OurDestination from '../HomePage/OurDestination'
import JoinUs from '../HomePage/JoinUs'

export default function MainContact() {
  return (
    <main>
      <ScrollTopArrowButton />
      <ContactFirstSection />
      <ContactSecondSection />
      <OurDestination />
      <JoinUs />
    </main>
  );
}
