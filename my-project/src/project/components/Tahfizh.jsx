import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";
import { User, Users } from "lucide-react";

const hafalanAwal = 13;
const hafalanAkhir = 16;
const targetTahunan = 10;
const improvement = hafalanAkhir - hafalanAwal;
const improvementPercent = Math.min(
  ((improvement / targetTahunan) * 100).toFixed(0),
  100
);

const murajaahData = [
  { name: "Jan", juz: 4 },
  { name: "Feb", juz: 5 },
  { name: "Mar", juz: 3 },
  { name: "Apr", juz: 6 },
  { name: "Mei", juz: 5 },
  { name: "Jun", juz: 4 },
];

const TahfizhSection = () => {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 mt-40">
      <div className="max-w-6xl mx-auto">
        {/* Judul Utama */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Tahfizh
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-4 mb-[100px]">
            Perbandingan hafalan awal dan akhir tahun serta progres murajaah
          </p>
        </motion.div>

        {/* Info Guru dan Halaqah */}
        <motion.div
          className="mb-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-700 text-sm sm:text-base"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
            <User size={18} className="text-indigo-600" />
            <span className="font-medium">Ust. Muhandis Abdullah Alkaf</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
            <Users size={18} className="text-emerald-600" />
            <span className="font-medium">Halaqah Imam Mahfuzh At-Tarmasi</span>
          </div>
        </motion.div>

        {/* Hafalan Tahunan */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 sm:gap-12 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-3 text-gray-700">
              Hafalan Awal Tahun
            </h4>
            <div className="w-full bg-gray-200 rounded-full h-4 sm:h-5 mb-2">
              <div
                className="bg-indigo-600 h-full rounded-full text-white text-xs sm:text-sm text-center"
                style={{ width: `${(hafalanAwal / 30) * 100}%` }}
              >
                {hafalanAwal} Juz
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-3 text-gray-700">
              Hafalan Akhir Tahun
            </h4>
            <div className="w-full bg-gray-200 rounded-full h-4 sm:h-5 mb-2">
              <div
                className="bg-green-600 h-full rounded-full text-white text-xs sm:text-sm text-center"
                style={{ width: `${(hafalanAkhir / 30) * 100}%` }}
              >
                {hafalanAkhir} Juz
              </div>
            </div>
          </div>
        </motion.div>

        {/* Progress Bar Peningkatan */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700 text-center">
            Peningkatan Hafalan Tahun Ini
          </h4>
          <div className="w-full bg-gray-200 rounded-full h-10 sm:h-12 max-w-xl mx-auto">
            <div
              className="bg-yellow-500 h-full rounded-full text-white text-sm sm:text-base flex items-center justify-center px-2"
              style={{ width: `${improvementPercent}%` }}
            >
              {improvement} Juz ({improvementPercent}% dari target 10 juz)
            </div>
          </div>
        </motion.div>

        {/* Grafik Murajaah */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl sm:text-2xl font-bold text-gray-700 mb-6 text-center">
            Grafik Murajaah Bulanan (Juz)
          </h4>
          <div className="w-full h-72 sm:h-80 md:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={murajaahData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="juz" fill="#6366f1" radius={[6, 6, 0, 0]}>
                  <LabelList dataKey="juz" position="top" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Target ideal: ≥ 6 juz murajaah per bulan
          </p>
        </motion.div>

        {/* Catatan Pengampu */}
        <motion.div
          className="bg-gray-50 border-l-4 border-indigo-400 p-6 rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg sm:text-xl font-bold text-gray-700 mb-2">
            Catatan Pengampu
          </h4>
          <p className="text-gray-600 text-base leading-relaxed">
            Siswa menunjukkan peningkatan yang konsisten dalam hafalan dan
            murajaah. Perlu ditingkatkan lagi intensitas murajaah menjelang
            akhir tahun untuk menjaga kualitas hafalan yang sudah dicapai.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TahfizhSection;