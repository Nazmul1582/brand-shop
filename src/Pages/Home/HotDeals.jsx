import HotDeal from "./HotDeal";

const HotDeals = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="mb-5">
          <h2 className="text-3xl border-b pb-3 font-bold">
            Hot <span className="text-sky-500">Deals</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <HotDeal />
            <HotDeal />
            <HotDeal />
            <HotDeal />
        </div>
      </div>
    </section>
  );
};

export default HotDeals;
