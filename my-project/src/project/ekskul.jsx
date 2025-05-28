import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FutsalSection from "./components/Futsal";
import TaekwondoSection from "./components/Taekwondo";
import PanahanSection from "./components/Panahan";
import RenangSection from "./components/Renang";

function EkstrakurikulerProgress() {
  return (
    <div>
      <Hero
        title="Progres Ekstrakurikuler Siswa"
        description="Ikuti perkembangan ekstrakurikuler siswa seperti futsal, taekwondo, panahan, dan renang sepanjang tahun."
      />
      <RenangSection />
      <TaekwondoSection />
      <PanahanSection />
      <FutsalSection />
    </div>
  );
}

export default EkstrakurikulerProgress;