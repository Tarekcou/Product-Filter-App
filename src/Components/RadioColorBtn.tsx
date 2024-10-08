interface Props {
  title: string;
  id: number;
  onSelected: (selecTedTitle: string) => void;
  // getItem:(title:string)=>void;
}

const RadioColorBtn = ({ title, id, onSelected }: Props) => {
  return (
    <div className="form-control">
      <label
        className="flex justify-center items-center gap-2 cursor-pointer"
        onClick={() => onSelected(title)}
      >
        <input
          type="radio"
          name="radio-10"
          className="radio radio-success"
          value={title}
          key={id}
        />
        <span className="label-text">{title}</span>
      </label>
    </div>
  );
};

export default RadioColorBtn;
