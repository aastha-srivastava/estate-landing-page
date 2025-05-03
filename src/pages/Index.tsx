
import { testimonials } from '../data/testimonials';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import FeaturedProperties from '../components/home/FeaturedProperties';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProperties />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
    </Layout>
  );
};

export default Index;
