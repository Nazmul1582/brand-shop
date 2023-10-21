const Banner = () => {
  return (
    <>
      <div
        className="hero min-h-[80vh] bg-cover"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/gVfZ3xR/blue-headphones.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="container mx-auto">
        <div className="hero-content justify-start">
          <div className="max-w-md">
            <p className="font-semibold">Sale Offer <span className="text-red-500">-10% Off</span> This Week</p>
            <h2 className="my-5 text-5xl font-bold">Top Trending Headphone 2023</h2>
            <h3 className="mb-6 font-semibold">Starting at <span className="text-red-500 font-bold text-5xl">$309.00</span></h3>
            <button className="btn btn-info">Shop Now</button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
