const Product = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src="https://i.ibb.co/1RJsxs6/xiaomi-logo.png" alt="Headphone" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Headphone!</h2>
        <p>If a dog chews Headphone whose Headphone does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
