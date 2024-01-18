import { PaginationContainer, ProductsContainer, Filters } from "../components";
import { customFetch } from "../utils";

const url = "products";

export const productsLoader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  console.log(params);
  const response = await customFetch(url, { params });
  console.log(response);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
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
