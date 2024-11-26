import React from "react";
const Navbar = () => {
  return (
    <nav className="flex p-2  bg-blue-600 justify-between w-full fixed top-0">
      <div className="font-bold text-2xl text-orange-600">Fashion Hub</div>
      <div className="flex gap-8 justify-between">
        <div className="flex gap-1 items-center bg-[#ffffff] px-4 rounded-full text-orange-600 font-bold">
          <input
            type="search"
            placeholder="Search"
            className="px-3 h-8 w-60 rounded-full font-bold hidden sm:block"
          />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="flex gap-4 text-orange-600 font text-2xl mt-1">
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-user"></i>
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
