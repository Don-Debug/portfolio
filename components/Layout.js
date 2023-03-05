import About from "./About";
import Navbar from "./Navbar";
import Projects from "./Projects";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div>
        <About />
        <Projects />
      </div>
    </>
  );
}
