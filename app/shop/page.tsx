"use client";
import { products } from "@/data/products";
import ProductCard from "@/component/ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const categories = ["All Products", "Protection", "Treatment", "Brightening", "Cleanser"];

  const filteredProducts = activeCategory === "All Products" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <header className="mb-16">
          <h1 className="text-5xl lg:text-7xl serif mb-6">Our Collection</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Clean, science-backed formulas designed for visible results and long-lasting skin health. Find the perfect ritual for your unique skin.
          </p>
        </header>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-secondary pb-8">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? "bg-foreground text-background" 
                  : "bg-secondary/50 hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
