import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const umum = [
  {
    name: "IPS",
    progress: 85,
    materi: "Geografi, sejarah, dan sosiologi.",
    pengampu: "Ust. Ahmad Rifai Zebua, S.soS.",
    catatan:
      "Santri menunjukkan ketertarikan tinggi dalam diskusi dan mampu memahami konsep dasar sosiologi.",
  },
  {
    name: "IPA",
    progress: 78,
    materi: "Kimia, fisika, dan biologi.",
    pengampu: "Ust.Aswin, M.Pd.",
    catatan:
      "Pemahaman cukup baik, namun perlu penguatan dalam praktik dan observasi langsung.",
  },
  {
    name: "Bahasa Inggris",
    progress: 82,
    materi: "Daily conversation, grammar dasar, dan vocabulary.",
    pengampu: "Ust. Anjat, S.Pd.",
    catatan:
      "Kemampuan berbicara meningkat, disarankan latihan tambahan di listening.",
  },
  {
    name: "Bahasa Indonesia",
    progress: 90,
    materi: "Puisi, Biografi,dan  Anekdot.",
    pengampu: "Ust. Haidar, S.Pd.",
    catatan:
      "Santri sangat aktif dalam menulis dan mampu menganalisis teks dengan baik.",
  },
  {
    name: "Matematika",
    progress: 70,
    materi: "Persamaan linear, dan statistika.",
    pengampu: "Ust. Haidar, S.Si.",
    catatan:
      "Masih perlu penguatan pada pemahaman konsep dasar, terutama dalam aljabar.",
  },
];

const PelajaranUmumSection = () => {
  return (
    <section className="bg-gray-50 py-24 px-4 sm:px-6 mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Pelajaran Umum
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            Materi yang diajarkan dalam kurikulum pelajaran umum sebagai bagian
            penting pendidikan santri.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {umum.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800">{item.name}</h3>

              <div>
                <p className="text-gray-700 font-semibold mb-1">Materi:</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.materi}
                </p>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-gray-700">
                    Pemahaman
                  </span>
                  <span className="text-base text-gray-600">
                    {item.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-5">
                  <div
                    className="bg-indigo-500 h-full rounded-full transition-all"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-lg shadow-sm">
                <User size={20} className="text-indigo-600" />
                <span className="font-semibold text-gray-800">
                  {item.pengampu}
                </span>
              </div>

              <div>
                <p className="text-gray-700 font-semibold">Catatan Pengampu:</p>
                <p className="text-gray-600 text-base leading-relaxed">
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

export default PelajaranUmumSection;