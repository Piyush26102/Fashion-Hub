import React from "react";
const Section = () => {
  return (
    <section className="grid text-white font-bold rounded-2xl p-4 gap-2 mt-10 m-2 sm:flex justify-between">
      <div className="font-serif m-4 sm:w-3/4">
        <h3 className="text-orange-600 font-bold underline text-2xl">
          We Serve
        </h3>
        <p>
          This is my first React project. It is a single page Web App which
          serves a retail or small E-Commerce website.
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit placeat
          delectus neque ducimus animi officiis repellendus hic facere voluptas
          dignissimos id laudantium nihil, nisi tenetur ullam, similique
          ratione? Voluptas ipsum dolor sequi! Suscipit eligendi, quisquam quae,
          dolorum cumque ratione similique soluta provident aspernatur modi quod
          doloremque iste corrupti corporis iure?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
          voluptas, adipisci earum veritatis blanditiis quas consequuntur,
          officia ipsa quos optio molestias! Molestiae, in? Quod, animi
          expedita? Quam eligendi sit voluptatibus.
        </p>
      </div>
      <div className="bg-blue-200 p-2 rounded-full w-fit mx-auto">
        <img src="/product11.png" alt="women outfit" className=" sm:h-full" />
      </div>
    </section>
  );
};
export default Section;
