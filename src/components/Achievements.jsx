import { useState } from "react";
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
    },
    {
      title: "3rd Place – GDG SWE Project",
      description: "Taqyim platform ranked top 3 at GDG showcase.",
      image: gdgImg,
    },
    {
      title: "ECPC Qualifications Participation",
      description: "Competed in ECPC algorithmic problem-solving.",
      image: ecpcImg,
    },
  ];

  return (
    <section className="p-6 bg-white">
      <h2 className="text-2xl font-bold text-purple-700 mb-4">Achievements</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-6 w-max pb-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[300px] max-w-xs bg-gray-100 p-5 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{item.description}</p>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  onClick={() => setSelectedImage(item.image)}
                  className="mt-3 rounded object-contain h-32 w-full border cursor-pointer hover:opacity-80"
                />
              )}
            </div>
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
            <img
              src={selectedImage}
              alt="Achievement Detail"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
