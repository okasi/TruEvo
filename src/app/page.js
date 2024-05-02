"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const initializeParticles = () => {
      particlesJS("particles-js", {
        particles: {
          number: { value: 89, density: { enable: true, value_area: 987 } },
          color: { value: "#ffffff" },
          opacity: {
            value: 0.4,
          },
          size: {
            value: 3,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 144,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 5,
            direction: "none",
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: false },
            resize: true,
          },
          modes: {
            grab: { distance: 377, line_linked: { opacity: 1 } },
          },
        },
        retina_detect: true,
      });
    };

    // Check if particles.js has been loaded
    if (window.particlesJS) {
      initializeParticles();
    } else {
      // If not loaded yet, wait for the load event
      window.addEventListener("particles-js-load", initializeParticles);
    }

    // Cleanup
    return () => {
      window.removeEventListener("particles-js-load", initializeParticles);
    };
  }, []);

  return (
    <>
      <Script
        src={`${
          (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") ? "http" : "https"
        }://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js`}
        strategy="lazyOnload"
        onLoad={() => {
          window.dispatchEvent(new Event("particles-js-load"));
        }}
      />
      <div
        id="particles-js"
        className="bg-[#222222] h-full w-full fixed top-0 left-0 -z-10"
      ></div>
      <main className="flex justify-center h-screen items-center">
        <div className="bg-gradient-brand p-6 text-center min-w-fit max-w-96 mx-6 rounded-2xl -mt-12 md:-mt-[4.5rem]">
          <h1 className="text-white text-7xl md:text-8xl font-medium mx-8 my-2">
            TruEvo
          </h1>
        </div>
      </main>
    </>
  );
}
