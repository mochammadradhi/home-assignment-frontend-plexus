import { FaFacebook, FaSlack, FaWhatsapp, FaPinterestP } from "react-icons/fa";
const DashboardPage = (props) => {
  const { dataPortofolio, dataClient, dataAboutUs, dataTeam } = props;

  return (
    <>
      <section className="pt-24 pb-12  w-full h-[80vh] laptop:h-max">
        <div className="max-w-[1200px] flex flex-wrap laptop:flex-col mx-auto relative ">
          <div className=" laptop:basis-full laptop:mx-auto laptop:p-5 basis-1/3 ">
            <h1 className="text-4xl uppercase font-extrabold tracking-wide bg-[#3E5B5D] text-gray-200 p-4">
              discovery luxury interior design
            </h1>
            <p className="text-sm mt-4 ">lorem ipsum asmet asdasd</p>
          </div>
          <div className="laptop:basis-full basis-2/3 laptop:p-5">
            <div className="rounded-t-full bg-contain bg-right-top h-[50vh] bg-no-repeat bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80')]"></div>
          </div>
          <div className="basis-1/3  mx-auto">
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
      <section className="pt-24 pb-12 bg-[#273a3b]">
        <div className="max-w-[1200px] max-h-full mx-auto ">
          <h1 className="text-4xl laptop:mx-auto mb-6 laptop:p-4">
            PORTOFOLIO
          </h1>
          <div className="flex gap-3 laptop:flex-col laptop:p-4 snap-mandatory">
            {dataPortofolio.map((data) => (
              <>
                <div>
                  <img src={data.image_url} alt={data.image} />
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* section Client & Partner 
        - impelementation responsive design
        - impelementation from wireframe
        - using order to sort a content with conditioning statement if content === content1 then order 1
      */}
      <section className="pt-24 pb-12">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-4xl laptop:mx-auto laptop:text-center mb-6">
            CLIENT & PARTNER
          </h1>
          <div className="flex flex-wrap justify-evenly gap-6  laptop:flex-col">
            {dataClient
              .sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((data) => (
                <>
                  <div className="inline-flex shadow-lg w-2/5 p-4 laptop:p-8 rounded-lg laptop:inline-block laptop:w-full ">
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

      <section className="pt-24 pb-12">
        <div className="max-w-[1200px]  mx-auto">
          <h1 className="text-4xl laptop:mx-auto mb-6">ABOUT US</h1>
          <div className="flex gap-3 laptop:p-4 laptop:flex-col-reverse">
            {dataAboutUs.map((data) => (
              <>
                <span className="text-sm">{data.description}</span>
              </>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-24 pb-12">
        <div className="max-w-[1200px] mx-auto laptop:mx-auto">
          <h1 className="text-4xl laptop:mx-auto laptop:text-center  mb-6">
            OUR TEAM
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
