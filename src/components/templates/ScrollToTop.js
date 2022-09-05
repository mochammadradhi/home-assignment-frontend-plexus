import React from "react";
import { CgArrowUpO } from "react-icons/cg";
import { Link } from "react-scroll";
const ScrollToTop = () => {
  return (
    <div className="fixed bottom-0 right-0 px-2">
      <Link
        activeClass="active"
        className="bottom p-5 my-[6px] flex flex-col items-center fontTitle font-semibold text-lg cursor-pointer "
        to="nav0"
        spy={true}
        smooth={true}
        duration={500}
      >
        <CgArrowUpO className="text-4xl mb-1" />
        <h2 className="text-sm ">Scroll up</h2>
      </Link>
    </div>
  );
};

export default ScrollToTop;
