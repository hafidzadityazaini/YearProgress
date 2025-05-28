import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StudentProfile from "./components/Profile";
import AcademicProgress from "./components/ShortAcademic";
import EkstrakurikulerProgress from "./components/ShortExtra";

function Home() {
  return (
    <div>
      <Hero
        title={
          <>
            Progress Tahunan <br /> Akademik & Ekstrakurikuler
          </>
        }
        description="Menyajikan progres tahunan proyek kegiatan ekstrakurikuler & akademik secara ringkas dan sederhana."
      />
      <StudentProfile />
      <AcademicProgress />
      <EkstrakurikulerProgress />
    </div>
  );
}

export default Home;