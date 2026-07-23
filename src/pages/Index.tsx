import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { LocationSelector } from "@/components/home/LocationSelector";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutTeaser />
      <LocationSelector />
      <FeaturedProjects />
      <CTASection />
    </Layout>
  );
};

export default Index;
