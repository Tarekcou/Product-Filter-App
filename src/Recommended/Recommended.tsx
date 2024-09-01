import { Button } from "react-daisyui";
interface Props {
  recomendedText: (btnTxt: string) => void;
}
const Recommended = ({ recomendedText }: Props) => {
  return (
    <div className="space-y-2 mx-auto py-5 w-full">
      <h1 className="font-bold">Recommended</h1>
      <div className="flex gap-1">
        <Button onClick={() => recomendedText("All Products")} size="sm">
          All Products
        </Button>
        <Button onClick={() => recomendedText("Nike")} size="sm">
          Nike
        </Button>
        <Button onClick={() => recomendedText("Adidas")} size="sm">
          Adidas
        </Button>
        <Button onClick={() => recomendedText("Puma")} size="sm">
          Puma
        </Button>
        <Button onClick={() => recomendedText("Vans")} size="sm">
          Vans
        </Button>
      </div>
    </div>
  );
};

export default Recommended;
