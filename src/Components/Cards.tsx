import { Card } from "react-daisyui";
import { BsFillBagHeartFill } from "react-icons/bs";
import Products from "../Products/Products";

interface Props {
  product: Products;
}
const Cards = ({ product }: Props) => {
  return (
    <Card className="shadow-xl mx-auto max-w-[240px]">
      <Card.Image className="p-5 h-[150px]" src={product.img} alt="Shoes" />
      <Card.Body className="flex flex-col items-center gap-3 p-3 h-[250px] text-center">
        <Card.Title className="font-bold" tag="h2">
          {product.title}
        </Card.Title>
        <p>{product.description}</p>
        <Card.Actions className="flex justify-around gap-5">
          <p className="line-through">${product.prevPrice}</p>{" "}
          <p>${product.newPrice}</p>
        </Card.Actions>
        <div className="flex justify-center items-center w-full">
          <p className="p-0 w-8/12">{product.reviews}</p>
          <BsFillBagHeartFill className="p-0 w-6/12 cursor-pointer" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cards;
