import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Grooming = () => {
  const navigate = useNavigate();

  const videos = [
    { id: 1, title: "Bathing Basics", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 2, title: "Nail Trimming", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 3, title: "Brushing Fur", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 4, title: "Ear Cleaning", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 5, title: "Teeth Care", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 6, title: "Styling Tips", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 7, title: "Coat Care", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 8, title: "Pet Massage", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-50 py-10 px-4 sm:px-6 lg:px-20 mt-4">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center mb-6 text-indigo-700 font-semibold hover:text-indigo-900 mt-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" /> Back
      </button>

      {/* Page Heading */}
      <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent">
        Grooming Videos
      </h1>

      {/* Video Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transform transition duration-300 border-t-4 border-indigo-500"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg text-gray-800">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grooming;