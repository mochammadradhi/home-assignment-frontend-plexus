const DashboardPage = (props) => {
  const { dataPortofolio, dataClient, dataAboutUs, dataTeam } = props;

  return (
    <>
      <section className="pt-24 pb-12  w-full h-[80vh] desktop:h-max">
        <div className="max-w-[1200px] flex desktop:flex-col mx-auto relative ">
          <div className=" desktop:basis-full desktop:mx-auto desktop:p-5 basis-1/3">
            <h1 className="text-4xl uppercase font-extrabold">
              discovery luxury interior design
            </h1>
            <p>lorem ipsum asmet asdasd</p>
          </div>
          <div className="desktop:basis-full basis-2/3">
            <div className="rounded-xl bg-contain bg-right h-[50vh] bg-no-repeat bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80')]"></div>
          </div>
        </div>
      </section>

      {/* Section Portofolio 
        - impelementation responsive design
        - impelementation from wireframe
      */}
      <section className="pt-24 pb-12">
        <div className="max-w-[1200px] max-h-full mx-auto">
          <h1 className="text-4xl desktop:mx-auto mb-6 desktop:p-4">
            PORTOFOLIO
          </h1>
          <div className="flex gap-3 desktop:flex-col desktop:p-4">
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
        <div className="max-w-[1200px] max-h-full mx-auto">
          <h1 className="text-4xl desktop:mx-auto mb-6">CLIENT & PARTNER</h1>
          <div className="flex flex-row-reverse gap-3 desktop:p-4 desktop:flex-col-reverse">
            {dataClient.map((data) => (
              <>
                {data.title === "Company One" ? (
                  <div className="inline-block basis-1/2 order-1">
                    <img src={data.image_url} />
                    <h2 className="text-sm font-medium uppercase my-2">
                      {data.category}
                    </h2>
                    <h2 className="text-xl uppercase">{data.title}</h2>
                  </div>
                ) : (
                  <div className="inline-block basis-1/2">
                    <img src={data.image_url} />
                    <h2 className="text-sm font-medium uppercase my-2">
                      {data.category}
                    </h2>
                    <h2 className="text-xl uppercase">{data.title}</h2>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-24 pb-12">
        <div className="max-w-[1200px] max-h-full mx-auto">
          <h1 className="text-4xl desktop:mx-auto mb-6">ABOUT US</h1>
          <div className="flex gap-3 desktop:p-4 desktop:flex-col-reverse">
            {dataAboutUs.map((data) => (
              <>
                <span className="text-sm">{data.description}</span>
              </>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-24 pb-12">
        <div className="max-w-[1200px] max-h-full mx-auto">
          <h1 className="text-4xl desktop:mx-auto mb-6">OUR TEAM</h1>
          <div className="flex flex-row-reverse gap-3 desktop:p-4 desktop:flex-col-reverse">
            {dataTeam.map((data) => (
              <>
                <div className="inline-block basis-1/2">
                  <img src={data.image_url} />
                  <h2 className="text-sm font-medium uppercase my-2">
                    {data.category}
                  </h2>
                  <h2 className="text-xl uppercase">{data.title}</h2>
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
