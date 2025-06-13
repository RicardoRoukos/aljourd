"use client";

import { MessageCircle } from "lucide-react";

export default function BookNowCta() {
  return (
    <section className="bg-nature py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-nature-charcoal mb-4">
          Book directly on WhatsApp
        </h2>
        <a
          href="https://wa.me/9613007804"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-nature-charcoal font-medium text-lg px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <MessageCircle className="w-5 h-5" />
          Chat Now
        </a>
      </div>
    </section>
  );
}
