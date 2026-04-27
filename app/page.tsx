"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Check } from "lucide-react";
import ProductCard from "@/component/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="pt-32 md:pt-40">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Skincare Reimagined
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-8">
              Skincare That{" "}
              <span className="italic text-primary">Understands</span> Your
              Skin.
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg">
              Elevate your glow with clean, science-backed skincare.
              Cruelty-free, sustainable, and packed with antioxidants for skin
              that looks healthy at every age.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="premium-button flex items-center gap-2"
              >
                Shop Collection <ArrowRight size={18} />
              </Link>
              <Link href="/about" className="outline-button">
                Learn More
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-background bg-secondary overflow-hidden"
                  >
                    <Image
                      src={`https://i.pravatar.cc/150?u=${i}`}
                      alt="User"
                      width={48}
                      height={48}
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-lg">500+</p>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[30% 70% 70% 30% / 30% 30% 70% 70%] overflow-hidden shadow-2xl">
              <Image
                src="/images/hero.png"
                alt="Skincare Hero"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 glass-card p-6 max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <Star size={16} className="fill-accent text-accent" />
                <span className="font-bold">4.9/5</span>
              </div>
              <p className="text-sm font-medium italic">
                &quot;The best serum I&apos;ve ever used. My skin literally
                glows!&quot;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Best-Selling Section */}
      <section id="products" className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl lg:text-5xl mb-4">
                Best-Selling Skincare Essentials
              </h2>
              <p className="text-gray-600">
                Explore our most-loved products, formulated to deliver visible
                results and long-lasting health for your skin.
              </p>
            </div>
            <Link
              href="/shop"
              className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all"
            >
              View All Products <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-3xl overflow-hidden">
              <Image
                src="/images/sunscreen.png"
                alt="Why Choose Us"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl mb-8">Why Choose Bonita?</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Dermatologist Tested",
                  desc: "Every product is clinically tested to ensure effectiveness and safety.",
                },
                {
                  title: "Safe for Sensitive Skin",
                  desc: "Non-irritating formulas designed for even the most delicate skin types.",
                },
                {
                  title: "Clean & Non-Toxic",
                  desc: "Free from parabens, sulfates, and over 1,500 banned ingredients.",
                },
                {
                  title: "Cruelty-Free & Vegan",
                  desc: "We never test on animals and use only plant-based ingredients.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="reviews"
        className="py-24 bg-foreground text-background overflow-hidden"
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl lg:text-6xl mb-16 serif italic">
            &quot;Real Results. Real Skin.&quot;
          </h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl lg:text-3xl leading-relaxed mb-10"
            >
              &quot;My skin looks healthier and more radiant than ever.
              I&apos;ve received so many compliments on my glow, and my routine
              finally feels like a luxury ritual rather than a chore.&quot;
            </motion.div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-primary">
                <Image
                  src="https://i.pravatar.cc/150?u=jane"
                  alt="Jane"
                  width={80}
                  height={80}
                />
              </div>
              <p className="font-bold text-xl">Jane Doe</p>
              <p className="text-primary/80">Verified Customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Join the Glow Club
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                Subscribe to get exclusive offers, skincare tips, and first
                access to new product launches.
              </p>

              <AnimatePresence mode="wait">
                {!subscribed ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubscribe}
                    className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="flex-grow px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/20"
                    />
                    <button
                      type="submit"
                      className="px-10 py-4 bg-white text-primary rounded-full font-bold hover:bg-gray-100 transition-colors"
                    >
                      Join Now
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center text-white"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mb-4">
                      <Check size={32} />
                    </div>
                    <p className="text-2xl font-bold">Welcome to the Club!</p>
                    <p className="text-white/80">
                      Check your inbox for a special 10% off code.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-secondary text-center text-gray-500">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Bonita. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
