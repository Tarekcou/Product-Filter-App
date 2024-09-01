import { createContext, useState } from "react";
import Nav from "./Navigation/Nav";

import Recommended from "./Recommended/Recommended";

import Sidebar from "./Sidebar/Sidebar";

import ProductsData from "./Products/ProductData";
import AllProducts from "./Products/AllProducts";

export const SideBarContext = createContext({});

function App() {
  let [searchQuery, setSearchQuery] = useState("");
  let [recoText, setRecoText] = useState("");
  let [sideBarText, setSidebarText] = useState("");

  const inputText = (query: string) => {
    setSearchQuery(query);
    // console.log(query);
  };

  const recomendedText = (recomendedtxt: string) => {
    setRecoText(recomendedtxt);
    console.log(recomendedtxt);
  };
  const filterproducts = ProductsData.filter((product) => {
    if (searchQuery != "") {
      // setRecoText("");
      // setSidebarText("");
      recoText = "";
      sideBarText = "";
      return product.company.toLowerCase() == searchQuery.toLowerCase();
    } else if (recoText != "") {
      // setSearchQuery("");
      // setSidebarText("");
      searchQuery = "";
      sideBarText = "";

      return product.company.toLowerCase() == recoText.toLowerCase();
    } else if (
      sideBarText != "" &&
      sideBarText.toLowerCase() == product.category.toLowerCase()
    ) {
      searchQuery = "";
      recoText = "";

      return sideBarText.toLowerCase() == product.category.toLowerCase();
    } else if (
      sideBarText != "" &&
      sideBarText.toLowerCase() == product.color.toLowerCase()
    )
      return sideBarText.toLowerCase() == product.color.toLowerCase();
  });
  console.log(sideBarText, "hello");

  return (
    <>
      <SideBarContext.Provider value={{ sideBarText, setSidebarText }}>
        <Sidebar />
      </SideBarContext.Provider>
      <div className="w-full">
        <div className="flex flex-col justify-start items-start mt-[30px] ml-[220px] pl-5 w-9.5/12">
          <Nav onSubmit={(query) => inputText(query)} />

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
