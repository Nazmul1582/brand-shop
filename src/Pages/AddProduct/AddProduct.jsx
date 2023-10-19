const AddProduct = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="mb-5 font-bold text-3xl text-center">Add Product</h2>
        <div className="card mx-auto w-full md:w-2/3 shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="flex gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" className="input input-bordered" />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input type="text" className="input input-bordered" />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input type="text" className="input input-bordered" />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <input type="text" className="input input-bordered" />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="text" className="input input-bordered" />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input type="text" className="input input-bordered" />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <input type="text" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-info">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
