import React from "react";

const Top = () => {
  return (
    <div className="grid rounded-lg box-border mt-12 bg-white pt-20">
      <div className="text-pink-600 font-bold font-serif text-center p-4 pt-8">
        <h1 className=" text-4xl">
          Welcom to new <br />
          Fashion World for the F Ones.
        </h1>
        <h3 className="text-yellow-600">
          "Where style meets soul – Redefine your fashion journey"
        </h3>
      </div>
      <div className="mt-2 sm:w-full">
        <img src="/topbanner.jpg" alt="top banner" className="sm:w-full" />
      </div>
    </div>
  );
};
export default Top;
