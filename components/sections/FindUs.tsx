// components/sections/FindUs.tsx

import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FindUsProps {
  sectionRef: React.RefObject<HTMLElement>;
  scrollToSection: (id: string) => void;
}

const FindUs: React.FC<FindUsProps> = ({ sectionRef, scrollToSection }) => {
  return (
    <section
      id="find-us"
      ref={sectionRef}
      className="py-20 bg-nature-cream text-nature-charcoal"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-6">Find Us</h2>
        <div className="h-1 w-16 bg-nature-gold mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="text-nature-forest" />
              <span>Bcharre District, North Lebanon Mountains</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-nature-forest" />
              <span>+961 3 123 456</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-nature-forest" />
              <span>info@aljourd.com</span>
            </div>
            <div>
              <Button
                onClick={() => scrollToSection("hero")}
                className="btn-luxury mt-4"
              >
                Back to Top
              </Button>
            </div>
          </div>

          <div className="w-full h-80 bg-gray-300 rounded-lg">
            {/* Replace with actual map integration if needed */}
            <iframe
              title="Al Jourd Location"
              src="https://www.google.com/maps/embed?..."
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
