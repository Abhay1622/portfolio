import ContactUs from "./components/ContactUs";
import { Achievements } from "./components/Achievements";
import { Qualifications } from "./components/Qualifications";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import HomeDetails from "./components/HomeDetails";

export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased bg-grid-white/[0.2]">
      <HomeDetails />
      <Projects />
      <Qualifications />
      <Skills />
      <Achievements />
      <ContactUs />
    </main>
  );
}
