"use client";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Star,
  ShoppingBag,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Check,
} from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/data/cartStore";
import { useState } from "react";
import dynamic from "next/dynamic";

const PaystackButton = dynamic(() => import("@/component/PaystackButton"), {
  ssr: false,
});

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const product = products.find((p) => p.id === params.id);
  const addItem = useCartStore((state) => state.addItem);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="pt-32 pb-24 border">
      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-foreground text-background px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10 w-[90%] max-w-sm"
          >
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Check size={14} className="text-white" />
            </div>
            <p className="font-medium text-sm">
              {product.name} added to your bag!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 md:px-12">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-500 hover:text-foreground mb-12 transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="transition-transform group-hover:-translate-x-1"
          />{" "}
          Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:sticky md:top-32"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-secondary">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                  {product.category}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < product.rating
                        ? "fill-accent text-accent"
                        : "text-gray-300"
                    }
                  />
                ))}
                <span className="text-sm text-gray-500">
                  ({product.rating}.0 Rating from 150+ reviews)
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl serif leading-tight">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-primary">
                ${product.price}.00
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <PaystackButton
                amount={product.price}
                email="customer@example.com"
                className="flex-grow sm:flex-grow-0 premium-button !px-12 !py-5 flex items-center justify-center gap-3"
              >
                <ShoppingBag size={20} /> Buy It Now
              </PaystackButton>
              <button
                onClick={handleAddToCart}
                className="flex-grow sm:flex-grow-0 outline-button !px-12 hover:bg-foreground hover:text-background transition-all"
              >
                Add to Cart
              </button>
            </div>

            {/* Product Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-secondary">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-primary" size={24} />
                <span className="text-sm font-medium">
                  Safe for All Skin Types
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="text-primary" size={24} />
                <span className="text-sm font-medium">
                  Fast Visible Results
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary" size={24} />
                <span className="text-sm font-medium">
                  Dermatologist Tested
                </span>
              </div>
            </div>

            {/* Detailed Tabs */}
            <div className="space-y-8 pt-10">
              <div className="border-b border-secondary pb-4">
                <h3 className="text-xl font-bold mb-4">Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-secondary/50 rounded-full text-sm"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-b border-secondary pb-4">
                <h3 className="text-xl font-bold mb-4">How to Use</h3>
                <p className="text-gray-600 leading-relaxed">{product.usage}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
