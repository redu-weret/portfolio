import Nav from "./Nav";
import { Hero, About } from "./ProfileSections";
import Skills from "./Skills";
import { ProjectGallery } from "./Projects";
import { ExperienceAndCerts, Contact } from "./ExperienceContact";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      {/* Accessibility: skip straight to the content */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-navy-900"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectGallery />
        <ExperienceAndCerts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
