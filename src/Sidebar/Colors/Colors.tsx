import RadioBtn from "../../Components/RadioBtn";
import ColorItem from "./ColorItem";

const Price = () => {
  return (
    <form className="flex flex-col items-start gap-2 mt-5 mb-10">
      <h2 className="font-bold">Colors</h2>
      {ColorItem.map((title, index) => (
        <RadioBtn key={index} title={title} id={index} />
      ))}
    </form>
  );
};

export default Price;
