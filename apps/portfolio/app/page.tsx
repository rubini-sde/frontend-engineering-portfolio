import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const divider = (
  <div
    aria-hidden="true"
    style={{
      height: "1.5px",
      background: "var(--color-border)",
      margin: "2.5rem 0",
    }}
  />
);

export default function Home() {
  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh" }}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg"
        style={{ background: "var(--color-accent)", color: "#fff" }}
      >
        Skip to content
      </a>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 2rem" }}>
        <Header />
        <main id="main">
          <Hero />
          <AboutMe />
          {divider}
          <Experience />
          {divider}
          <TechStack />
          {divider}
          <Projects />
          {divider}
        </main>
        <Footer />
      </div>
    </div>
  );
}
