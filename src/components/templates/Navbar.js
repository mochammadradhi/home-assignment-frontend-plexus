import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <section className="bg-[#3E5B5D]">
      <div className="max-w-[1200px]  mx-auto">
        <h1 className="p-5 my-[6px] float-left fontTitle font-semibold text-lg ">
          DESINTE`
        </h1>
        <nav className="flex justify-center overflow-hidden backdrop-blur-lg">
          <Link
            activeClass="active"
            className="nav1 text-white p-5 my-[6px] relative"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            className="nav2 text-white p-5 my-[6px] relative"
            to="portofolio"
            spy={true}
            smooth={true}
            duration={500}
          >
            Portofolio
          </Link>
          <Link
            activeClass="active"
            className="nav3 text-white p-5 my-[6px] relative"
            to="client"
            spy={true}
            smooth={true}
            duration={500}
          >
            Client
          </Link>
          <Link
            activeClass="active"
            className="nav4 text-white p-5 my-[6px] relative"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            activeClass="active"
            className="nav5 text-white p-5 my-[6px] relative"
            to="ourteam"
            spy={true}
            smooth={true}
            duration={500}
          >
            Our Team
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
