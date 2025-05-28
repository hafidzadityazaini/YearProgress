import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/Profile.JPG";

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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/ekstrakurikuler"
              className="text-black text-xl font-semibold hover:text-blue-600 transition duration-300"
            >
              Ekstrakurikuler
            </Link>
          </motion.div>
        </div>

        {/* Tengah: Logo Gambar Bulat (Link ke Home) */}
        <motion.div
          className="flex-shrink-0 flex justify-center"
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-14 h-14 rounded-full object-cover"
            />
          </Link>
        </motion.div>

        {/* Kanan: Akademik */}
        <div className="flex-[0.5] flex justify-start pl-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/academic"
              className="text-black text-xl font-semibold hover:text-blue-600 transition duration-300"
            >
              Akademik
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;