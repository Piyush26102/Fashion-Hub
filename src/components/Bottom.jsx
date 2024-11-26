import React from "react";
const Bottom = () => {
  return (
    <section className="grid bg-blue-400 mt-10 grid-cols-2 font-serif font-bold sm:grid-cols-4">
      <div className="m-8">
        <h3 className="text-[#FFFFFF] underline text-xl">Help</h3>
        <ul>
          <li className="hover:underline">
            <a href="#">Catalogue</a>
          </li>
          <li className="hover:underline">
            <a href="#">FAQ</a>
          </li>
          <li className="hover:underline">
            <a href="#">Order Status</a>
          </li>
          <li className="hover:underline">
            <a href="#">Brands</a>
          </li>
        </ul>
      </div>
      <div className="m-8">
        <h3 className="text-[#FFFFFF] underline text-xl">Join Us</h3>
        <ul>
          <li className="hover:underline">
            <a href="#">Blog</a>
          </li>
          <li className="hover:underline">
            <a href="#">Careers</a>
          </li>
          <li className="hover:underline">
            <a href="#">Community</a>
          </li>
          <li className="hover:underline">
            <a href="#">Accessibility</a>
          </li>
        </ul>
      </div>
      <div className="m-8">
        <h3 className="text-[#FFFFFF] underline text-xl">Legals</h3>
        <ul>
          <li className="hover:underline">
            <a href="#">Pirvacy Policy</a>
          </li>
          <li className="hover:underline">
            <a href="#">Terms & Conditions</a>
          </li>
          <li className="hover:underline">
            <a href="#">CA Transparency</a>
          </li>
        </ul>
      </div>
      <div className="m-8">
        <h3 className="text-[#FFFFFF] underline text-xl">Get in Touch</h3>
        <p>Near Manni Ka Bar, Hospital Road, Company Bag, Alwar</p>
      </div>
    </section>
  );
};
export default Bottom;
