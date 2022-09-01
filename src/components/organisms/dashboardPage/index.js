const DashboardPage = (props) => {
  const dataPortofolio = props;
  return (
    <>
      <section className="pt-24 pb-12  w-full h-[80vh] desktop:h-max bg-slate-500">
        <div className="max-w-[1200px] flex desktop:flex-col mx-auto relative ">
          <div className=" desktop:basis-full desktop:mx-auto desktop:p-5 basis-1/3">
            <h1 className="text-2xl uppercase font-extrabold">
              discovery luxury interior design
            </h1>
            <p>lorem ipsum asmet asdasd</p>
          </div>
          <div className="desktop:basis-full basis-2/3">
            <div className="bg-contain bg-right h-[50vh] bg-no-repeat bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80')]"></div>
          </div>
        </div>
      </section>
      <section className="pt-24 pb-12">
        <div className="max-w-[1200px] max-h-full flex mx-auto relative">
          <h1 className="text-4xl desktop:mx-auto">PORTOFOLIO</h1>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
