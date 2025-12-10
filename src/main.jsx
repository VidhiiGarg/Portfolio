import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AccentProvider } from "@/context/AccentContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/sections/Hero";
import { CTABanner } from "@/components/misc/CTABanner";
import { AnimatedBackground } from "@/components/misc/AnimatedBackground";

const About = lazy(() => import("@/sections/About").then((m) => ({ default: m.About })));
const Skills = lazy(() => import("@/sections/Skills").then((m) => ({ default: m.Skills })));
const Projects = lazy(() => import("@/sections/Projects").then((m) => ({ default: m.Projects })));
const Experience = lazy(() => import("@/sections/Experience").then((m) => ({ default: m.Experience })));
const Services = lazy(() => import("@/sections/Services").then((m) => ({ default: m.Services })));
const Blog = lazy(() => import("@/sections/Blog").then((m) => ({ default: m.Blog })));
const Contact = lazy(() => import("@/sections/Contact").then((m) => ({ default: m.Contact })));

function App() {
  return (
    <AccentProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-black text-foreground">
        <AnimatedBackground />
        <Navbar />
        <main className="relative" style={{ zIndex: 1 }}>
          <Hero />
          <Suspense fallback={<div className="section-container py-20 text-sm text-slate-400">Loading...</div>}>
            <About />
            <Skills />
            <Projects />
            <CTABanner />
            <Experience />
            <Services />
            <Blog />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </AccentProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
