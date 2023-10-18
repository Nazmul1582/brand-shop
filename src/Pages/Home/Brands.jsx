import Brand from "./Brand";

const Brands = () => {
    const AllBrands = [
        {
            id: 1,
            name: "Apple",
            logo: "https://i.ibb.co/xHFHQF8/apple-logo.png"
        },
        {
            id: 2,
            name: "Google",
            logo: "https://i.ibb.co/c1Qkq8R/google-logo.png"
        },
        {
            id: 3,
            name: "Intel",
            logo: "https://i.ibb.co/1QXWCXY/intel.png"
        },
        {
            id: 4,
            name: "Samsung",
            logo: "https://i.ibb.co/d4WThmn/samsung.png"
        },
        {
            id: 5,
            name: "Huawei",
            logo: "https://i.ibb.co/wNsNmP8/Huawei.png"
        },
        {
            id: 6,
            name: "Xiaomi",
            logo: "https://i.ibb.co/1RJsxs6/xiaomi-logo.png"
        },
    ]
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto">
        <div className="mb-5">
          <h2 className="text-3xl border-b pb-3 font-bold">
            Top <span className="text-sky-500">Brands</span>
          </h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {
                AllBrands.map(brand => <Brand key={brand.id} brand={brand} />)
            }
        </div>
      </div>
    </section>
  );
};

export default Brands;
