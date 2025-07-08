import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  const projectData = [
    {
      id: "01",
      project: "PORTFOLIO I",
      date: 2025,
      categories: ["DEVELOPMENT", "DESIGN", "BRANDING"],
      imageURL:
        "https://res.cloudinary.com/drid0qpba/image/upload/v1751248617/image_o6bfdq.png",
    },
    {
      id: "02",
      project: "SUBHAN-TRADERS-POS",
      date: 2025,
      categories: ["DEVELOPMENT", "API", "DATABASE"],
      imageURL:
        "https://res.cloudinary.com/drid0qpba/image/upload/v1751247526/download_a3veaw.png",
    },
    {
      id: "03",
      project: "GLUME OS",
      date: "COMING SOON",
      categories: ["DEVELOPMENT", "API", "OS"],
      imageURL:
        "https://res.cloudinary.com/drid0qpba/image/upload/v1751247526/download_a3veaw.png",
    },
    {
      id: "04",
      project: "PORTFOLIO I",
      date: 2025,
      categories: ["DEVELOPMENT", "DESIGN", "BRANDING"],
      imageURL:
        "https://res.cloudinary.com/drid0qpba/image/upload/v1751248617/image_o6bfdq.png",
    },
    {
      id: "05",
      project: "SUBHAN-TRADERS-POS",
      date: 2025,
      categories: ["DEVELOPMENT", "API", "DATABASE"],
      imageURL:
        "https://res.cloudinary.com/drid0qpba/image/upload/v1751247526/download_a3veaw.png",
    },
    {
      id: "06",
      project: "GLUME OS",
      date: "COMING SOON",
      categories: ["DEVELOPMENT", "API", "OS"],
      imageURL:
        "https://res.cloudinary.com/drid0qpba/image/upload/v1751247526/download_a3veaw.png",
    },
    {
      id: "07",
      project: "SUBHAN-TRADERS-POS",
      date: 2025,
      categories: ["DEVELOPMENT", "API", "DATABASE"],
      imageURL:
        "https://res.cloudinary.com/drid0qpba/image/upload/v1751247526/download_a3veaw.png",
    },
    {
      id: "08",
      project: "GLUME OS",
      date: "COMING SOON",
      categories: ["DEVELOPMENT", "API", "OS"],
      imageURL:
        "https://res.cloudinary.com/drid0qpba/image/upload/v1751247526/download_a3veaw.png",
    },
  ];

  return (
    <div className="min-h-screen  bg-main px-4 py-12">
      <div className="sticky top-17 block bg-main w-full h-full max-sm:py-2 py-8 ">
        {" "}
        <h1 className="max-sm:text-3xl xl:text-7xl 2xl:text-9xl font-grotesk text-primary font-semibold">
          PROJECTS
        </h1>
      </div>
      <div className="flex flex-col">
        {projectData.map((item) => {
          return (
            <ProjectItem
              key={item.id}
              onHover={() => setHoveredImage(item.imageURL)}
              onLeave={() => setHoveredImage(null)}
              id={item.id}
              project={item.project}
              date={item.date}
              categories={item.categories}
            />
          );
        })}
      </div>

      <AnimatePresence>
        {hoveredImage && (
          <motion.img
            loading="lazy"
            src={hoveredImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{
              top: mousePos.y + 20,
              left: mousePos.x + 20,
            }}
            className="fixed z-50 w-60 h-32 pointer-events-none rounded-xl bg-primary p-2"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
