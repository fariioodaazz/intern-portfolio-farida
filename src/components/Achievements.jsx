import { useState } from "react";
import { motion } from "framer-motion";
import ugrfImg from "../assets/UGRF.jpg";
import gdgImg from "../assets/GDG.jpg";
import ecpcImg from "../assets/ECPC.jpg";

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState(null);

  const items = [
    {
      title: "1st Place – UGRF Project",
      description: "Pet Adoption Management System awarded best DB project.",
      image: ugrfImg,
      tag: "Team",
    },
    {
      title: "3rd Place – GDG SWE Project",
      description: "Taqyim platform ranked top 3 at GDG showcase.",
      image: gdgImg,
      tag: "Team",
    },
    {
      title: "ECPC Qualifications Participation",
      description: "Competed in ECPC algorithmic problem-solving.",
      image: ecpcImg,
      tag: "Team",
    },
  ];

  return (
    <section className="p-6 bg-background text-foreground">
      <h2 className="text-2xl font-bold text-primary mb-4 text-glow">Achievements</h2>
      <div className="overflow-x-auto scrollbar-thin">
        <div className="flex gap-6 w-max pb-2">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="min-w-[300px] max-w-xs bg-card p-5 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm mt-2">{item.description}</p>
              <span className="inline-block mt-2 px-2 py-1 text-xs bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                {item.tag}
              </span>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  onClick={() => setSelectedImage(item.image)}
                  className="mt-3 rounded object-contain h-32 w-full border cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-8 right-0 text-white text-3xl font-bold"
            >
              &times;
            </button>
            <motion.img
              src={selectedImage}
              alt="Achievement Detail"
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
