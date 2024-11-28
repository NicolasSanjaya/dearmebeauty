import React from "react";
import { FaLeaf } from "react-icons/fa";

type PropTypes = {
  logo: React.ReactNode;
  title: string;
};

const CircleBadge = (props: PropTypes) => {
  const { logo = <FaLeaf size={32} />, title = "Title" } = props;
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="p-6 rounded-full bg-gradient-to-tl from-pink to-softwhite bg-opacity-50 flex justify-center items-center flex-col text-white">
        {logo}
      </div>
      <h3 className="font-semibold text-2xl mt-2">{title}</h3>
    </div>
  );
};

export default CircleBadge;
