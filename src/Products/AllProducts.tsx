import Cards from "../Components/Cards";
import Products from "./Products";

interface Props {
  products: Products[];
}
const AllProducts = ({ products }: Props) => {
  return (
    <div className="place-items-end gap-5 grid grid-cols-2 md:grid-cols-4 w-full">
      {products.map((product) => (
        <Cards key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
