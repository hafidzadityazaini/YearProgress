import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TahfizhSection from "./components/Tahfizh";
import ITSection from "./components/IT";
import DiniyyahSection from "./components/Diniyyah";
import PelajaranUmumSection from "./components/Umum";

function AcademicProgress() {
  return (
    <div>
      <Hero
        title="Progres Akademik Siswa"
        description="Ikuti perkembangan akademik seperti hafalan, kajian diniyyah, dan proyek IT sepanjang tahun."
      />
      <TahfizhSection />
      <ITSection />
      <DiniyyahSection />
      <PelajaranUmumSection />
    </div>
  );
}

export default AcademicProgress;