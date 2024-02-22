import React from "react";
import airbnb from "../assets/airbnb.svg";
import { Globe, List, User } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <header className="header">
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
          <div className="logo">
            <img
              src={airbnb}
              className="w-[80px] sm:w-[118px] h-[64px] "
              alt="logo"
            />
          </div>

          <ul className="lista">
            <li>
              <a href="#">Acomodações</a>
            </li>
            <li>
              <a href="#" className="mx-5">
                Experiências
              </a>
            </li>
            <li>
              <a href="#">Experiências online</a>
            </li>
          </ul>

          <div className="w-[50px] sm:w-full  items-center flex justify-center sm:justify-end  h-[80px]  ">
            <ul className="flex sm:justify-end items-center gap-2 ">
              <li className="hidden sm:block">
                <a
                  href="#"
                  className=" w-[250px] flex items-center justify-end text-right font-semibold  text-[14px] "
                >
                  Anuncie seu espaço no Airbnb
                </a>
              </li>
              <li className="hidden sm:block">
                <a href="#" className=" mx-[10px]">
                  {" "}
                  <Globe size={20} />
                </a>
              </li>
              <li>
                <button className="border flex items-center justify-center w-[86px]  h-[48px] rounded-full  ">
                  <li className="flex flex-rom gap-2 ">
                    <List size={20} /> <User size={20} />
                  </li>
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div className=" flex justify-center items-center hidden sm:flex  ">
          <nav className="w-[853px] flex justify-between  border rounded-full h-[66px]">
            <button className=" rounded-full w-full">1</button>
            <button className=" rounded-full w-full">2</button>
            <button className=" rounded-full w-full">3</button>
            <button className=" rounded-full w-full">4</button>
          </nav>
        </div>
      </div>
      <nav className="h-[90px] px-[80px] hidden md:block  ">
        <div className=" h-[78px] flex items-center justify-around w-full rounded-full  ">
          <button className="border">1</button>
          <button className="border">2</button>
          <button className="border">3</button>
          <button className="border">4</button>
          <button className="border">5</button>
          <button className="border">6</button>
          <button className="border">7</button>
          <button className="border">8</button>
          <button className="border">9</button>
          <button className="border">10</button>
          <button className="border">11</button>
          <button className="border">12</button>
          <button className="border">13</button>
          <button className="border">14</button>
          <button className="border">15</button>
          <button className="border">16</button>
        </div>
      </nav>
    </header>
  );
}
