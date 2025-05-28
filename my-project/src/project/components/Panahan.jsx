import React from "react";
import { motion } from "framer-motion";
import panahanImg from "../../assets/panahan.jpg";
const PanahanSection = () => {
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
          Ekstrakurikuler Panahan
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
          src={panahanImg}
          alt="Kegiatan Panahan"
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
            <li>Latihan teknik dasar dan pengenalan busur setiap Sabtu</li>
            <li>Latihan fokus dan kendali emosi melalui sesi memanah</li>
            <li>Penerapan sunnah Nabi melalui olahraga panahan</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Pencapaian
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Santri menguasai teknik dasar dan pengenalan busur melalui sesi
              memanah
            </li>
            <li>
              Santri menguasai teknik jarak 5m dan 10m melalui sesi memanah
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default PanahanSection;