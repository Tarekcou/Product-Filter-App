import { useContext } from "react";
import { SideColorContext } from "../../App";
import RadioCategoryBtn from "../../Components/RadioCategoryBtn";
import ColorItem from "./ColorItem";
import SideColorPojo from "../../Components/SideColorPojo";

const Colors = () => {
  const { setSideColorText, onColorClick } = useContext(
    SideColorContext
  ) as SideColorPojo;
  const onSelectedCategory = (title: string) => {
    setSideColorText(title);
    onColorClick();
    // console.log(data);
  };

  // }
  return (
    <>
      <h2 className="font-bold">Colors</h2>

      <form className="flex md:flex-col items-start gap-2">
        {ColorItem.map((itemName: string, index: number) => (
          <RadioCategoryBtn
            key={index}
            title={itemName}
            id={index}
            dataCustom="color"
            onSelected={onSelectedCategory}
          />
        ))}
      </form>
    </>
  );
};

export default Colors;
