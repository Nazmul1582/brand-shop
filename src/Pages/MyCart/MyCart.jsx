import { useLoaderData } from "react-router-dom";
import { BiDollar } from "react-icons/bi";
import Swal from "sweetalert2";
import { useState } from "react";

const MyCart = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts)

  const handleDelete = product => {
    product.addToCart = false;

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-server-21ibh08re-muhammadnazmul02-gmailcom.vercel.app/products/${product._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
          const remaining = products.filter(item => item._id !== product._id)
          setProducts(remaining)
          
          if(data.modifiedCount > 0){
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
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
    })

  }

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="overflow-x-auto w-full md:w-2/3 mx-auto">
          <table className="table table-zebra">
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={product.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{product.name}</td>
                  <td>
                    <div className="flex items-center">
                      <BiDollar /> {product.price}
                    </div>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(product)} className="btn btn-error btn-sm">delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyCart;
