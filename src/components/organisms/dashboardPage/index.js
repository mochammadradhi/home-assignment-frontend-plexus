import { FaFacebook, FaSlack, FaWhatsapp, FaPinterestP } from "react-icons/fa";
import { Navbar, ScrollToTop, Footer, Loader } from "../../templates";
import { useState, Suspense } from "react";
import { Pannellum } from "pannellum-react";
const DashboardPage = (props) => {
  const { dataPortofolio, dataClient, dataAboutUs, dataTeam } = props;
  const [openModal, setOpenModal] = useState(false);
  const [dataClick, setDataClick] = useState([]);
  const changecontent = (content) => {
    setDataClick([content]);
  };
  return (
    <>
      {/* Rendering navbar from template */}
      <Navbar />

      {/* section Jumbotron Home Page
        - impelementation responsive design
        - impelementation from scratch desgin
      */}
      <section className="Home pt-24 laptop:pt-0 pb-16  w-full h-[90vh] laptop:h-max">
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
            <button className="fontTitle bg-[#3E5B5D]  text-white font-medium tracking-wide p-3">
              About Us
            </button>
          </div>
          <div className="laptop:basis-full laptop:justify-center basis-2/3 laptop:px-5">
            <div className="rounded-t-full tablet:bg-right-top tablet:bg-cover tablet:h-[40vh] bg-contain bg-right-top h-[50vh] bg-no-repeat bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80')] "></div>
          </div>
          <div className="basis-1/3  mx-auto mt-10 laptop:mt-10">
            <div className="flex flex-wrap mx-auto justify-evenly  text-2xl text-center  text-[#3E5B5D]">
              <a href="!#" className="mx-2 hover:text-[#34BFE9]">
                <FaSlack />
              </a>
              <a href="!#" className="mx-2 hover:text-[#4267B2]">
                <FaFacebook />
              </a>
              <a href="!#" className="mx-2 hover:text-[#25D366]">
                <FaWhatsapp />
              </a>
              <a href="!#" className="mx-2 hover:text-[#E60023]">
                <FaPinterestP />
              </a>
            </div>
          </div>
          <div className="basis-2/3"></div>
        </div>
      </section>

      {/* Section Portofolio 
        - impelementation responsive design
        - impelementation from wireframe
      */}
      <section className="Portofolio py-24 bg-[#f5f5f5]">
        <div className="max-w-[1200px] max-h-full mx-auto ">
          <h1 className="text-4xl laptop:mx-auto mb-6 text-center laptop:p-4 fontTitle font-semibold ">
            Our Amazing Portofolio
          </h1>
          <p className="text-sm text-center laptop:px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugit
            dolore consequatur eos? Quaerat obcaecati veritatis cum eligendi
            temporibus explicabo!
          </p>
          <div className="flex justify-center p-2 fontTitle">
            <button className="text-lg p-3">All</button>
            <button className="text-lg p-3">Portfolio</button>
          </div>

          <Suspense fallback={<div className="text-4xl">LOADING..</div>}>
            <div className="flex gap-3 laptop:flex-col laptop:p-4  ">
              {dataPortofolio.map((data) => (
                <>
                  <button
                    className="p-2"
                    key={data.id}
                    onClick={() => {
                      changecontent(data);
                      setOpenModal(true);
                    }}
                  >
                    <img
                      src={data.image_url}
                      alt={data.image}
                      className="rounded-2xl shadow-xl group-hover:opacity-75"
                    />
                  </button>
                </>
              ))}
            </div>
          </Suspense>
        </div>
      </section>

      {/* Section Portofolio details
        - impelementation responsive design
        - impelementation from wireframe
        - toggle function for popup show modals
      */}
      {openModal &&
        dataClick?.map((data) => (
          <>
            <div className="flex bg-neutral-300  self-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-screen tablet:inset-0 h-screen bg-opacity-30 backdrop-blur-sm items-center justify-center tablet:h-screen">
              <div className="flex items-center  justify-center object-center   p-4 w-screen max-w-4xl h-screen tablet:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex justify-between items-center object-center p-5 rounded-t border-b dark:border-gray-600 ">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white fontTitle">
                      {data.title} | Portofolio Viewer 360°
                    </h3>
                    <br />

                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => setOpenModal(false)}
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <div className=" w-[1000px] tablet:w-screen">
                    <Pannellum
                      width="100%"
                      height="400px"
                      image={data.description}
                      pitch={10}
                      yaw={180}
                      hfov={110}
                      autoLoad
                      onLoad={() => {
                        console.log("panorama loaded");
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}

      {/* section Client & Partner 
        - impelementation responsive design
        - impelementation from wireframe
        - using sorting data to make a data sort ascending 
      */}
      <section className="Client pt-24 pb-12">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-4xl laptop:mx-auto text-center mb-6 fontTitle font-semibold laptop:p-4 ">
            Client & Partner
          </h1>
          <Suspense
            fallback={
              <div className="flex flex-wrap justify-evenly gap-6 laptop:flex-col">
                {dataClient
                  .sort((a, b) => (a.id > b.id ? 1 : -1))
                  .map((data) => (
                    <Loader />
                  ))}
              </div>
            }
          >
            <div className="flex flex-wrap justify-evenly gap-6  laptop:flex-col">
              {dataClient
                .sort((a, b) => (a.id > b.id ? 1 : -1))
                .map((data) => (
                  <>
                    <div className="inline-flex shadow-lg w-2/5 p-4 laptop:p-8 rounded-lg laptop:inline-block laptop:w-full backdrop-blur-sm bg-opacity-30 bg-[#f8f8f8]">
                      <img
                        alt={data.img}
                        src={data.image_url}
                        className=" w-1/2 laptop:w-full rounded-lg"
                      />
                      <div className="p-4">
                        <h2 className="text-xl uppercase fontTitle font-bold my-2">
                          {data.title}
                        </h2>
                        <p className="text-sm leading-normal text-justify">
                          {data.description}
                        </p>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </Suspense>
        </div>
      </section>

      {/* section About Us
        - impelementation responsive design
        - impelementation from wireframe
      */}
      <section className="About pt-24 pb-12 bg-[#f5f5f5]">
        <div className="max-w-[1200px]  mx-auto flex flex-wrap laptop:flex-col">
          <div className="w-1/2 laptop:w-full p-6 laptop:bg-cover laptop:h-[15rem] bg-center bg-contain bg-no-repeat bg-[url('https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"></div>
          <div className="w-1/2 p-6 laptop:w-full ">
            <h1 className="text-4xl laptop:mx-auto text-center mb-6 fontTitle font-semibold laptop:p-4 ">
              About Us
            </h1>
            <Suspense fallback={<div className="text-4xl">LOADING..</div>}>
              <div className="flex gap-3 laptop:p-4 laptop:flex-col-reverse text-justify">
                {dataAboutUs.map((data) => (
                  <>
                    <span className="text-sm leading-relaxed">
                      {data.description}
                    </span>
                  </>
                ))}
              </div>
            </Suspense>
          </div>
        </div>
      </section>

      {/* section Our Team
        - impelementation responsive design
        - impelementation from wireframe
      */}
      <section className="Our Team pt-24 pb-12">
        <div className="max-w-[1200px] mx-auto laptop:mx-auto">
          <h1 className="text-4xl laptop:mx-auto text-center mb-6 fontTitle font-semibold  laptop:p-4 ">
            Our Team
          </h1>
          <div className="flex flex-wrap justify-evenly  gap-6 laptop:flex-col">
            {dataTeam.map((data) => (
              <>
                <div className="inline-flex shadow-lg w-2/5 p-4 laptop:p-8 rounded-lg laptop:inline-block laptop:w-full bg-[#f8f8f8]">
                  <img
                    alt="data.iamge"
                    src={data.image_url}
                    className=" w-1/2 laptop:w-full h-full rounded-lg"
                  />
                  <div className="p-4">
                    <h2 className="fontTitle text-xs font-bold uppercase my-2">
                      {data.category}
                    </h2>
                    <h2 className="text-xl uppercase fontTitle font-bold my-2">
                      {data.title}
                    </h2>
                    <p className="text-xs leading-relaxed text-justify">
                      {data.description}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Rendering scroll to top from template */}
      <ScrollToTop />

      {/* Rendering Footer from template */}
      <Footer />
    </>
  );
};

export default DashboardPage;
