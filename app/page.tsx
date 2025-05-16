"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ArrowRight,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentBanner, setCurrentBanner] = useState(0);

  const bannerImages = [
    "/images/banner-1.jpg",
    "/images/banner-2.jpg",
    "/images/banner-3.jpg",
    "/images/banner-4.jpg",
  ];

  // Auto-rotate banner images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    camp: useRef<HTMLDivElement>(null),
    activities: useRef<HTMLDivElement>(null),
    events: useRef<HTMLDivElement>(null),
    findUs: useRef<HTMLDivElement>(null),
  };

  // Handle scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);

      // Determine active section
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(key);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const Section = ({ id, refKey, children, className = "" }) => {
    const controls = useAnimation();
    const inViewRef = useRef(null);
    const isInView = useInView(inViewRef, { once: true, amount: 0.2 }); // Set once: true to only animate once

    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [controls, isInView]);

    // Create a callback ref that sets both refs
    const setRefs = useCallback(
      (element) => {
        // Set the inViewRef (for animation)
        inViewRef.current = element;

        // Set the section ref (for navigation)
        if (sectionRefs[refKey] && element) {
          sectionRefs[refKey].current = element;
        }
      },
      [refKey]
    );

    return (
      <section id={id} ref={setRefs} className={className}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {children}
        </motion.div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-nature-cream text-nature-charcoal">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrollDirection === "up" || activeSection === "hero"
            ? "bg-transparent py-6"
            : "bg-nature-cream/90 backdrop-blur-sm py-4 shadow-md"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div
              className={`text-2xl font-serif font-bold tracking-wide ${
                activeSection === "hero" && scrollDirection !== "up"
                  ? "text-white"
                  : "text-nature-forest"
              }`}
            >
              AL JOURD
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: "About Us", id: "about" },
              { name: "Our Camp", id: "camp" },
              { name: "Ecotourism & Activities", id: "activities" },
              { name: "Events", id: "events" },
              { name: "Find Us", id: "find-us" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-medium tracking-wide transition-colors ${
                  activeSection === item.id.replace("-", "")
                    ? "text-nature-forest"
                    : activeSection === "hero" && scrollDirection !== "up"
                    ? "text-white hover:text-nature-sage"
                    : "text-nature-mahogany hover:text-nature-forest"
                }`}
              >
                {item.name}
                {activeSection === item.id.replace("-", "") && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 top-full h-[2px] w-full bg-nature-gold"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              activeSection === "hero" && scrollDirection !== "up"
                ? "text-white"
                : "text-nature-mahogany"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-nature-cream overflow-hidden"
            >
              <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
                {[
                  { name: "About Us", id: "about" },
                  { name: "Our Camp", id: "camp" },
                  { name: "Ecotourism & Activities", id: "activities" },
                  { name: "Events", id: "events" },
                  { name: "Find Us", id: "find-us" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="text-nature-mahogany hover:text-nature-forest font-medium text-lg text-left"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section
          ref={sectionRefs.hero}
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            {bannerImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentBanner === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`Al Jourd Mountains ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="container mx-auto px-4 z-10 mt-16">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-wide"
              >
                AL JOURD
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "6rem" }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="h-1 bg-nature-gold mb-6"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-white mb-8 max-w-lg font-light"
              >
                A unique camping experience in the heart of Lebanon's mountains.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Button
                  className="bg-nature-forest hover:bg-nature-mahogany text-white rounded-none px-8 py-6 text-lg transition-all duration-300 border-b-2 border-nature-gold"
                  onClick={() => scrollToSection("camp")}
                >
                  Explore Camp
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 rounded-none px-8 py-6 text-lg transition-all duration-300"
                  onClick={() => scrollToSection("find-us")}
                >
                  Find Us
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-col items-center"
            >
              <span className="text-white text-sm mb-2 font-light tracking-wider">
                Scroll Down
              </span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              >
                <ChevronDown className="h-6 w-6 text-white" />
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-10">
            <div className="flex flex-col space-y-6">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Instagram className="h-6 w-6 text-white hover:text-nature-gold transition-colors" />
                </motion.div>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Facebook className="h-6 w-6 text-white hover:text-nature-gold transition-colors" />
                </motion.div>
              </Link>
            </div>
          </div>
        </section>

        {/* Founder Short Section */}
        <Section
          id="founder-short"
          refKey="founderShort"
          className="py-16 bg-nature-cream"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 variants={fadeInUp} className="section-heading mb-6">
                OUR STORY
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="h-1 w-16 bg-nature-gold mx-auto mb-8"
              />
              <motion.p
                variants={fadeInUp}
                className="text-lg mb-8 text-nature-mahogany"
              >
                Founded with a passion for nature and community, Al Jourd was
                established to create a sanctuary where people can reconnect
                with the natural world while preserving the beauty of Lebanon's
                mountains.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Button
                  className="btn-luxury"
                  onClick={() => scrollToSection("about")}
                >
                  Learn More About Us
                </Button>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* Three Photos Section */}
        <Section
          id="featured"
          refKey="featured"
          className="py-16 bg-nature-sage"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-80 overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/images/camp.jpg"
                    alt="Our Camp"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-serif font-medium text-white">
                      Our Camp
                    </h3>
                  </div>
                </div>
                <p className="text-nature-mahogany mb-4">
                  Experience the perfect blend of rustic camping and modern
                  comfort at Al Jourd.
                </p>
                <Button
                  className="btn-luxury w-full"
                  onClick={() => scrollToSection("camp")}
                >
                  Explore Camp
                </Button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-80 overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/images/activities.jpg"
                    alt="Activities"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-serif font-medium text-white">
                      Activities
                    </h3>
                  </div>
                </div>
                <p className="text-nature-mahogany mb-4">
                  Immerse yourself in nature through our carefully curated
                  ecotourism activities.
                </p>
                <Button
                  className="btn-luxury w-full"
                  onClick={() => scrollToSection("activities")}
                >
                  Discover Activities
                </Button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-80 overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/images/food.jpg"
                    alt="Food & Dining"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-serif font-medium text-white">
                      Food & Dining
                    </h3>
                  </div>
                </div>
                <p className="text-nature-mahogany mb-4">
                  Enjoy delicious local cuisine prepared with fresh ingredients
                  from our garden.
                </p>
                <Button
                  className="btn-luxury w-full"
                  onClick={() => scrollToSection("camp")}
                >
                  Learn About Dining
                </Button>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* Amenities Icons Section */}
        <Section
          id="amenities"
          refKey="amenities"
          className="py-16 bg-nature-cream"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="section-heading mb-6 text-center"
            >
              CAMP AMENITIES
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="h-1 w-16 bg-nature-gold mx-auto mb-12"
            />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center text-center"
              >
                <div className="h-20 w-20 bg-nature-forest rounded-full flex items-center justify-center mb-4 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif font-medium mb-2">
                  Nature Lovers Welcome
                </h3>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center text-center"
              >
                <div className="h-20 w-20 bg-nature-forest rounded-full flex items-center justify-center mb-4 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                </div>
                <h3 className="font-serif font-medium mb-2">Dogs Allowed</h3>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center text-center"
              >
                <div className="h-20 w-20 bg-nature-forest rounded-full flex items-center justify-center mb-4 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                    />
                  </svg>
                </div>
                <h3 className="font-serif font-medium mb-2">WiFi Available</h3>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center text-center"
              >
                <div className="h-20 w-20 bg-nature-forest rounded-full flex items-center justify-center mb-4 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif font-medium mb-2">
                  Showers Available
                </h3>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center text-center"
              >
                <div className="h-20 w-20 bg-nature-forest rounded-full flex items-center justify-center mb-4 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif font-medium mb-2">Campfire Space</h3>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* About Section */}
        <Section id="about" refKey="about" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2 variants={fadeInUp} className="section-heading mb-6">
                  ABOUT US
                </motion.h2>
                <motion.div
                  variants={fadeInUp}
                  className="h-1 w-16 bg-nature-gold mb-8"
                />
                <motion.p
                  variants={fadeInUp}
                  className="text-lg mb-6 text-nature-mahogany"
                >
                  Founded with a passion for nature and community, Al Jourd was
                  established to create a sanctuary where people can reconnect
                  with the natural world while preserving the beauty of
                  Lebanon's mountains.
                </motion.p>
                <motion.p
                  variants={fadeInUp}
                  className="text-lg mb-8 text-nature-mahogany"
                >
                  Our founder envisioned a place that combines traditional
                  camping experiences with modern comforts, all while
                  maintaining a commitment to sustainability and environmental
                  protection.
                </motion.p>
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center space-x-4"
                >
                  <div className="h-14 w-14 rounded-full bg-nature-forest flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">01</span>
                  </div>
                  <p className="font-medium text-nature-charcoal">
                    Sustainable practices in all operations
                  </p>
                </motion.div>
                <div className="h-px w-full bg-nature-gold/30 my-4 ml-7" />
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center space-x-4"
                >
                  <div className="h-14 w-14 rounded-full bg-nature-forest flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">02</span>
                  </div>
                  <p className="font-medium text-nature-charcoal">
                    Supporting local communities and businesses
                  </p>
                </motion.div>
                <div className="h-px w-full bg-nature-gold/30 my-4 ml-7" />
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center space-x-4"
                >
                  <div className="h-14 w-14 rounded-full bg-nature-forest flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">03</span>
                  </div>
                  <p className="font-medium text-nature-charcoal">
                    Preserving Lebanon's natural heritage
                  </p>
                </motion.div>
              </div>
              <motion.div variants={fadeInUp} className="relative">
                <div className="relative h-[500px] w-full overflow-hidden shadow-xl">
                  <Image
                    src="/images/about-image.jpg"
                    alt="Al Jourd Founder"
                    fill
                    className="object-cover"
                  />
                </div>
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-nature-forest p-6 max-w-xs shadow-lg"
                >
                  <p className="text-white italic font-serif">
                    "We created Al Jourd as a place where nature and community
                    come together, where visitors can disconnect from the
                    digital world and reconnect with what truly matters."
                  </p>
                  <p className="text-white font-bold mt-4">
                    — Founder, Al Jourd
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* Camp Section */}
        <Section id="camp" refKey="camp" className="py-24 bg-nature-sage">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2 variants={fadeInUp} className="section-heading mb-6">
                OUR CAMP
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="h-1 w-16 bg-nature-gold mx-auto mb-8"
              />
              <motion.p
                variants={fadeInUp}
                className="text-lg text-nature-mahogany"
              >
                Experience the perfect blend of rustic camping and modern
                comfort at Al Jourd. Our facilities are designed to immerse you
                in nature without sacrificing convenience.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group bg-white shadow-lg"
              >
                <div className="relative h-80 overflow-hidden mb-6">
                  <Image
                    src="/images/standard-camp.jpg"
                    alt="Traditional Camping"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-serif font-medium text-white">
                      Traditional Camping
                    </h3>
                    <p className="text-white/80">From $20/night</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-nature-mahogany">
                    Bring your own tent or rent one of ours. Connect with nature
                    in its purest form while still enjoying access to our
                    community kitchen and facilities.
                  </p>
                  <Link
                    href="#camp"
                    className="inline-flex items-center text-nature-forest font-medium mt-4 group-hover:underline"
                  >
                    Learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group bg-white shadow-lg"
              >
                <div className="relative h-80 overflow-hidden mb-6">
                  <Image
                    src="/images/eco-dome.jpg"
                    alt="Eco Domes"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-serif font-medium text-white">
                      Eco Domes
                    </h3>
                    <p className="text-white/80">From $75/night</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-nature-mahogany">
                    Our signature geodesic domes offer a unique glamping
                    experience with comfortable beds, electricity, and panoramic
                    views of the surrounding mountains.
                  </p>
                  <Link
                    href="#camp"
                    className="inline-flex items-center text-nature-forest font-medium mt-4 group-hover:underline"
                  >
                    Learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group bg-white shadow-lg"
              >
                <div className="relative h-80 overflow-hidden mb-6">
                  <Image
                    src="/images/luxury-cabin.jpg"
                    alt="Community Spaces"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-serif font-medium text-white">
                      Luxury Cabins
                    </h3>
                    <p className="text-white/80">From $120/night</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-nature-mahogany">
                    For those seeking more comfort, our eco-friendly cabins
                    offer private bathrooms, kitchenettes, and spacious decks
                    with mountain views.
                  </p>
                  <Link
                    href="#camp"
                    className="inline-flex items-center text-nature-forest font-medium mt-4 group-hover:underline"
                  >
                    Learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-20 grid grid-cols-1 md:grid-cols-5 gap-6 items-center bg-white p-8 shadow-lg border-l-4 border-nature-gold"
            >
              <div className="md:col-span-3">
                <h3 className="text-2xl font-serif font-medium mb-6">
                  Community Spaces
                </h3>
                <p className="mb-6 text-nature-mahogany">
                  Our communal kitchen, dining area, and campfire spaces are
                  designed to bring people together and foster a sense of
                  community among our guests.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-nature-gold rounded-full" />
                    <span>Shared Kitchen</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-nature-gold rounded-full" />
                    <span>Dining Area</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-nature-gold rounded-full" />
                    <span>Campfire Circle</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-nature-gold rounded-full" />
                    <span>Lounge Space</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-nature-gold rounded-full" />
                    <span>Outdoor Showers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-nature-gold rounded-full" />
                    <span>Clean Restrooms</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2 mt-8 md:mt-0">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full btn-luxury py-6 text-lg">
                    Book Your Stay
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Activities Section */}
        <Section
          id="activities"
          refKey="activities"
          className="py-24 bg-nature-cream"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16">
              <div>
                <motion.h2 variants={fadeInUp} className="section-heading mb-6">
                  ECOTOURISM & ACTIVITIES
                </motion.h2>
                <motion.div
                  variants={fadeInUp}
                  className="h-1 w-16 bg-nature-gold mb-8"
                />
              </div>
              <motion.p
                variants={fadeInUp}
                className="text-lg max-w-xl text-nature-mahogany"
              >
                Immerse yourself in nature through our carefully curated
                activities that educate, inspire, and create lasting memories
                while respecting the environment.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <motion.div variants={fadeInUp} className="md:col-span-8">
                <div className="relative h-[600px] overflow-hidden group shadow-xl">
                  <Image
                    src="/images/hiking.jpg"
                    alt="Guided Hiking"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-2xl font-serif font-medium text-white mb-2">
                      Guided Hiking Trails
                    </h3>
                    <p className="text-white/90 mb-6 max-w-lg">
                      Explore Lebanon's beautiful mountains with our experienced
                      guides. We offer trails for all difficulty levels, from
                      beginner to advanced.
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="bg-white text-nature-forest hover:bg-white/90 rounded-none border-b-2 border-nature-gold">
                        View Trails
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <div className="md:col-span-4 flex flex-col space-y-8">
                <motion.div
                  variants={fadeInUp}
                  className="relative h-[290px] overflow-hidden group shadow-xl"
                >
                  <Image
                    src="/images/workshop.jpg"
                    alt="Eco Workshops"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-serif font-medium text-white mb-1">
                      Eco Workshops
                    </h3>
                    <Link
                      href="#activities"
                      className="text-white/90 hover:text-white flex items-center group"
                    >
                      Learn more{" "}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="relative h-[290px] overflow-hidden group shadow-xl"
                >
                  <Image
                    src="/images/activity-2.jpg"
                    alt="Stargazing"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-serif font-medium text-white mb-1">
                      Stargazing
                    </h3>
                    <Link
                      href="#activities"
                      className="text-white/90 hover:text-white flex items-center group"
                    >
                      Learn more{" "}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 shadow-lg border-t-2 border-nature-gold"
              >
                <h3 className="text-xl font-serif font-medium mb-4">
                  Wildlife Watching
                </h3>
                <p className="text-nature-mahogany mb-4">
                  Observe local wildlife in their natural habitat with our
                  specialized guides and equipment.
                </p>
                <Link
                  href="#activities"
                  className="inline-flex items-center text-nature-forest font-medium group"
                >
                  Learn more{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 shadow-lg border-t-2 border-nature-gold"
              >
                <h3 className="text-xl font-serif font-medium mb-4">
                  Culinary Experiences
                </h3>
                <p className="text-nature-mahogany mb-4">
                  Learn to cook traditional Lebanese dishes using
                  locally-sourced, organic ingredients.
                </p>
                <Link
                  href="#activities"
                  className="inline-flex items-center text-nature-forest font-medium group"
                >
                  Learn more{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 shadow-lg border-t-2 border-nature-gold"
              >
                <h3 className="text-xl font-serif font-medium mb-4">
                  Sustainability Tours
                </h3>
                <p className="text-nature-mahogany mb-4">
                  Discover how Al Jourd implements eco-friendly practices
                  throughout the camp.
                </p>
                <Link
                  href="#activities"
                  className="inline-flex items-center text-nature-forest font-medium group"
                >
                  Learn more{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* Events Section */}
        <Section id="events" refKey="events" className="py-24 bg-nature-sage">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2 variants={fadeInUp} className="section-heading mb-6">
                UPCOMING EVENTS
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="h-1 w-16 bg-nature-gold mx-auto mb-8"
              />
              <motion.p
                variants={fadeInUp}
                className="text-lg text-nature-mahogany"
              >
                Join us for special events throughout the year, from seasonal
                celebrations to educational workshops and community gatherings.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-nature-gold font-bold">
                      JUNE 15-17
                    </span>
                    <h3 className="text-2xl font-serif font-medium">
                      Summer Solstice Celebration
                    </h3>
                  </div>
                  <div className="h-16 w-16 rounded-full bg-nature-forest flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">15</span>
                  </div>
                </div>
                <p className="text-nature-mahogany mb-6">
                  Welcome the summer with our annual solstice celebration
                  featuring music, local food, and traditional ceremonies
                  honoring the longest day of the year.
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium">7:00 PM - 11:00 PM</span>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="outline" className="btn-luxury-outline">
                      Reserve
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-nature-gold font-bold">JULY 8</span>
                    <h3 className="text-2xl font-serif font-medium">
                      Astronomy Night
                    </h3>
                  </div>
                  <div className="h-16 w-16 rounded-full bg-nature-forest flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">08</span>
                  </div>
                </div>
                <p className="text-nature-mahogany mb-6">
                  Join our astronomy expert for a night of stargazing and
                  learning about the constellations visible from Lebanon's
                  mountains.
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium">9:00 PM - 12:00 AM</span>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="outline" className="btn-luxury-outline">
                      Reserve
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-nature-gold font-bold">JULY 22</span>
                    <h3 className="text-2xl font-serif font-medium">
                      Lebanese Cooking Workshop
                    </h3>
                  </div>
                  <div className="h-16 w-16 rounded-full bg-nature-forest flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">22</span>
                  </div>
                </div>
                <p className="text-nature-mahogany mb-6">
                  Learn to prepare traditional Lebanese dishes using fresh,
                  local ingredients harvested from our garden and nearby farms.
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium">11:00 AM - 2:00 PM</span>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="outline" className="btn-luxury-outline">
                      Reserve
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-8 shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-nature-gold font-bold">AUGUST 5</span>
                    <h3 className="text-2xl font-serif font-medium">
                      Sunrise Yoga Retreat
                    </h3>
                  </div>
                  <div className="h-16 w-16 rounded-full bg-nature-forest flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">05</span>
                  </div>
                </div>
                <p className="text-nature-mahogany mb-6">
                  Start your day with an invigorating yoga session as the sun
                  rises over the mountains, followed by a healthy breakfast.
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium">5:30 AM - 8:00 AM</span>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="outline" className="btn-luxury-outline">
                      Reserve
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="mt-12 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="btn-luxury px-8 py-6 text-lg">
                  View All Events
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Section>

        {/* Find Us Section */}
        <Section id="find-us" refKey="findUs" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <motion.h2 variants={fadeInUp} className="section-heading mb-6">
                  FIND US
                </motion.h2>
                <motion.div
                  variants={fadeInUp}
                  className="h-1 w-16 bg-nature-gold mb-8"
                />
                <motion.p
                  variants={fadeInUp}
                  className="text-lg mb-8 text-nature-mahogany"
                >
                  Al Jourd is located in the heart of Mount Lebanon, surrounded
                  by breathtaking natural beauty and just a short drive from
                  Beirut.
                </motion.p>

                <motion.div
                  variants={staggerContainer}
                  className="space-y-6 mb-8"
                >
                  <motion.div variants={fadeInUp} className="flex items-start">
                    <MapPin className="h-6 w-6 text-nature-forest mt-1 mr-4" />
                    <div>
                      <h3 className="font-serif font-medium mb-1">Address</h3>
                      <p className="text-nature-mahogany">
                        Al Jourd Eco Camp, Mount Lebanon, Lebanon
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex items-start">
                    <Phone className="h-6 w-6 text-nature-forest mt-1 mr-4" />
                    <div>
                      <h3 className="font-serif font-medium mb-1">Phone</h3>
                      <p className="text-nature-mahogany">+961 12 345 678</p>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex items-start">
                    <Mail className="h-6 w-6 text-nature-forest mt-1 mr-4" />
                    <div>
                      <h3 className="font-serif font-medium mb-1">Email</h3>
                      <p className="text-nature-mahogany">info@aljourd.com</p>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-4">
                  <h3 className="font-serif font-medium text-xl">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "#1a3a2a",
                          color: "white",
                        }}
                        className="h-12 w-12 bg-nature-sage transition-colors flex items-center justify-center"
                      >
                        <Instagram className="h-5 w-5" />
                      </motion.div>
                    </Link>
                    <Link
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "#1a3a2a",
                          color: "white",
                        }}
                        className="h-12 w-12 bg-nature-sage transition-colors flex items-center justify-center"
                      >
                        <Facebook className="h-5 w-5" />
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              </div>

              <motion.div
                variants={fadeInUp}
                className="relative h-[500px] overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/map-large.jpg"
                  alt="Al Jourd Location Map"
                  fill
                  className="object-cover"
                />
                <Link
                  href="https://g.co/kgs/sCuuR8Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 right-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="bg-white text-nature-forest hover:bg-white/90 rounded-none border-b-2 border-nature-gold">
                      Get Directions
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* Google Reviews Section */}
            <motion.div variants={fadeInUp} className="mt-16">
              <h3 className="text-2xl font-serif font-medium mb-6">
                WHAT OUR GUESTS SAY
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-nature-sage p-8 shadow-lg"
                >
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-nature-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic mb-4 text-nature-mahogany font-serif">
                    "An amazing camping experience! The location is
                    breathtaking, facilities are clean, and the staff is
                    incredibly friendly. We'll definitely be coming back!"
                  </p>
                  <p className="font-bold">— Sarah T.</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-nature-sage p-8 shadow-lg"
                >
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-nature-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic mb-4 text-nature-mahogany font-serif">
                    "The eco domes were a perfect blend of comfort and nature.
                    The activities were educational and fun, and the views were
                    absolutely spectacular."
                  </p>
                  <p className="font-bold">— Michael R.</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-nature-sage p-8 shadow-lg"
                >
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-nature-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic mb-4 text-nature-mahogany font-serif">
                    "I loved the sustainability focus at Al Jourd. It's rare to
                    find a place that truly practices what they preach when it
                    comes to eco-friendly tourism."
                  </p>
                  <p className="font-bold">— Layla K.</p>
                </motion.div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="https://g.co/kgs/sCuuR8Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-nature-forest font-medium hover:underline group"
                >
                  Read more reviews on Google{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-nature-mahogany text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-serif font-medium mb-6">AL JOURD</h2>
              <p className="text-gray-300 mb-8 max-w-md">
                Experience nature's beauty in our serene camping retreat in the
                heart of Lebanon's mountains. Al Jourd offers a unique blend of
                adventure, comfort, and sustainability.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, backgroundColor: "#c19a5b" }}
                    className="h-10 w-10 border border-white/30 transition-colors flex items-center justify-center"
                  >
                    <Instagram className="h-5 w-5" />
                  </motion.div>
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, backgroundColor: "#c19a5b" }}
                    className="h-10 w-10 border border-white/30 transition-colors flex items-center justify-center"
                  >
                    <Facebook className="h-5 w-5" />
                  </motion.div>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-serif font-medium mb-6">
                QUICK LINKS
              </h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-300 hover:text-white"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("camp")}
                    className="text-gray-300 hover:text-white"
                  >
                    Our Camp
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("activities")}
                    className="text-gray-300 hover:text-white"
                  >
                    Activities
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("events")}
                    className="text-gray-300 hover:text-white"
                  >
                    Events
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("find-us")}
                    className="text-gray-300 hover:text-white"
                  >
                    Find Us
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-serif font-medium mb-6">CONTACT</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-nature-gold mt-1 mr-3" />
                  <span className="text-gray-300">
                    Al Jourd Eco Camp, Mount Lebanon
                  </span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-nature-gold mt-1 mr-3" />
                  <span className="text-gray-300">+961 12 345 678</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-nature-gold mt-1 mr-3" />
                  <span className="text-gray-300">info@aljourd.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Al Jourd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
