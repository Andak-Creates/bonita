"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl lg:text-7xl serif mb-8 leading-tight">
              Science Meets <span className="italic text-primary">Nature</span>.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Founded in 2024, Bonita was born out of a desire for transparency
              in the beauty industry. We believe that skincare shouldn&apos;t be
              about trends—it should be about your skin&apos;s unique biological
              needs.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Our formulas are developed by dermatologists and clinical
              researchers to ensure every drop delivers visible results without
              compromising on safety or sustainability.
            </p>
          </motion.div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/hero.png"
              alt="About Bonita"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section className="bg-foreground text-background rounded-[3rem] p-12 lg:p-24 text-center">
          <h2 className="text-4xl lg:text-5xl serif mb-12 italic">
            Our Commitment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-primary text-4xl font-bold mb-4">100%</h3>
              <p className="font-bold mb-2">Vegan & Cruelty-Free</p>
              <p className="text-gray-400">
                We never test on animals and use zero animal-derived
                ingredients.
              </p>
            </div>
            <div>
              <h3 className="text-primary text-4xl font-bold mb-4">Science</h3>
              <p className="font-bold mb-2">Backed by Research</p>
              <p className="text-gray-400">
                Clinically proven actives at concentrations that actually work.
              </p>
            </div>
            <div>
              <h3 className="text-primary text-4xl font-bold mb-4">Earth</h3>
              <p className="font-bold mb-2">Sustainable Packaging</p>
              <p className="text-gray-400">
                Our bottles are 100% recyclable glass with minimal plastic.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
