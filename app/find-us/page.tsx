"use client";

import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
export default function FindUsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [state, handleSubmit] = useForm("mgvypdry");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <>
      {/* Banner */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/images/banner_findus.webp"
          alt="Contact Banner"
          fill
          className="object-cover"
          priority
        />
        {/* <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl font-serif font-bold"
          >
            Contact Us
          </motion.h1> */}
        {/* </div> */}
      </section>

      {/* Info Section */}
      <section ref={ref} className="bg-nature-cream py-16">
        <motion.div
          className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left: Info + Map */}
          <div>
            <h2 className="text-2xl font-serif mb-4">Contact Us</h2>
            <div className="space-y-3 text-nature-mahogany text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Joud Mrebine – North Lebanon</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+961 3 00 78 04</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>pia.abboud@hotmail.com</span>
              </div>
            </div>

            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.2129467450655!2d36.19866917566049!3d34.38388197301981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1522159279889abd%3A0xe162322d1a4c0b6!2sAl%20Jourd%20Nature%20Reserve!5e0!3m2!1sen!2slb!4v1716222350996!5m2!1sen!2slb"
                width="100%"
                height="250"
                loading="lazy"
                className="rounded-lg border border-gray-300"
              ></iframe>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h2 className="text-2xl font-serif mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  rows={5}
                  required
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button
                disabled={state.submitting}
                type="submit"
                className="bg-nature-forest hover:bg-nature-mahogany text-white px-6 py-3 rounded transition"
              >
                Send
              </button>
            </form>
          </div>
        </motion.div>
      </section>
    </>
  );
}
