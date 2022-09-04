import { FaFacebook, FaSlack, FaWhatsapp, FaPinterestP } from "react-icons/fa";
import { Navbar } from "../../templates";
import { Pannellum } from "pannellum-react";

import myImage from "./../../../assets/images/360.png";
import { useState } from "react";
const DashboardPage = (props) => {
  const { dataPortofolio, dataClient, dataAboutUs, dataTeam } = props;

  return (
    <>
      <Navbar />

      <section className="home pt-24 laptop:pt-0 pb-12  w-full h-[80vh] laptop:h-max">
        <div className="max-w-[1200px] flex flex-wrap laptop:flex-col mx-auto relative ">
          <div className="laptop:basis-full laptop:justify-center laptop:mx-auto laptop:p-5 basis-1/3 ">
            <h1 className="fontTitle text-4xl uppercase font-extrabold tracking-wide bg-[#3E5B5D] text-gray-200 p-4 mb-6">
              discovery luxury interior design
            </h1>
            <p className="text-sm mb-6 leading-tight tracking-wide font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugit
              dolore consequatur eos? Quaerat obcaecati veritatis cum eligendi
              temporibus explicabo!
            </p>
            <button className="fontTitle bg-[#3E5B5D] text-white font-medium tracking-wide p-3">
              About Us
            </button>
          </div>
          <div className="laptop:basis-full laptop:justify-center basis-2/3 laptop:px-5">
            <div className="rounded-t-full tablet:bg-right-top tablet:bg-cover tablet:h-[40vh] bg-contain bg-right-top h-[50vh] bg-no-repeat bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80')] "></div>
          </div>
          <div className="basis-1/3  mx-auto mt-10 laptop:mt-10">
            <div className="flex flex-wrap mx-auto justify-evenly  text-2xl text-center  text-[#3E5B5D]">
              <span className="mx-2 hover:text-[#34BFE9]">
                <FaSlack />
              </span>
              <span className="mx-2 hover:text-[#4267B2]">
                <FaFacebook />
              </span>
              <span className="mx-2 hover:text-[#25D366]">
                <FaWhatsapp />
              </span>
              <span className="mx-2 hover:text-[#E60023]">
                <FaPinterestP />
              </span>
            </div>
          </div>
          <div className="basis-2/3"></div>
        </div>
      </section>

      {/* Section Portofolio 
        - impelementation responsive design
        - impelementation from wireframe
      */}
      <section className="portofolio py-24 ">
        <div className="max-w-[1200px] max-h-full mx-auto ">
          <h1 className="text-4xl laptop:mx-auto mb-6 text-center laptop:p-4 fontTitle font-semibold ">
            Our Amazing Portofolio
          </h1>
          <p className="text-sm text-center laptop:px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugit
            dolore consequatur eos? Quaerat obcaecati veritatis cum eligendi
            temporibus explicabo!
          </p>
          <div className="flex justify-center p-2">
            <button className="text-lg p-3">All</button>
            <button className="text-lg p-3">Portfolio</button>
          </div>
          <div className="flex gap-3 laptop:flex-col laptop:p-4 ">
            {dataPortofolio.map((data) => (
              <>
                <div className="p-2">
                  <img
                    src={data.image_url}
                    alt={data.image}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </>
            ))}
          </div>
          <div className=""></div>
        </div>
      </section>

      {/* section Client & Partner 
        - impelementation responsive design
        - impelementation from wireframe
        - using order to sort a content with conditioning statement if content === content1 then order 1
      */}
      <section className="client pt-24 pb-12">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-4xl laptop:mx-auto text-center mb-6 fontTitle font-semibold laptop:p-4 ">
            Client & Partner
          </h1>
          <div className="flex flex-wrap justify-evenly gap-6  laptop:flex-col">
            {dataClient
              .sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((data) => (
                <>
                  <div className="inline-flex shadow-lg w-2/5 p-4 laptop:p-8 rounded-lg laptop:inline-block laptop:w-full bg-[#f8f8f8]">
                    <img
                      src={data.image_url}
                      className=" w-1/2 laptop:w-full "
                    />
                    <div className="p-4">
                      <h2 className="text-sm font-medium uppercase my-2">
                        {data.category}
                      </h2>
                      <h2 className="text-xl uppercase">{data.title}</h2>
                      <p className="text-xs">{data.description}</p>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </section>

      <section className="about pt-24 pb-12">
        <div className="max-w-[1200px]  mx-auto flex flex-wrap laptop:flex-col">
          <div className="w-1/2 laptop:w-full p-6 laptop:bg-cover laptop:h-[15rem] bg-center bg-contain bg-no-repeat bg-[url('https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"></div>
          <div className="w-1/2 p-6 laptop:w-full ">
            <h1 className="text-4xl laptop:mx-auto text-center mb-6 fontTitle font-semibold laptop:p-4 ">
              About Us
            </h1>
            <div className="flex gap-3 laptop:p-4 laptop:flex-col-reverse">
              {dataAboutUs.map((data) => (
                <>
                  <span className="text-sm">{data.description}</span>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ourteam pt-24 pb-12">
        <div className="max-w-[1200px] mx-auto laptop:mx-auto">
          <h1 className="text-4xl laptop:mx-auto text-center mb-6 fontTitle font-semibold  laptop:p-4 ">
            Our Team
          </h1>
          <div className="flex flex-wrap justify-evenly  gap-6 laptop:flex-col">
            {dataTeam.map((data) => (
              <>
                <div className="inline-flex shadow-lg w-2/5 p-4 laptop:p-8 rounded-lg laptop:inline-block laptop:w-full  ">
                  <img src={data.image_url} className=" w-1/2 laptop:w-full" />
                  <div className="p-4">
                    <h2 className="text-sm font-medium uppercase my-2">
                      {data.category}
                    </h2>
                    <h2 className="text-xl uppercase">{data.title}</h2>
                    <p className="text-xs">{data.description}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
