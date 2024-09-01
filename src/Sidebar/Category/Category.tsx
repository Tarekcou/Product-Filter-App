import RadioBtn from "../../Components/RadioBtn";
import CategoryItem from "./CategoryItem";

interface Props {
  // getCategory: (title: string) => void;
}
const Category = ({}: Props) => {
  // const [selectedCategory, setSelectedCategory] = useState("");
  // const getCategory =(title:string)=>{

  // }
  return (
    <form className="flex flex-col items-start gap-2">
      <h2 className="font-bold">Category</h2>
      {CategoryItem.map((itemName, index) => (
        <RadioBtn key={index} title={itemName} id={index} />
      ))}
    </form>
  );
};

export default Category;
