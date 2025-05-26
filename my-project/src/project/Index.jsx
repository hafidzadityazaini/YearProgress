import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StudentProfile from "./components/Profile";
import AcademicProgress from "./components/ShortAcademic";
import EkstrakurikulerProgress from "./components/ShortExtra";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <StudentProfile />
      <AcademicProgress />
      <EkstrakurikulerProgress />
    </div>
  );
}

export default App;