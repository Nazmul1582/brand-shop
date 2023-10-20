import { useLoaderData } from "react-router-dom";

const Update = () => {
  const product = useLoaderData();
  console.log(product);

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const updatedProduct = {
      name,
      image,
      brandName,
      type,
      price,
      rating,
      description,
    };
    console.log(updatedProduct);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="mb-5 font-bold text-3xl text-center">Update Product</h2>
        <div className="card mx-auto w-full md:w-2/3 shadow-2xl bg-base-100">
          <form onSubmit={handleAddProduct} className="card-body">
            <div className="flex gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  name="image"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input
                  type="text"
                  name="brandName"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <input
                  type="text"
                  name="type"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-info">Update Product</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Update;
