import React from "react";
const Footer = () => {
  return (
    <footer className="py-2 bg-blue-600 text-[#ffffff] h-100%">
      <div className="p-2 flex flex-wrap justify-between">
        <div className="text-2xl font-bold">Follow Us</div>
        <div className="">
          <ul class="flex flex-wrap gap-4 text-2xl sm:gap-8">
            <li>
              <a
                href="https://www.facebook.com/piyush.dhanawat.98?mibextid=kFxxJD"
                target="_blank"
                class="hover:text-black hover:text-4xl"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/piyush26102?igsh=NnVwdWhvb2J3aGtr"
                target="_blank"
                class="hover:text-black hover:text-4xl"
              >
                <i class="fa-brands fa-square-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/piyush26102?t=ef1hbUpJHfDTJxU0WHruug&s=09"
                target="_blank"
                class="hover:text-black hover:text-4xl"
              >
                <i class="fa-brands fa-square-x-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/918890587589"
                class="hover:text-black hover:text-4xl"
                target="_blank"
              >
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hover:text-black hover:text-4xl"
                target="_blank"
              >
                <i class="fa-brands fa-telegram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/piyush-dhanawat-761579227"
                target="_blank"
                class="hover:text-black hover:text-4xl"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:piyush26102@gmail.com"
                class="hover:text-black hover:text-4xl"
              >
                <i class="fa-solid fa-envelope"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Piyush26102"
                target="_blank"
                class="hover:text-black hover:text-4xl"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className=" text-center py-4 text-orange-600 font-bold">
        Copyright&#169;Piyush Dhanawat
      </div>
    </footer>
  );
};
export default Footer;
