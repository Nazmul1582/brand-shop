import { useLoaderData } from "react-router-dom";
import { BiDollar } from "react-icons/bi";

const MyCart = () => {
  const products = useLoaderData();

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="overflow-x-auto w-2/3 mx-auto">
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
                    <button className="btn btn-error btn-sm">delete</button>
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
