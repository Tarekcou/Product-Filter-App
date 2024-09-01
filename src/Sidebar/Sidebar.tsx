import Category from "./Category/Category";
import Colors from "./Colors/Colors";

const Sidebar = () => {
  return (
    <section className="top-0 bottom-0 fixed flex md:flex-col justify-center items-center gap-5 border-r-2  overflow-y-scroll w-2/12 ">
      <div className="">
        <h1 className="border-b-2 w-full text-4xl p-0">🛒</h1>
      </div>

      <Category />
      <Colors />
    </section>
  );
};

export default Sidebar;
