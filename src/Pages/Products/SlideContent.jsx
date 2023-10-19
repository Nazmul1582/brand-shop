const SlideContent = () => {
    return (
          <div className="max-w-md absolute top-14 left-16">
            <p className="font-semibold">
              Sale Offer <span className="text-red-500">-10% Off</span> This
              Week
            </p>
            <h2 className="mt-3 mb-6 text-5xl font-bold">
              Top Trending Headphone 2023
            </h2>
            <h3 className="mb-5 font-semibold">
              Starting at{" "}
              <span className="text-red-500 font-bold text-5xl">$309.00</span>
            </h3>
            <button className="btn btn-info">Shop Now</button>
          </div>
    );
};

export default SlideContent;