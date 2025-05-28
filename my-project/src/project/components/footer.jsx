import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-purple-100 pt-16 pb-10 px-4 sm:px-10 mt-20">
      <motion.div
        className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 sm:grid-cols-2 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">
            Muhammad Hafidz Aditya Zaini
          </h2>
          <p className="text-sm text-purple-200">
            Seorang siswa yang bersekolah di SMA Plus Abu Dzar
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Navigasi</h3>
          <div className="flex flex-col items-center md:items-start space-y-3">
            <a
              href="/"
              className="flex items-center gap-2 hover:text-white transition font-medium"
            >
              <ArrowRight size={16} />
              Home
            </a>
            <a
              href="/academic"
              className="flex items-center gap-2 hover:text-white transition font-medium"
            >
              <ArrowRight size={16} />
              Akademik
            </a>
            <a
              href="/ekstrakurikuler"
              className="flex items-center gap-2 hover:text-white transition font-medium"
            >
              <ArrowRight size={16} />
              Ekstrakurikuler
            </a>
          </div>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Ikuti Kami</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-white transition">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter size={22} />
            </a>
            <a
              href="mailto:info@zukhrufulqauli.sch.id"
              className="hover:text-white transition"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Copyright */}
      <div className="border-t border-grey-600 mt-12 pt-6 text-center text-sm text-grey-200">
        &copy; {new Date().getFullYear()} Muhammad Hafidz Aditya Zaini. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;