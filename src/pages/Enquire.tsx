import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { assetPath } from "@/lib/assets";

const Enquire = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", purpose: "", message: "" });
  const projectName = searchParams.get("project");

  useEffect(() => {
    if (!projectName) return;
    setFormData((prev) => {
      if (prev.message.trim().length > 0) return prev;
      return {
        ...prev,
        message: `Hi, I am enquiring for ${projectName}. Please share more details, pricing, and availability.`,
      };
    });
  }, [projectName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission for now - email integration will be added with Cloud
    setTimeout(() => {
      toast({
        title: "Enquiry Received",
        description: projectName
          ? `We'll get back to you shortly regarding ${projectName}.`
          : "We'll get back to you shortly.",
      });
      setFormData({ name: "", email: "", phone: "", purpose: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={assetPath("images/projects/stock-05.jpg")} alt="Enquire" onError={(e) => { e.currentTarget.src = assetPath("placeholder.svg"); }} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <span className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4 block">Get in Touch</span>
          <h1 className="font-display text-5xl md:text-7xl font-light">Make an <span className="italic text-primary">Enquiry</span></h1>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <AnimatedSection>
              <div className="bg-cream border border-border rounded-2xl p-6 md:p-8 shadow-premium">
                <h2 className="font-display text-4xl text-foreground mb-6">
                  Send Us a <span className="italic text-primary">Message</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-2 block">Name</label>
                    <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="border-border bg-background h-12" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-2 block">Email</label>
                    <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="border-border bg-background h-12" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-2 block">Contact Number</label>
                    <Input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="border-border bg-background h-12" placeholder="+91 90000 00000" />
                  </div>
                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-2 block">Purpose of Inquiry</label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full h-12 rounded-md border border-border bg-background px-3 font-body text-muted-foreground"
                    >
                      <option value="">Select a purpose</option>
                      <option value="site-visit">Site Visit</option>
                      <option value="pricing">Pricing Details</option>
                      <option value="availability">Unit Availability</option>
                      <option value="brochure">Project Brochure</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-2 block">Message</label>
                    <Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required className="border-border bg-background min-h-[150px]" placeholder="Tell us more about what you're looking for..." />
                  </div>
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-sm tracking-wider uppercase rounded-full">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-5">
                <div className="bg-cream border border-border rounded-2xl p-5 md:p-6 shadow-premium flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Phone</p>
                    <a href="#" className="font-display text-2xl text-foreground hover:text-primary transition-colors">
                      +91 90000 00000
                    </a>
                  </div>
                </div>

                <div className="bg-cream border border-border rounded-2xl p-5 md:p-6 shadow-premium flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Email</p>
                    <a href="mailto:info@aristonegroup.com" className="font-display text-2xl text-foreground hover:text-primary transition-colors">
                      info@aristonegroup.com
                    </a>
                  </div>
                </div>

                <div className="bg-cream border border-border rounded-2xl p-5 md:p-6 shadow-premium flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">Location</p>
                    <p className="font-display text-2xl text-foreground">
                      Bandra West, Mumbai
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Enquire;
