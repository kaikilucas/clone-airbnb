import React from "react";
import airbnb from "../assets/airbnb.svg";
import {
  Globe,
  List,
  User,
  MagnifyingGlass,
  Coffee,
  Fire,
  FlyingSaucer,
} from "@phosphor-icons/react";
import { GrKey } from "react-icons/gr";
import { TbBeach } from "react-icons/tb";
import { MdOutlineOtherHouses, MdOutlinePool } from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { LuGrape } from "react-icons/lu";
import { GiIsland } from "react-icons/gi";

import emfrenteapraia from "../assets/icon/emfrenteapraia.svg";
import cabanas from "../assets/icon/cabanas.svg";
import bandejadecomida from "../assets/icon/bandejacomida.svg";

import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isHoveredB1, setIsHoveredB1] = useState(false);
  const [isHoveredB2, setIsHoveredB2] = useState(false);
  const [isHoveredB3, setIsHoveredB3] = useState(false);
  const [isHoveredI1, setIsHoveredI1] = useState(false);
  const [isClick1, setIsClick1] = useState(false);

  const handleMouseclick = () => {
    setIsClick1(!isClick1);
  };

  const handleCloseMenu = () => {
    if (isClick1 === true) {
      setIsClick1(false);
    }
  };

  const handleMouseEnterI1 = () => {
    setIsHoveredI1(true);
  };

  const handleMouseEnterB1 = () => {
    setIsHoveredB1(true);
    setIsHoveredB2(false);
    setIsHoveredB3(false);
  };

  const handleMouseEnterB2 = () => {
    setIsHoveredB1(true);
    setIsHoveredB2(true);
    setIsHoveredB3(false);
  };

  const handleMouseEnterB3 = () => {
    setIsHoveredB1(false);
    setIsHoveredB2(true);
    setIsHoveredB3(true);
  };

  const handleMouseEnterB4 = () => {
    setIsHoveredB1(false);
    setIsHoveredB2(false);
    setIsHoveredB3(true);
  };

  const handleMouseLeave = () => {
    setIsHoveredB1(false);
    setIsHoveredB2(false);
    setIsHoveredB3(false);
    setIsHoveredI1(false);
  };

  return (
    <header onClick={handleCloseMenu} id="aqui" className="header">
      {/* <nav className=" h-[70px] grid grid-cols-3  bg-neutral-100 ">
      <div className="h-full col-start-2 col-span-1 flex items-center justify-center ">
        <span className="text-neutral-700 text-xs font-['Poppins']">
          Hey,
        </span>
        <span className="text-neutral-700 text-xs font-semibold font-['Poppins']">
          {" "}
          Where are you going?
        </span>
      </div>
      <div className="h-full flex justify-end  items-center  mb-4  mx-3 ">
        <img src={Close} className="max-w-3 max-h-3 " alt="React logo" />
      </div>
    </nav> */}
      <div className="camada">
        <nav className="nav">
          <a href="#" className="logo">
            <img
              src={airbnb}
              className="w-[80px] sm:w-[118px] h-[64px] "
              alt="logo"
            />
          </a>

          <ul className="lista">
            <li className="font-semibold">
              <a href="#">Acomodações</a>
            </li>
            <li className="hover:rounded-full hover:bg-stone-100 w-[130px] h-[40px] justify-center items-center flex ml-2 ">
              <a href="#" className="mx-5 ">
                Experiências
              </a>
            </li>
            <li className="hover:rounded-full hover:bg-stone-100  w-[160px] h-[40px] justify-center items-center flex">
              <a href="#">Experiências online</a>
            </li>
          </ul>

          <div className="w-[50px] sm:w-full  items-center flex justify-center sm:justify-end  h-[80px]  ">
            <ul className="flex sm:justify-end items-center gap-2 ">
              <li className="hidden sm:block  hover:rounded-full hover:bg-stone-100  ">
                <a
                  href="#"
                  className=" w-[220px] h-[30px] flex items-center justify-center text-right font-semibold   text-[14px] "
                >
                  Anuncie seu espaço no Airbnb
                </a>
              </li>
              <li className="hidden sm:block  hover:rounded-full h-[30px] w-[40px]  hover:bg-stone-100">
                <a
                  href="#"
                  className=" flex justify-center items-center h-[30px]"
                >
                  {" "}
                  <Globe size={19} className="" />
                </a>
              </li>

              <li onClick={handleMouseclick} className=" flex items-center">
                <button className="border flex items-center justify-center w-[86px]  h-[48px] rounded-full hover:shadow-md  ">
                  <li className="flex  gap-2 ">
                    <List size={20} /> <User size={20} />
                  </li>
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div
          className={` w-full flex  justify-end ${
            isClick1 ? "block" : "hidden"
          } `}
        >
          <ul className="border shadow-md rounded-lg absolute w-[230px] h-[230px] flex flex-col items-start justify-between bg-white py-2  px-5 ">
            <li>
              <a href="#">Cadastre-se</a>
            </li>

            <li className="">
              <a href="#">Entrar</a>
            </li>

            <li className="w-[230px] -mx-[21px]">
              <hr className="border-l " />
            </li>

            <li>
              <a href="#">Cartões de presentes</a>
            </li>
            <li className="">
              <a href="#">Anuncie seu espaço no airbnb</a>
            </li>

            <li>
              <a href="#">Central de ajuda</a>
            </li>
          </ul>
        </div>
        <div className=" flex justify-center items-center hidden sm:flex  ">
          <nav className="flex  border  rounded-full h-[66px] shadow-lg">
            <button
              onMouseEnter={handleMouseEnterB1}
              onMouseLeave={handleMouseLeave}
              id="b1"
              className=" hover:rounded-full w-[284px]  flex flex-col hover:bg-stone-100  justify-center  "
            >
              <label
                className="font-semibold cursor-pointer ml-8  text-[12px]"
                htmlFor="campo"
              >
                {" "}
                Onde
              </label>
              <input
                id="campo"
                className=" w-[218px] h-[18px] text-[14px] ml-8 "
                type="search"
                placeholder="Buscar destinos"
              />
            </button>
            <div id="l1" className="flex items-center h-[60px] w-[1px]">
              <div
                className={`linha border-l h-[30px] ${
                  isHoveredB1 ? "border-none" : ""
                } `}
              ></div>
            </div>
            <button
              onMouseEnter={handleMouseEnterB2}
              onMouseLeave={handleMouseLeave}
              id="b2"
              className=" hover:rounded-full   w-[142.5px]  hover:bg-stone-100  flex flex-col justify-center"
            >
              <label
                className="font-semibold cursor-pointer ml-8  text-[12px]"
                htmlFor="campo2"
              >
                Check-in
              </label>
              <input
                className=" w-[218px] h-[18px] text-[14px] ml-8"
                type="text"
                placeholder="insira as datas"
                id="campo2"
              />
            </button>
            <div id="l2" className="flex items-center h-[60px] w-[1px]">
              <div
                className={`linha border-l h-[30px] ${
                  isHoveredB2 ? "border-none" : ""
                } `}
              ></div>
            </div>
            <button
              onMouseEnter={handleMouseEnterB3}
              onMouseLeave={handleMouseLeave}
              id="b3"
              className=" hover:rounded-full   w-[142.5px]  hover:bg-stone-100 flex flex-col justify-center "
            >
              <label
                className="font-semibold cursor-pointer ml-8  text-[12px]"
                htmlFor="campo3"
              >
                Checkout
              </label>
              <input
                className=" w-[218px] h-[18px] text-[14px] ml-8"
                type="text"
                placeholder="Insira as datas"
                id="campo3"
              />
            </button>
            <div id="l3" className="flex items-center h-[60px] w-[1px]">
              <div
                className={`linha border-l h-[30px] ${
                  isHoveredB3 ? "border-none" : ""
                } `}
              ></div>
            </div>
            <button
              className={` flex hover:rounded-full   hover:bg-stone-100  w-[280px] ${
                isHoveredI1 ? "hover:border-none hover:bg-white" : ""
              } `}
            >
              <nav
                onMouseEnter={handleMouseEnterB4}
                onMouseLeave={handleMouseLeave}
                id="b4"
                className=" flex h-[66px] w-[224px] items-center "
              >
                <div className=" flex  justify-start w-[230px] flex-wrap ">
                  <label
                    className="font-semibold cursor-pointer ml-8  text-[12px]    "
                    htmlFor="campo3"
                  >
                    Quem
                  </label>

                  <input
                    className=" w-[218px] h-[18px] text-[14px] ml-8 flex justify-start "
                    type="text"
                    placeholder="Hóspedes?"
                    id="campo4"
                  />
                </div>
              </nav>
              <div
                onMouseEnter={handleMouseEnterI1}
                onMouseLeave={handleMouseLeave}
                className="w-[60px]  h-[66px] flex items-center justify-end rounded-full  "
              >
                <div className=" flex rounded-full justify-center w-[48px]  h-[48px]  items-center bg-red-500 hover:bg-red-600 mr-[6px] ">
                  <div>
                    <MagnifyingGlass size={20} color="white" />
                  </div>
                </div>
              </div>
            </button>
          </nav>
        </div>
      </div>
      <nav className="h-[90px] px-[80px] hidden md:block  ">
        <div className=" h-[78px] flex items-center justify-around w-full rounded-full  ">
          <button className="">
            <FlyingSaucer size={22} />
            Uau!
          </button>
          <button className="">
            <Fire size={22} />
            Em alta
          </button>
          <button className="">
            <GrKey size={22} />
            Novidade
          </button>
          <button className="">
            <TbBeach size={22} />
            Praia
          </button>
          <button className="">
            <MdOutlineOtherHouses size={22} />
            Microcasas
          </button>
          <button className="">
            <img
              src={cabanas}
              alt="cabanas"
              className="w-[30px] h-[22px] "
            ></img>
            chalés
          </button>
          <button className="">
            <img
              src={emfrenteapraia}
              alt="em frente a praia"
              className="w-[30px] h-[30px]"
            ></img>
            Em frente à praia
          </button>

          <button className="">
            <img
              src={bandejadecomida}
              alt="bandeija de comida"
              className="w-[30px] h-[30px]"
            ></img>
            Luxo
          </button>
          <button className="">
            <Coffee size={22} />
            Pousadas
          </button>

          <button className="">
            <MdOutlinePool size={22} />
            Piscinas Incríveis
          </button>
          <button className="">
            <HiOutlineHomeModern size={22} />
            Mansões
          </button>
          <button className="">
            <LuGrape size={22} />
            Vinhedos
          </button>
          <button className="">
            <GiIsland size={22} />
            Tropical
          </button>
        </div>
      </nav>
    </header>
  );
}

// const btn1 = document.getElementById("b1");
// const btn2 = document.getElementById("b2");
// const btn3 = document.getElementById("b3");
// const btn4 = document.getElementById("b4");

// const linha1 = document.getElementById("l1");
// const linha2 = document.getElementById("l2");
// const linha3 = document.getElementById("l3");

// btn1.addEventListener("mouseover", () => {
//   linha1.classList.toggle("hidden");
// });

// btn3.addEventListener("mouseover", () => {
//   linha2.classList.toggle("hidden");
//   linha3.classList.toggle("hidden");
//   // linha1.className += "hidden ";
// });

// btn4.addEventListener("mouseover", () => {
//   linha3.classList.toggle("hidden");
//   // linha1.className += "hidden ";
// });
