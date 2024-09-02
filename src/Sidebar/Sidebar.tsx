import Category from "./Category/Category";
import Colors from "./Colors/Colors";

const Sidebar = () => {
  return (
    <section className=" fixed overflow-y-scrolls invisible hidden md:flex  md:flex-col justify-center items-center gap-5 md:pl-10   lg:pl-16   h-full ">
      <div className="">
        <h1 className="border-b-2 w-full text-4xl pt-10">🛒</h1>
      </div>

      <Category />
      <Colors />
    </section>
  );
};

export default Sidebar;
