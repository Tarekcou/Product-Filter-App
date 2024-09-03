interface Props {
  title: string;
  id: number;
  dataCustom: string;
  onSelected: (selectedTitle: string) => void;
  // getItem:(title:string)=>void;
}

const RadioCategoryBtn = ({ title, id, onSelected }: Props) => {
  return (
    <div className="form-control flex">
      <label
        className="flex justify-center items-center gap-2 cursor-pointer"
        onClick={() => onSelected(title)}
      >
        <input
          type="radio"
          name="radio-10"
          className="radio-xs md:radio"
          value={title}
          key={id}
        />
        <span className="label-text">{title}</span>
      </label>
    </div>
  );
};

export default RadioCategoryBtn;
