import React from "react";
import FirstSection from "./FirstSection";
import TrendingNowandBranding from "./TrendingNowandBranding";
import WhyUS from "./WhyUS";
import OutLocalExperts from "./OurLocalExperts";
import Image from "./Image";
import OurDestination from "./OurDestination";
import JoinUs from "./JoinUs";
import ScrollTopArrowButton from "./ScrollTopArrowButton";

export default function Main() {
  return (
    <main>
      <ScrollTopArrowButton />
      <FirstSection />
      <TrendingNowandBranding heading="Trending now" />
      <TrendingNowandBranding heading="Brand new trips" />
      <WhyUS />
      <OutLocalExperts />
      <Image />
      <TrendingNowandBranding heading="Europe" />
      <TrendingNowandBranding heading="Brand new trips" />
      <OurDestination />
      <JoinUs />
    </main>
  );
}
