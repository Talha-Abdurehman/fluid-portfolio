import React, { useEffect, useRef } from "react";

const Loading = () => {
  const loaderRef = useRef();

  useEffect(() => {
    console.log(loaderRef.current);
  }, []);

  return (
    <div
      ref={loaderRef}
      className="bg-black text-primary text-4xl w-full h-full"
    >
      {loaderRef.current}
    </div>
  );
};

export default Loading;
