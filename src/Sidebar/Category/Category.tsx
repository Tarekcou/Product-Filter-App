import { useContext } from "react";
import CategoryItem from "./CategoryItem";
import RadioCategoryBtn from "../../Components/RadioCategoryBtn";
import SideCategoryPojo from "../../Components/SideCategoryPojo";
import { SideCategoryContext } from "../../App";

const Category = () => {
  const { setSideCategoryText, onCategoryClick } = useContext(
    SideCategoryContext
  ) as SideCategoryPojo;

  const onSelectedCategory = (title: string) => {
    // console.log(title);
    // console.log(data);
    onCategoryClick();

    // if (dataCustom.toLowerCase() === "category")
    setSideCategoryText("");
    setSideCategoryText(title);
    // : data.setSideColorText(title);
    // console.log(data);
  };

  // onCategoryClick = () => {
  //   console.log("category");
  // };

  // }
  return (
    <form className="flex flex-col items-start gap-2">
      <h2 className="font-bold">Category</h2>
      {CategoryItem.map((itemName, index) => (
        <RadioCategoryBtn
          key={index}
          title={itemName}
          id={index}
          dataCustom="category"
          onSelected={(title: string) => onSelectedCategory(title)}
        />
      ))}
    </form>
  );
};

export default Category;
