import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { User } from "lucide-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BMIimg from "../../assets/bmicalc.png";
import Financeimg from "../../assets/Finance.png";
import Commerceimg from "../../assets/commerce.png";

const materi = [
  { name: "Git", progress: 90 },
  { name: "React", progress: 80 },
  { name: "Tailwind", progress: 85 },
  { name: "JavaScript", progress: 75 },
];

const project = [
  {
    title: "Website BMI Calculator Sederhana",
    image: BMIimg,
    link: "https://bmicalculating.netlify.app/",
  },
  {
    title: "Website E-Commerce Sederhana",
    image: Commerceimg,
    link: "https://tzuwiing.vercel.app",
  },
  {
    title: "Website Finance Tracker Sederhana ",
    image: Financeimg,
    link: "https://tzunance.netlify.app/",
  },
];

const ItSection = () => {
  return (
    <section className="bg-gray-50 py-24 px-4 sm:px-6 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Judul Section */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            IT & Programming
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-4 mb-[100px] max-w-2xl mx-auto">
            Materi yang dipelajari dan proyek yang dikembangkan oleh santri di
            bidang teknologi.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
              <User size={18} className="text-indigo-600" />
              <span className="font-medium">Ust. Reza Berlyva</span>
            </div>
          </div>
        </motion.div>

        {/* Materi dan Progres */}
        <motion.div
          className="mb-20 mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-8 text-center">
            Pemahaman Materi
          </h4>
          <div className="grid md:grid-cols-2 gap-8">
            {materi.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-gray-700">
                    {item.name}
                  </span>
                  <span className="text-sm text-gray-600">
                    {item.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-500 h-full rounded-full transition-all"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Carousel Proyek */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-10 text-center">
            Proyek Santri
          </h4>

          <div className="relative bg-gradient-to-br from-indigo-50 via-white to-blue-50 rounded-xl shadow-lg px-6 py-10">
            <Carousel
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              infiniteLoop
              autoPlay
              useKeyboardArrows
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100 transition"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100 transition"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                )
              }
            >
              {project.map((project, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-4 px-4 py-6"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-[1.02] duration-300"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-xl max-h-[300px] object-contain mx-auto shadow-md"
                    />
                  </a>
                  <p className="text-center text-lg font-semibold text-gray-800 mt-4">
                    {project.title}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </motion.div>

        {/* Catatan Pengampu */}
        <motion.div
          className="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg sm:text-xl font-bold text-gray-700 mb-2">
            Catatan Pengampu
          </h4>
          <p className="text-gray-600 text-base leading-relaxed">
            Santri mampu memahami konsep dasar pemrograman dengan baik. Perlu
            penambahan latihan mandiri untuk memperkuat kemampuan debugging dan
            kerja tim dalam proyek kelompok.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ItSection;