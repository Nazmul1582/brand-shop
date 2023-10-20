import { BiDollar } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();
  const { name, image, brandName, type, price, rating, description } = product;

  const handleAddToCart = product => {
    const newProduct = {...product, addToCart: true}
    
    fetch(`https://brand-shop-server-21ibh08re-muhammadnazmul02-gmailcom.vercel.app/product-details/${product._id}`, {
      method: "PUT",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        Swal.fire(
          'Good job!',
          'Product added successfully!',
          'success'
        )
      }
    })
    .catch(error => {
      Swal.fire(
        'Oops!',
        `${error.message}`,
        'error'
      )
    })
  }

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <figure>
            <img src={image} alt={`image of ${name}`} />
          </figure>
          <div className="md:col-span-2 p-5">
            <div className="flex flex-col justify-center h-full gap-3">
              <h2 className="font-bold text-3xl mb-3">{name}!</h2>
              <div className="flex items-center text-3xl font-bold">
                <span><BiDollar className="text-3xl" /></span>
                <span>{price}</span>
              </div>
              <div className="rating my-2">
                {[...Array(parseInt(rating))].map((ele, index) => (
                  <input
                    key={index}
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                ))}
              </div>
              <p>Brand: <span className="font-bold">{brandName}</span></p>
              <p>Category: <span className="font-bold">{type}</span></p>
              <p className="mb-3">{description}</p>
              <div className="card-actions">
                <button onClick={() => handleAddToCart(product)} className="btn btn-info">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
