import React from "react";

const DashboardPage = () => {
  return (
    <>
      <section className="pt-24 pb-12  w-full h-[80vh] bg-slate-500">
        <div className="max-w-[1200px] flex mx-auto relative ">
          <div className=" basis-1/3">
            <h1 className="text-2xl uppercase font-extrabold">
              discovery luxury interior design
            </h1>
          </div>
          <div className="basis-2/3">
            <h1 className="text-2xl uppercase">
              discovery luxury interior design
            </h1>
          </div>
        </div>
      </section>
      <section className="pt-24 pb-12">
        <div className="max-w-[1200px] max-h-full flex mx-auto relative">
          <h1 className="text-4xl">PORTOFOLIO</h1>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
