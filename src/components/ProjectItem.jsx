import React from "react";

const ProjectItem = ({ id, project, date, categories, onHover, onLeave }) => {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="flex bg-black cursor-pointer justify-between items-center py-6 border-primary border-t-2"
    >
      <div className="flex gap-4">
        <h1 className="text-3xl text-primary font-inter font-semibold">{id}</h1>
        <h1 className="text-3xl text-primary font-inter font-semibold">
          {project}
        </h1>
      </div>

      <div className="flex gap-4">
        <h1 className="text-xl text-primary font-inter font-semibold">
          {`/${date}`}
        </h1>
        <div className="flex gap-4">
          {categories.map((category, index) => {
            return (
              <h1
                className="text-xl text-primary font-inter font-semibold"
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
