import SectionTitle from "./SectionTitle";
import ProductsLayout from "./ProductsLayout";

const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsLayout layoutType="grid" />
    </div>
  );
};

export default FeaturedProducts;
