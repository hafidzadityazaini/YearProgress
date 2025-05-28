import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const diniyyahData = [
  {
    title: "Bahasa Arab",
    progress: 75,
    materi: [
      "Nahwu Dasar & Menengah",
      "Shorof",
      "Mufrodat Tematik",
      "Hiwar (Percakapan)",
    ],
    pengampu: "Ust. Hafizh At-Tohir, Lc.",
    catatan:
      "Santri sudah memahami struktur kalimat dan penggunaan mufrodat dalam konteks harian. Perlu penguatan di aspek nahwu dan sharaf'.",
  },
  {
    title: "Ilmu Syariah",
    progress: 65,
    materi: [
      "Aqidah Ahlus Sunnah",
      "Fiqih Ibadah",
      "ilmu faraidh",
      "Tafsir & Hadits",
    ],
    pengampu: "Ust. Hafizh At-Tohir, Lc.",
    catatan:
      "Pemahaman konsep dasar fiqih dan akidah cukup baik. Diperlukan diskusi tambahan pada tema faraidh.",
  },
  {
    title: "Ilmu Alat",
    progress: 43,
    materi: [
      "Ushul Fiqh Dasar",
      "Qowaid Fiqhiyyah",
      "Ilmu Balaghah",
      "Manthiq",
    ],
    pengampu: "Ust. Yahya Makmur, Lc.",
    catatan:
      "Santri mulai terbiasa dengan istilah-istilah ushul dan logika dasar. Proses berpikir kritis masih perlu dibimbing secara bertahap.",
  },
];

const DiniyyahSection = () => {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Diniyyah
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl mt-5 max-w-2xl mx-auto">
            Pemahaman santri terhadap pelajaran keislaman seperti Bahasa Arab,
            Ilmu Syariah, dan Ilmu Alat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {diniyyahData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                {item.title}
              </h3>

              {/* Nama Pengampu */}
              <div className="flex items-center gap-3 bg-gray-100 px-5 py-3 rounded-lg shadow-sm mb-6">
                <User size={20} className="text-indigo-600" />
                <span className="text-lg font-medium">{item.pengampu}</span>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-base font-medium text-gray-700 mb-2">
                  <span>Pemahaman</span>
                  <span>{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-5">
                  <div
                    className="bg-indigo-500 h-full rounded-full"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Materi */}
              <h4 className="text-base font-semibold text-gray-700 mb-3">
                Materi yang Dipelajari:
              </h4>
              <ul className="list-disc list-inside text-gray-800 text-base space-y-1">
                {item.materi.map((materi, idx) => (
                  <li key={idx}>{materi}</li>
                ))}
              </ul>

              {/* Catatan Pengampu */}
              <div className="mt-8 bg-white border-l-4 border-indigo-500 p-5 rounded-md shadow-sm">
                <h4 className="text-base font-bold text-gray-800 mb-2">
                  Catatan Pengampu
                </h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  {item.catatan}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiniyyahSection;