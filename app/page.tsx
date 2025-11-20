"use client";
import { useState } from "react";

export default function Home() {
  const categories = [
    { name: "Singers", image: "/singer1.jpg" },
    { name: "Dancers", image: "/dancer1.jpg" },
    { name: "Comedians", image: "/comedian1.jpg" }
  ];

  const photos = [
    { type: "round", src: "/singer1.jpg" },
    { type: "square", src: "/dancer1.jpg" },
    { type: "round", src: "/comedian1.jpg" },
    { type: "square", src: "/singer1.jpg" },
    { type: "square", src: "/dancer1.jpg" },
    { type: "square", src: "/comedian1.jpg" },
    { type: "square", src: "/singer1.jpg" },
    { type: "square", src: "/dancer1.jpg" },
  ];

  const videos = [
  { type: "square", src: "/singer1.jpg" },
  { type: "square", src: "/singer1.jpg" },
  { type: "square", src: "/singer1.jpg" },
  ];

  const [index, setIndex] = useState(0);
  const [pulse, setPulse] = useState(false);
  const [gradient, setGradient] = useState(false);
  const [activeTab, setActiveTab] = useState("photos");

  const [sliderIndex, setSliderIndex] = useState(0);

  const handleNext = () => {
    if (index === categories.length - 1) return;

    setPulse(true);
    setGradient(true);

    setTimeout(() => setIndex((prev) => prev + 1), 350);

    setTimeout(() => {
      setPulse(false);
      setGradient(false);
    }, 800);
  };

  return (
    <>

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="w-full min-h-screen bg-[#0B0B13] flex items-center justify-center px-6 md:px-16 py-20">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-[70%_30%] items-center">

          {/* LEFT SIDE */}
          <div className="relative flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start md:pl-24">

            {/* TEXT FOR SMALL SCREEN */}
            <h1 className="block md:hidden text-white text-5xl font-semibold mb-6">
              {categories[index].name}
            </h1>

            {/* CIRCLE */}
            <div className="relative cursor-pointer" onClick={handleNext}>
              <div
                className={`relative 
                  w-[260px] h-[260px]
                  sm:w-[350px] sm:h-[350px]
                  md:w-[600px] md:h-[600px]
                  rounded-full border-[10px] md:border-[14px] border-pink-500 overflow-hidden
                  transition-all duration-500 
                  ${pulse ? "scale-[1.08]" : "scale-100"}`}
              >
                <img
                  key={index}
                  src={categories[index].image}
                  className="w-full h-full object-cover rounded-full transition-all duration-500"
                />

                <div
                  className={`
                    absolute inset-0 rounded-full
                    bg-gradient-to-t from-pink-500/70 to-transparent
                    transition-all duration-[700ms] ease-out
                    ${gradient ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
                  `}
                ></div>
              </div>
            </div>

            {/* TEXT FOR DESKTOP */}
            <h1
              className={`
                hidden md:block
                absolute left-[-10px] top-1/2 -translate-y-1/2 
                text-white text-7xl font-semibold
                transition-all duration-500
                ${pulse ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}
              `}
            >
              {categories[index].name}
            </h1>
          </div>

          {/* RIGHT SECTION */}
          <div className="text-center md:text-left mt-10 md:mt-0">
            <h2 className="text-white text-4xl sm:text-5xl font-light leading-snug">
              Choose<br />
              from <span className="font-bold">100+<br />Categories</span>
            </h2>

            <button
              onClick={handleNext}
              className="mt-6 inline-block text-pink-400 hover:text-pink-300 text-2xl sm:text-3xl"
            >
              Explore all categories →
            </button>
          </div>
        </div>
      </section>

      {/* =====================  PHOTOS / VIDEOS SECTION  ===================== */}
    <section className="relative w-full py-20 bg-[#0B0B13] flex flex-col items-center overflow-hidden">

      {/* FULL ARC BACKGROUND */}
      <div className="
        absolute 
        top-[-260px] 
        left-1/2 
        -translate-x-1/2
        w-[150%] 
        h-[600px] 
        rounded-b-[100%] 
        bg-[#05050A] 
        opacity-60 
        blur-[90px]
        pointer-events-none
      "></div>

      {/* CONTENT WRAPPER */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center z-10">

        {/* TABS */}
        <div className="flex items-center space-x-4 bg-[#0d0d17] p-2 rounded-full shadow-xl mt-10">
          <button
            className={`px-10 py-3 rounded-full text-xl transition-all ${
              activeTab === "photos"
                ? "bg-white text-black shadow-md"
                : "text-white opacity-50"
            }`}
            onClick={() => setActiveTab("photos")}
          >
            Photos
          </button>

          <button
            className={`px-10 py-3 rounded-full text-xl transition-all ${
              activeTab === "videos"
                ? "bg-white text-black shadow-md"
                : "text-white opacity-50"
            }`}
            onClick={() => setActiveTab("videos")}
          >
            Videos
          </button>
        </div>

        {/* GRID SECTION */}
        <div className="mt-16 w-full">

          {/* ================= PHOTOS GRID ================= */}
          {activeTab === "photos" && (
            <div
              className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 
                gap-10 
                w-full
              "
            >
              {photos.map((item, idx) => (
                <div key={idx} className="flex justify-center">
                  <div
                    className={`
                      overflow-hidden shadow-xl 
                      ${item.type === "round"
                        ? "w-[220px] h-[220px] rounded-full"
                        : "w-[220px] h-[220px] rounded-2xl"}
                    `}
                  >
                    <img
                      src={item.src}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ================= VIDEOS GRID ================= */}
          {activeTab === "videos" && (
            <div
              className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-3 
                gap-12 
                w-full 
                place-items-center
              "
            >
              {videos.map((item, idx) => (
                <div key={idx} className="flex justify-center">
                  <div
                    className="
                      w-[280px] 
                      h-[380px] 
                      rounded-2xl 
                      overflow-hidden 
                      shadow-2xl 
                      bg-black
                    "
                  >
                    <img
                      src={item.src}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
        <div className="flex space-x-3 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`
                h-[6px] rounded-full transition-all duration-300
                ${sliderIndex === i 
                  ? "w-16 bg-white" 
                  : "w-10 bg-white/20"
                }
              `}
            />
          ))}
        </div>
      </div>

    </section>



    </>
  );
}
