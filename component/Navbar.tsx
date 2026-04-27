"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/data/cartStore";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { items, removeItem, updateQuantity, getTotalPrice, getItemCount } =
    useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl py-4 shadow-sm"
            : "bg-background/0 backdrop-blur-0 py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold serif tracking-tight hover:opacity-70 transition-opacity"
          >
            Bonita
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/#reviews"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Reviews
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:text-primary transition-colors hidden sm:block"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:text-primary transition-colors relative"
            >
              <ShoppingBag size={20} />
              <AnimatePresence>
                {getItemCount() > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[10px] rounded-full flex items-center justify-center font-bold"
                  >
                    {getItemCount()}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <Link
              href="/shop"
              className="hidden md:block premium-button text-sm !px-6 !py-2"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay — outside nav to avoid stacking context issues */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-[350px] bg-background z-50 p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-2xl font-bold serif">Bonita</span>
                <button onClick={() => setIsOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                <Link
                  href="/"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Shop
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/#reviews"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Reviews
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-secondary">
                <Link
                  href="/shop"
                  onClick={() => setIsOpen(false)}
                  className="w-full premium-button block text-center"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Overlay — outside nav to avoid stacking context issues */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-background/95 z-[60] flex items-center justify-center p-6"
          >
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-10 right-10 p-2 hover:bg-secondary rounded-full transition-colors"
            >
              <X size={32} />
            </button>
            <div className="w-full max-w-2xl text-center">
              <h2 className="text-3xl serif mb-8">
                What can we help you find?
              </h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, ingredients..."
                  className="w-full bg-transparent border-b-2 border-foreground text-4xl py-4 focus:outline-none placeholder:text-gray-300"
                  autoFocus
                />
                <button className="absolute right-0 bottom-4 text-primary">
                  <Search size={32} />
                </button>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <p className="text-gray-400 w-full mb-2">Popular searches:</p>
                {["Serums", "Sunscreen", "Niacinamide", "Glow Kit"].map(
                  (term) => (
                    <button
                      key={term}
                      className="px-4 py-2 bg-secondary rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                    >
                      {term}
                    </button>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer — outside nav to avoid stacking context issues */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
              onClick={() => setIsCartOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-[450px] bg-background z-[70] flex flex-col shadow-2xl"
            >
              <div className="p-8 border-b border-secondary flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold serif">Your Bag</h2>
                  <p className="text-sm text-gray-500">
                    {getItemCount()} items
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-secondary rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-8 space-y-8">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-gray-400">
                      <ShoppingBag size={40} />
                    </div>
                    <p className="text-lg font-medium text-gray-600">
                      Your bag is empty
                    </p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="premium-button text-sm"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="flex gap-4 group">
                      <div className="relative w-24 h-32 bg-secondary rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-grow flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start gap-4">
                            <h3 className="font-bold tracking-tight text-base leading-tight">
                              {item.name}
                            </h3>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="text-sm text-gray-500">
                            {item.category}
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center border border-secondary rounded-lg">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-1 hover:text-primary transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm font-bold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-1 hover:text-primary transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <p className="font-bold whitespace-nowrap">
                            ${item.price * item.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {items.length > 0 && (
                <div className="p-8 border-t border-secondary space-y-4 bg-secondary/10">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-2xl font-bold">
                      ${getTotalPrice()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <button className="w-full premium-button py-4">
                    Checkout Now
                  </button>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="w-full text-sm font-bold text-gray-500 hover:text-foreground transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
