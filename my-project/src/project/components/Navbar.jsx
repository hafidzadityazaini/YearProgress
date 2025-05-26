import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/bulat..webp";

const Navbar = () => {
  return (
    <motion.nav
      className="bg-white shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Kiri: Ekstrakurikuler */}
        <div className="flex-[0.5] flex justify-end pr-4">
          <motion.a
            href="#"
            className="text-black text-xl font-semibold hover:text-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ekstrakurikuler
          </motion.a>
        </div>

        {/* Tengah: Logo Gambar Bulat */}
        <motion.div
          className="flex-shrink-0 flex justify-center"
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 rounded-full object-cover"
          />
        </motion.div>

        {/* Kanan: Akademik */}
        <div className="flex-[0.5] flex justify-start pl-4">
          <motion.a
            href="#"
            className="text-black text-xl font-semibold hover:text-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Akademik
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;