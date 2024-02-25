import { useLoaderData, Link } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsLayout = ({ layoutType }) => {
  const { products } = useLoaderData();

  return (
    <div className={`grid ${layoutType === "grid" ? "gap-4 md:grid-cols-2 lg:grid-cols-3 pt-12 " : "mt-12 gap-y-8"}`}>
      {
        products.map((product) => {
          const { title, price, image, company } = product.attributes;
          const dollarsPrice = formatPrice(price);

          return (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className={`shadow-xl hover:shadow-2xl duration-300 transition ${layoutType === "grid" ? "card w-full" : "p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100  group"}`}
            >
              <figure className={layoutType === "grid" ? "px-4 pt-4" : ""}>
                <img
                  src={image}
                  alt={title}
                  className="rounded-xl h-64 md:h-48 w-full object-cover"
                />
              </figure>
              <div className={layoutType === "grid" ? "card-body items-center text-center" : "ml-0 sm:ml-16"}>
                <h3 className="card-title capitalize font-medium text-lg">{title}</h3>
                <h4 className="capitalize text-md text-neutral-content">
                  {company}
                </h4>
                {layoutType === "grid" && <span className="text-secondary font-medium">{dollarsPrice}</span>}

              </div>
              {layoutType === "list" && <p className="text-secondary font-medium sm:ml-auto">
                {dollarsPrice}
              </p>}
            </Link>
          );
        })
      }
    </div >
  );
};

export default ProductsLayout;
