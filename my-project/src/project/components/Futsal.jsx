import React from "react";
import { motion } from "framer-motion";
import futsalImg from "../../assets/futsal.jpg";

const FutsalSection = () => {
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
          Ekstrakurikuler Futsal
        </motion.h2>
        <motion.p
          className="text-indigo-600 text-lg font-medium mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ekskul Pilihan
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src={futsalImg}
          alt="Kegiatan Futsal"
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
            <li>
              Latihan teknik dasar dan strategi permainan setiap Jumat sore
            </li>
            <li>Sparring antar kelas </li>
            <li>Pembinaan karakter melalui olahraga</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Pencapaian
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Menang dalam ujicoba antar sekolah </li>
            <li>Tembus tim utama tingkat SMA</li>
            <li>Tim terbaik dalam ajang classmeet pondok</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default FutsalSection;