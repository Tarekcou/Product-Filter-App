import React, { useState } from "react";
import { Button, Input } from "react-daisyui";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
interface Props {
  onSubmit: (query: string) => void;
}

const Nav = ({ onSubmit }: Props) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    // console.log(e.target.value);
    onSubmit(searchText);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchText("");
    onSubmit(searchText);

    // console.log(searchText);
  };

  return (
    <nav className="flex justify-between items-center pr-12 w-full">
      <form onSubmit={handleSubmit} className="flex rounded-xl w-9/12">
        <Input
          className="border-indigo-50 shadow-lg w-8/12"
          type="text"
          placeholder="Enter your Shoes"
          onChange={handleChange}
          value={searchText}
        />
        <Button className="shadow-xl btn btn-success">Submit</Button>
      </form>

      <div className="flex gap-5 text-2xl">
        <a href="#">
          <FiHeart />
        </a>
        <a href="">
          <AiOutlineShoppingCart />
        </a>
        <a href="">
          <AiOutlineUserAdd />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
