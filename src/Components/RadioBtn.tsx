import { useContext } from "react";
import { SideBarContext } from "../App";

interface Props {
  title: string;
  id: number;
  // getItem:(title:string)=>void;
}
interface sidebarText {
  sideBarText: string;
  setSidebarText: (title: string) => void;
  // categoryOrColor:string;
}

const RadioBtn = ({ title, id }: Props) => {
  const data = useContext(SideBarContext) as sidebarText;
  // const [seletedTitle, setSetSelectedTitle] = useState("");
  const onSeletected = (title: string) => {
    console.log(data);
    data.setSidebarText(title);
    // data.setSideBarText()
    // getItem(title)
  };

  return (
    <div className="form-control">
      <label className="flex justify-center items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="radio-10"
          className="radio"
          value={title}
          key={id}
          onClick={() => onSeletected(title)}
        />
        <span className="label-text">{title}</span>
      </label>
    </div>
  );
};

export default RadioBtn;
