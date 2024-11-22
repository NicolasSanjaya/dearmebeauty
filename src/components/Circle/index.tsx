import React from "react";

type CircleProps = {
  color?: string;
  className: string;
};

const Circle = (props: CircleProps) => {
  const { className, color = "bg-softpink" } = props;
  return (
    <div
      className={`w-72 h-72 rounded-full opacity-60 blur-lg ${className} ${color}`}
    ></div>
  );
};

export default Circle;
