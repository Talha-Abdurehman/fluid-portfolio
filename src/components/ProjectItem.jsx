import React from "react";

const ProjectItem = ({ id, project, date, categories, onHover, onLeave }) => {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="xl:flex bg-main cursor-pointer justify-between xl:items-center py-6 border-primary border-t-2"
    >
      <div className="xl:flex xl:gap-4">
        <h1 className="xl:text-4xl 2xl:text-6xl text-primary font-grotesk font-light">
          {id}
        </h1>
        <h1 className="xl:text-4xl 2xl:text-6xl text-primary font-grotesk font-semibold">
          {project}
        </h1>
      </div>

      <div className="xl:flex xl:gap-4">
        <h1 className="xl:text-lg 2xl:text-3xl text-primary font-inter">{`/${date}`}</h1>
        <div className="xl:flex xl:gap-4">
          {categories.map((category, index) => {
            return (
              <h1
                className="xl:text-lg 2xl:text-3xl text-primary font-inter"
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
