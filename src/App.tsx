import { createContext, useState } from "react";
import Nav from "./Navigation/Nav";

import Recommended from "./Recommended/Recommended";

import Sidebar from "./Sidebar/Sidebar";

import ProductsData from "./Products/ProductData";
import AllProducts from "./Products/AllProducts";

export const SideCategoryContext = createContext({});
export const SideColorContext = createContext({});

function App() {
  let [searchQuery, setSearchQuery] = useState("");
  let [sideCategoryText, setSideCategoryText] = useState("");
  let [sideColorText, setSideColorText] = useState("");
  // let filterproducts = ProductsData;
  const inputText = (query: string) => {
    setSearchQuery(query);
  };

  const recomendedText = (recomendedtxt: string) => {
    setSearchQuery(recomendedtxt);
  };

  const onCategoryClick = () => {
    console.log("fdsfsdfds");
  };
  const onColorClick = () => {};

  let filterproducts = ProductsData.filter((product) => {
    return (
      searchQuery.toLowerCase() === product.company.toLowerCase() ||
      sideCategoryText.toLowerCase() === product.category.toLowerCase() ||
      sideColorText.toLowerCase() === product.color.toLowerCase()
    );
  });

  // const onColorClick = () => {};
  //  });
  // const Filterng = () => {
  //   ProductsData.filter((product) => {
  //     return searchQuery.toLowerCase() === product.company.toLowerCase();
  //   });

  //   ProductsData.filter((product) => {
  //     console.log("fdsfsdfds", sideCategoryText);

  //     return sideCategoryText.toLowerCase() === product.category.toLowerCase();
  //   });

  //   ProductsData.filter((product) => {
  //     return sideColorText.toLowerCase() === product.color.toLowerCase();
  //   });
  // };
  // filterproducts = Filterng();

  return (
    <>
      <SideCategoryContext.Provider
        value={{
          sideCategoryText,
          setSideCategoryText,
          onCategoryClick,
        }}
      >
        <SideColorContext.Provider
          value={{ sideColorText, setSideColorText, onColorClick }}
        >
          <Sidebar />
        </SideColorContext.Provider>
      </SideCategoryContext.Provider>

      <div className="w-full">
        <div className="flex flex-col justify-start items-start mt-[30px] ml-[220px] pl-5 w-9.5/12">
          <Nav onSubmit={inputText} />

          <Recommended recomendedText={recomendedText} />

          <AllProducts
            products={
              filterproducts.length === 0 ? ProductsData : filterproducts
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
