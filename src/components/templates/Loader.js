const Loader = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="border h-40  shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className=" bg-slate-700 h-32 w-1/2" />
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded" />
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2" />
                <div className="h-2 bg-slate-700 rounded col-span-1" />
                <div className="h-2 bg-slate-700 rounded col-span-2" />
                <div className="h-2 bg-slate-700 rounded col-span-1" />
              </div>
              <div className="h-2 bg-slate-700 rounded" />
              <div className="h-2 bg-slate-700 rounded" />
              <div className="h-2 bg-slate-700 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
