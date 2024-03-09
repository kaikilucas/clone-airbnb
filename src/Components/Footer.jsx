import React from "react";
import { Heart, Compass, UserCircle } from "@phosphor-icons/react";
import "./css/Footer.css";
import { useState } from "react";

function Footer() {
  const [click, setClick] = useState(1);

  const handleClick = (e) => {
    setClick(e);
  };

  return (
    <footer>
      <div>
        <ul className="border-gray-500 border-t flex justify-between  h-[70px] items-center bg-white  fixed bottom-0  z-50">
          <li className=" ">
            <a
              onClick={() => handleClick(1)}
              href="#"
              className={`w-[160px] h-[70px] flex flex-col items-center justify-center opacity-[0.5] ${
                click === 1 ? "activefooter opacity-[1]" : ""
              }`}
            >
              <Compass size={27} weight="duotone" className="mb-[5px]" />
              Explorar
            </a>
          </li>
          <li className="">
            <a
              onClick={() => handleClick(2)}
              href="#"
              className={`w-[160px] h-[70px] flex flex-col items-center justify-center opacity-[0.5] ${
                click === 2 ? "activefooter opacity-[1]" : ""
              }`}
            >
              {" "}
              <Heart size={27} weight="duotone" className="mb-[5px]" />
              Favoritos
            </a>
          </li>
          <li className=" ">
            <a
              onClick={() => handleClick(3)}
              href="#"
              className={`w-[160px] h-[70px] flex flex-col items-center justify-center opacity-[0.5] ${
                click === 3 ? "activefooter  opacity-[1]" : ""
              }`}
            >
              <UserCircle size={27} weight="duotone" className="mb-[5px]" />
              Usuário
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
