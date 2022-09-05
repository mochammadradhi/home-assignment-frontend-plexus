import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { SiAltiumdesigner } from "react-icons/si";
import { Link } from "react-scroll";
const Navbar = () => {
  const link = [
    {
      name: "Home",
    },
    {
      name: "Portofolio",
    },
    {
      name: "Client",
    },
    {
      name: "About",
    },
    {
      name: "Our Team",
    },
  ];
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <section className="bg-[#3E5B5D] shadow-md">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex tablet:flex-col tablet:items-center tablet:justify-between items-center justify-between  px-7 fontTitle">
          <div className="flex tablet:flex tablet:items-center tablet:justify-between">
            <Link
              activeClass="active"
              className="nav0 p-5 my-[6px] fontTitle font-semibold text-lg cursor-pointer text-white "
              to="nav0"
              spy={true}
              smooth={true}
              duration={500}
            >
              <div className="inline-flex fontTitle">
                <SiAltiumdesigner className="text-3xl" />
                <span>REEN DESIGN</span>
              </div>
            </Link>
            <button
              className="absolute top-[26.5px] right-8 hidden tablet:inline"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <HiX className="text-2xl text-white" />
              ) : (
                <HiMenu className="text-2xl text-white" />
              )}
            </button>
          </div>
          <ul
            className={`flex tablet:flex-col tablet:align-middle tablet:text-center tablet:justify-between p-5 my-[6px]  tablet:transition-all tablet:duration-500 tablet:ease-in ${
              navbarOpen
                ? "tablet:top-20 tablet:opacity-100 tablet:z-auto"
                : "tablet:top-[-490px] tablet:absolute tablet:z-[-1] "
            } opacity-100 `}
          >
            {link.map((data, index) => (
              <li key={data.name}>
                <Link
                  activeClass="active"
                  className={`nav${index} text-white p-4  cursor-pointer`}
                  to={data.name}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
