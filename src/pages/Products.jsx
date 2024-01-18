import { PaginationContainer, ProductsContainer, Filters } from "../components";
import { customFetch } from "../utils";

const url = "products";

export const productsLoader = async ({ request }) => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

export default Products;
