import React from "react";
import { motion } from "framer-motion";
import renangImg from "../../assets/renang.jpg";
const RenangSection = () => {
  return (
    <section className="bg-white py-24 px-6 mt-40">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ekstrakurikuler Renang
        </motion.h2>
        <motion.p
          className="text-indigo-600 text-lg font-medium mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ekskul Wajib
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src={renangImg}
          alt="Kegiatan Renang"
          className="rounded-xl shadow-lg object-cover w-full h-80"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Kegiatan Rutin
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Latihan gaya dada dan gaya bebas setiap Ahad pagi</li>
            <li>Pengenalan teknik pernapasan dan keselamatan air</li>
            <li>Kegiatan renang di kolam pondok dengan pengawasan pelatih</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Pencapaian
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Mengusai teknik dasar renang</li>
            <li>Bisa menggunakan gaya dada dan gaya katak.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default RenangSection;