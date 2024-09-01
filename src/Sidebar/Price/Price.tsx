import RadioBtn from "../../Components/RadioBtn";
import PriceItem from "./PriceItem";

const Price = () => {
  return (
    <form className="flex flex-col items-start gap-2 mt-5">
      <h2 className="font-bold">Price</h2>
      {PriceItem.map((title, index) => (
        <RadioBtn key={index} title={title} id={index} />
      ))}
    </form>
  );
};

export default Price;
