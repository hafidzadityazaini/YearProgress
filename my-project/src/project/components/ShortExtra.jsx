import React from "react";
import { motion } from "framer-motion";

const ekskulData = [
  {
    category: "Futsal",
    title: "Latihan & Turnamen Futsal",
    description:
      "Progres siswa dalam latihan rutin dan partisipasi dalam turnamen futsal tingkat sekolah dan kota.",
    image: "/images/futsal.jpg",
  },
  {
    category: "Taekwondo",
    title: "Ujian Kenaikan Tingkat",
    description:
      "Dokumentasi kegiatan ujian sabuk dan keikutsertaan dalam kejuaraan taekwondo regional.",
    image: "/images/taekwondo.jpg",
  },
  {
    category: "Panahan",
    title: "Teknik & Ketepatan",
    description:
      "Pemantauan keterampilan panahan siswa dari teknik dasar hingga peningkatan akurasi.",
    image: "/images/panahan.jpg",
  },
  {
    category: "Renang",
    title: "Progres Gaya dan Ketahanan",
    description:
      "Progres siswa dalam menguasai berbagai gaya renang dan peningkatan daya tahan.",
    image: "/images/renang.jpg",
  },
];

const EkstrakurikulerProgress = () => {
  return (
    <section className="bg-gray-100 py-24 px-6 mt-40">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Progres Ekstrakurikuler
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg md:text-xl mt-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Perkembangan kegiatan ekstrakurikuler pilihan siswa
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {ekskulData.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <span className="text-sm uppercase text-indigo-600 font-semibold mb-2 block">
                {card.category}
              </span>
              <h5 className="mb-2 text-xl font-bold text-gray-900">
                {card.title}
              </h5>
              <p className="mb-4 text-gray-700">{card.description}</p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition"
              >
                Pelajari Lebih Lanjut
                <svg
                  className="w-4 h-4 ms-2 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href="#"
          className="inline-block px-6 py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg hover:bg-indigo-700 transition"
        >
          Pelajari Lebih Lanjut
        </a>
      </div>
    </section>
  );
};

export default EkstrakurikulerProgress;