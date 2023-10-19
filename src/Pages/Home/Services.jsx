import { TbTruckDelivery } from "react-icons/tb";
import { BiChat, BiDollar, BiSolidCreditCard } from "react-icons/bi";
import Service from "./Service";

const Services = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="mb-5">
          <h2 className="text-3xl border-b pb-3 font-bold">
            Special <span className="text-sky-500">Services</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Service
            name="Free Delivery"
            description="And free returns. See checkout for delivery dates."
          >
            <TbTruckDelivery />
          </Service>
          <Service name="Money Back" description="30 days money back guarantee">
            <BiDollar />
          </Service>
          <Service
            name="Save Payment"
            description="Pay with the world’s most popular and secure payment methods."
          >
            <BiSolidCreditCard />
          </Service>
          <Service
            name="24/7 Help Center"
            description="Have a question? Call a Specialist or chat online."
          >
            <BiChat />
          </Service>
        </div>
      </div>
    </section>
  );
};

export default Services;
