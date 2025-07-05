import React, { useState } from "react";

const ProjectItem = ({ id, project, date, categories, onHover, onLeave }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
    if (onHover) onHover(); // ✅ call it
  };

  const handleLeave = () => {
    setIsHovered(false);
    if (onLeave) onLeave(); // ✅ call it
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className={`${
        isHovered ? "border-primary" : "border-primary/50"
      } xl:flex bg-main cursor-pointer justify-between xl:items-center py-6 max-sm:py-2  border-b-2 transition-all duration-300`}
    >
      <div className="xl:flex xl:gap-4">
        <h1
          className={`${
            isHovered ? "text-primary" : "text-primary/50"
          } xl:text-4xl 2xl:text-6xl font-grotesk font-light transition-all duration-300`}
        >
          {id}
        </h1>
        <h1
          className={`${
            isHovered ? "text-primary" : "text-primary/50"
          } xl:text-4xl 2xl:text-6xl font-grotesk font-semibold transition-all duration-300`}
        >
          {project}
        </h1>
      </div>

      <div className="xl:flex xl:gap-4">
        <h1
          className={`${
            isHovered ? "text-primary" : "text-primary/50"
          } xl:text-lg 2xl:text-3xl  font-inter transition-all duration-300`}
        >{`/${date}`}</h1>
        <div className="xl:flex xl:gap-4">
          {categories.map((category, index) => {
            return (
              <h1
                className={`${
                  isHovered ? "text-primary" : "text-primary/50"
                } xl:text-lg 2xl:text-3xl  font-inter transition-all duration-300`}
                key={index}
              >
                {`/${category}`}
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
