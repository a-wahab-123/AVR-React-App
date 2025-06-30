import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { sectionTitle } from "./ui/navigation-menu";

const technologies = [
  {
    name: "AWS",
    image: "https://placehold.co/60x60?text=AWS",
  },
  {
    name: "Laravel",
    image: "https://placehold.co/60x60?text=Laravel",
  },
  {
    name: "Next.js",
    image: "https://placehold.co/60x60?text=Next",
  },
  {
    name: "Flutter",
    image: "https://placehold.co/60x60?text=Flutter",
  },
  {
    name: "Node.js",
    image: "https://placehold.co/60x60?text=Node",
  },
  {
    name: "TypeScript",
    image: "https://placehold.co/60x60?text=TS",
  },
  {
    name: "Python",
    image: "https://placehold.co/60x60?text=Python",
  },
  {
    name: "React",
    image: "https://placehold.co/60x60?text=React",
  },
  {
    name: "Vue.js",
    image: "https://placehold.co/60x60?text=Vue",
  },
  {
    name: "MongoDB",
    image: "https://placehold.co/60x60?text=Mongo",
  },
  {
    name: "Express",
    image: "https://placehold.co/60x60?text=Express",
  },
  {
    name: "MySQL",
    image: "https://placehold.co/60x60?text=MySQL",
  },
];

export default function TechSlider() {
  return (
    <section className="min-h-screen justify-center py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900/30 relative overflow-hidden">

      <div className="text-center py-6 space-y-6 mb-3">
        <div className="flex flex-col">
          <div className="w-32 m-auto pill mb-6 bg-gradient-to-r from-blue-900 via-cyan-500 to-emerald-500 text-white animate-gradient-shift transition-all duration-300 cursor-pointer relative overflow-hidden animate-slide-in-up rounded-full px-6 py-2 inline-flex items-center text-sm">Tech Stack
          </div>
          <h1 className={`${sectionTitle()}`}>
            Technologies <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-500 bg-clip-text text-transparent">We Use</span>
          </h1>

        </div>
        <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
        Our team leverages cutting-edge technologies to deliver innovative solutions for our clients.
        </p>
      </div>
      <div className="p-5">
        <div className="mx-auto">
          <style>
            {`
          .tech-slider .swiper-slide {
            width: auto !important;
            height:auto !important;
            padding: 10px !important;
          }
          .tech-card {
            transition: transform 0.3s ease;
          }
          .tech-card:hover {
            transform: scale(1.05);
          }
          `}
          </style>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            className="tech-slider"
            breakpoints={{
              320: {
                spaceBetween: 15,
              },
              640: {
                spaceBetween: 20,
              },
              768: {
                spaceBetween: 25,
              },
              1024: {
                spaceBetween: 30,
              },
            }}
          >
            {technologies.map((tech, index) => (
              <SwiperSlide key={index}>
                <div className="z-2 tech-card bg-white rounded-xl p-6 shadow-lg flex flex-col items-center justify-center min-w-[140px] h-[140px]">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-15 h-15 mb-3 object-contain"
                  />
                  <h3 className="text-gray-800 font-semibold text-sm text-center">
                    {tech.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
            {/* Duplicate slides for seamless loop */}
            {technologies.map((tech, index) => (
              <SwiperSlide key={`duplicate-${index}`}>
                <div className="tech-card bg-white rounded-xl p-6 shadow-lg flex flex-col items-center justify-center min-w-[140px] h-[140px]">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-15 h-15 mb-3 object-contain"
                  />
                  <h3 className="text-gray-800 font-semibold text-sm text-center">
                    {tech.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
