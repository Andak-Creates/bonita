"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      {/* NAVBAR */}
      <div className="py-2 px-[30px] md:px-20 md:py-5 flex flex-row justify-between items-center">
        <h1 className="font-semibold text-[25px]">Bonita</h1>

        {/* Desktop Links */}
        <div className="gap-10 hidden md:flex">
          <Link href="/">About</Link>
          <Link href="/">Products</Link>
          <Link href="/">Reviews</Link>
        </div>

        {/* Desktop Book Button */}
        <button className="hidden md:flex blackButton">Book Now</button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu size={28} />
        </button>
      </div>

      {/* SIDEBAR OVERLAY */}
      {/* Only visible when sidebar is open */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-white z-50 px-6 py-3
             transition-transform duration-300 ${
               isOpen ? "translate-x-0" : "translate-x-full"
             }`}
      >
        {/* Close button */}
        <button
          className="mb-6 w-full flex justify-end pr-2 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <FiX size={28} />
        </button>

        {/* Mobile Links */}
        <div className="flex flex-col space-y-6 text-lg">
          <Link href="/" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/" onClick={() => setIsOpen(false)}>
            Products
          </Link>
          <Link href="/" onClick={() => setIsOpen(false)}>
            Reviews
          </Link>

          <button className="mt-6 border py-2">Book Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
