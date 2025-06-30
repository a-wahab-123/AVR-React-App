import { motion } from "framer-motion";
import {
  Brain,
  Globe,
  Laptop,
  Database,
  Files,
  Cpu,
} from "lucide-react";

import { sectionTitle } from "../components/ui/navigation-menu";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const Service = () => {
  const services = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />,
      title: "AI & Machine Learning",
      desc: "Custom AI models and machine learning solutions that provide predictive insights and automation for complex business challenges.",
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />,
      title: "Web Development",
      desc: "Modern, responsive web applications with stunning UI/UX design, built with the latest technologies for optimal performance.",
    },
    {
      icon: <Laptop className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />,
      title: "Software Development",
      desc: "Custom software applications that streamline operations, enhance productivity, and deliver exceptional user experiences.",
    },
    {
      icon: <Database className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />,
      title: "Database Management",
      desc: "Efficient database design and management to ensure your data is secure, optimized, and readily accessible for analytics.",
    },
    {
      icon: <Files className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />,
      title: "Cloud Solutions",
      desc: "Scalable cloud infrastructure and deployment strategies to keep your applications running smoothly and securely.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />,
      title: "Hardware Integration",
      desc: "Seamless integration between software and hardware systems, enabling smart solutions for complex technical challenges.",
    },
  ];

  return (
    <section className="min-h-screen justify-center py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900/30 relative overflow-hidden">
      <div className="text-center space-y-6 mb-3">
        <div className="flex flex-col">
          <div className="w-35 m-auto pill mb-6 bg-gradient-to-r from-blue-900 via-cyan-500 to-emerald-500 text-white animate-gradient-shift transition-all duration-300 cursor-pointer relative overflow-hidden animate-slide-in-up rounded-full px-6 py-2 inline-flex items-center text-sm">
            Our Solutions
          </div>
          <h1 className={`${sectionTitle()}`}>
            Advanced{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-500 bg-clip-text text-transparent">
              Tech Services
            </span>
          </h1>
        </div>

        <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
          From AI-powered applications to custom development, we provide end-to-end IT solutions tailored to transform your business with cutting-edge technology.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-6 text-white hover:shadow-xl hover:shadow-cyan-400/20 hover:border-cyan-400 transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-tr-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-500 opacity-30 blur-2xl pointer-events-none" />

            <div className="w-10 h-10 flex items-center justify-center bg-cyan-600/20 rounded-md mb-4 transition-all">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-slate-300 mb-4">{service.desc}</p>
            <a
              href="#"
              className="group transition-all duration-300 text-cyan-400 text-sm font-medium inline-flex items-center"
            >
              Learn more{" "}
              <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
