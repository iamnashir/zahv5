import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import HowItWorks from '@/components/home/HowItWorks';
import LocationsSection from '@/components/home/LocationsSection';
import PartnersCTA from '@/components/home/PartnersCTA';
import Testimonials from '@/components/home/Testimonials';
import BlogTeaser from '@/components/home/BlogTeaser';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <FeaturedProperties />
      <WhyChooseUs />
      <HowItWorks />
      <LocationsSection />
      <PartnersCTA />
      <Testimonials />
      <BlogTeaser />
    </main>
  );
}
