import React from "react";
import { motion } from "framer-motion";
import studentPhoto from "../../assets/Profile.JPG";

const StudentProfile = () => {
  return (
    <section className="bg-white py-24 px-6 mt-32">
      <div className="max-w-7xl mx-auto">
        {/* Judul Section */}
        <motion.div
          className="text-center mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Data Profil Siswa
          </h1>
          <p className="text-gray-600 mt-4 text-lg md:text-xl">
            Informasi lengkap mengenai biodata siswa
          </p>
        </motion.div>

        {/* Konten Profil */}
        <motion.div
          className="grid md:grid-cols-2 gap-24 md:gap-32 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Foto Siswa */}
          <motion.div
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={studentPhoto}
              alt="Foto Siswa"
              className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg"
            />
          </motion.div>

          {/* Biodata */}
          <div className="text-gray-800 text-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Profil Siswa
            </h2>
            <ul className="space-y-3 leading-relaxed">
              <li>
                <strong>Nama:</strong> Muhammad Hafidz Aditya Zaini
              </li>
              <li>
                <strong>Kelas:</strong> X HAMZAH
              </li>
              <li>
                <strong>NIS:</strong> 0087535093
              </li>
              <li>
                <strong>Tanggal Lahir:</strong> 08 Desember 2008
              </li>
              <li>
                <strong>Alamat:</strong> Tangerang, KOMP.Garuda, Cipondoh Permai
              </li>
              <li>
                <strong>Ekstrakurikuler:</strong> Futsal, Tahfidz
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentProfile;