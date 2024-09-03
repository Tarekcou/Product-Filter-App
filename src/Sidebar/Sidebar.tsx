import Category from "./Category/Category";
import Colors from "./Colors/Colors";

const Sidebar = () => {
  return (
    <section className="block md:fixed overflow-y-scrolls  md:flex  md:flex-col  items-center gap-5 mb-10 md:pl-10  lg:pl-16    h-full ">
      <div className="">
        <h1 className="border-b-2 w-full text-4xl hidden md:block">🛒</h1>
      </div>

      <Category />
      <Colors />
    </section>
  );
};

export default Sidebar;
