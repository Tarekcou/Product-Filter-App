import { createContext, useEffect, useState } from "react";
import Nav from "./Navigation/Nav";

import Recommended from "./Recommended/Recommended";

import Sidebar from "./Sidebar/Sidebar";

import ProductsData from "./Products/ProductData";
import AllProducts from "./Products/AllProducts";
import Products from "./Products/Products";

export const SideCategoryContext = createContext({});
export const SideColorContext = createContext({});

function App() {
  let [searchQuery, setSearchQuery] = useState("");
  let [sideCategoryText, setSideCategoryText] = useState("");
  let [sideColorText, setSideColorText] = useState("");
  let [filteredProducts, setFilteredProducts] = useState<Products[]>([]);
  // let [specialText, setSpecialText] = useState("");

  // const filterConditions = {
  //   company: searchQuery,
  //   category: sideCategoryText,
  //   // color: sideColorText,
  // };
  // let filterproducts = ProductsData;
  const inputText = (query: string) => {
    setSearchQuery(query);
    // setSpecialText(query);
  };

  const recomendedText = (recomendedtxt: string) => {
    setSearchQuery(recomendedtxt);
    // setSpecialText(recomendedtxt);
  };

  const onCategoryClick = () => {
    console.log("fdsfsdfds");
    // setSpecialText(sideCategoryText);
  };

  const onColorClick = () => {
    // setSpecialText(sideColorText);
  };

  useEffect(() => {
    filteredProducts = ProductsData.filter((product) => {
      if (
        searchQuery.toLowerCase() === "" &&
        sideCategoryText.toLowerCase() === "" &&
        sideColorText.toLocaleLowerCase() === ""
      )
        return false;
      if (
        product.company.toLowerCase() === searchQuery.toLowerCase() &&
        sideCategoryText.toLowerCase() === "" &&
        sideColorText.toLocaleLowerCase() === ""
      )
        return product.company.toLowerCase() === searchQuery.toLowerCase();

      if (
        searchQuery.toLowerCase() === "" &&
        sideCategoryText.toLowerCase() === product.category.toLowerCase() &&
        sideColorText.toLocaleLowerCase() === ""
      )
        return (
          sideCategoryText.toLowerCase() === product.category.toLowerCase()
        );

      if (
        searchQuery.toLowerCase() === "" &&
        sideCategoryText.toLowerCase() === "" &&
        sideColorText.toLocaleLowerCase() === product.color.toLowerCase()
      )
        return (
          sideColorText.toLocaleLowerCase() === product.color.toLowerCase()
        );
      if (
        product.company.toLowerCase() === searchQuery.toLowerCase() &&
        sideCategoryText.toLowerCase() === product.category.toLowerCase() &&
        sideColorText.toLocaleLowerCase() === ""
      )
        return (
          product.company.toLowerCase() === searchQuery.toLowerCase() &&
          sideCategoryText.toLowerCase() === product.category.toLowerCase()
        );

      if (
        product.company.toLowerCase() === searchQuery.toLowerCase() &&
        sideCategoryText.toLowerCase() === product.category.toLowerCase() &&
        sideColorText.toLocaleLowerCase() === product.color.toLowerCase()
      )
        return (
          product.company.toLowerCase() === searchQuery.toLowerCase() &&
          sideCategoryText.toLowerCase() === product.category.toLowerCase() &&
          sideColorText.toLocaleLowerCase() === product.color.toLowerCase()
        );
      if (
        product.company.toLowerCase() === searchQuery.toLowerCase() &&
        product.category.toLowerCase() === "" &&
        sideColorText.toLocaleLowerCase() === product.color.toLowerCase()
      )
        return (
          product.company.toLowerCase() === searchQuery.toLowerCase() &&
          sideColorText.toLocaleLowerCase() === product.color.toLowerCase()
        );

      if (
        searchQuery.toLowerCase() === "" &&
        sideCategoryText.toLowerCase() === product.category.toLowerCase() &&
        sideColorText.toLowerCase() === product.color.toLowerCase()
      )
        return (
          sideCategoryText.toLowerCase() === product.category.toLowerCase() &&
          sideColorText.toLowerCase() === product.color.toLowerCase()
        );
    });
    setFilteredProducts(filteredProducts);
  }, [searchQuery, sideCategoryText, sideColorText]);

  return (
    <>
      <div className="flex md:flex-row flex-col mx-auto ">
        <div className="hidden md:block w-2/12 ">
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
        </div>
        <div className="flex   flex-col justify-start items-start    px-5 pb-5 w-full md:w-10/12 ">
          <div className="w-full ">
            <div className="">
              <Nav onSubmit={inputText} />

              <Recommended recomendedText={recomendedText} />
            </div>

            <div className="w-2/12 block md:hidden ">
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
            </div>

            <AllProducts
              products={
                filteredProducts.length === 0 ? ProductsData : filteredProducts
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
