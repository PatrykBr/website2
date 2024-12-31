import Hero from '../components/sections/Hero';
import DetailedFeatures from '../components/sections/DetailedFeatures';
import Reviews from '../components/sections/Reviews';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';

export default function Home() {
  return (
    <div>
      <Hero />
      <DetailedFeatures />
      <Reviews />
      <Pricing />
      <FAQ />
    </div>
  );
}