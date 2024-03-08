import React from "react";
import airbnb from "../assets/airbnb.svg";
import { categorias } from "../../back-end/dados";

import { Globe, List, User, MagnifyingGlass } from "@phosphor-icons/react";

import { useState } from "react";
import "./css/Navbar.css";

// Core modules imports are same as usual
import { Pagination, Navigation } from "swiper/modules";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react";

// Styles must use direct files imports
import "swiper/css"; // core Swiper
import "swiper/css/navigation"; // Navigation module
import "swiper/css/pagination"; // Pagination module

export default function Navbar() {
  const [idClicado, setIdClicado] = useState(1);
  const [elementoAtivo, setElementoAtivo] = useState(1);
  const [isHoveredB1, setIsHoveredB1] = useState(false);
  const [isHoveredB2, setIsHoveredB2] = useState(false);
  const [isHoveredB3, setIsHoveredB3] = useState(false);
  const [isHoveredI1, setIsHoveredI1] = useState(false);
  const [isClick1, setIsClick1] = useState(false);

  const selecionarElemento = (id) => {
    setElementoAtivo(id);
  };

  const handleClick = (e, id) => {
    console.log("A categoria clicada atual é: " + id);
    setIdClicado(id);
  };

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
    <header onClick={handleCloseMenu} id="aqui" className="header ">
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
            <li
              id="1"
              className={` hover:rounded-full hover:bg-stone-100 w-[130px] h-[40px] flex items-center justify-center   ${
                elementoAtivo === 1 ? "activee hover:bg-white" : ""
              }`}
            >
              <a href="#" onClick={() => selecionarElemento(1)}>
                Acomodações
              </a>
            </li>
            <li
              className={`hover:rounded-full hover:bg-stone-100 w-[130px] h-[40px] justify-center items-center flex ml-2 ${
                elementoAtivo === 2 ? "activee   hover:bg-white" : ""
              }`}
            >
              <a
                href="#"
                onClick={() => selecionarElemento(2)}
                className="mx-5"
              >
                Experiências
              </a>
            </li>
            <li
              className={`hover:rounded-full hover:bg-stone-100 w-[160px] h-[40px] justify-center items-center flex ${
                elementoAtivo === 3 ? "activee   hover:bg-white" : ""
              }`}
            >
              <a href="#" onClick={() => selecionarElemento(3)}>
                Experiências online
              </a>
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
          className={` w-full flex  justify-end sm:mt-0 -mt-5 ${
            isClick1 ? "block" : "hidden"
          } `}
        >
          <ul className="border shadow-md rounded-lg absolute w-[230px] h-[230px] flex flex-col items-start justify-between bg-white py-2  px-5 z-50 ">
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
      <nav className="">
        <div className="sm:h-[90px] sm:w-full  sm:px-[80px]   row sm:mt-0 -mt-[70px] w-full sm:block bg-white ">
          <Swiper
            breakpoints={{
              100: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 1,
              },

              //JANELA MAIOR QUE 1400
              1400: {
                slidesPerView: 10,
                slidesPerGroup: 10,
                spaceBetween: 7,
              },

              //JANELA MAIOR QUE 1600
              1600: {
                slidesPerView: 14,
                slidesPerGroup: 13,
                spaceBetween: 7,
              },
            }}
            className="sw-categoria"
            navigation={true}
            pagination={false}
            modules={[Pagination, Navigation]}
          >
            {categorias.map((categoria, index) => (
              <SwiperSlide
                onClick={(e) => handleClick(e, categoria.id)}
                key={categoria.id}
                virtualIndex={index}
                className={` sw-slide cursor-pointer  ${
                  categoria.id === idClicado ? "active" : ""
                } `}
              >
                <img
                  className="sw-img "
                  src={categoria.imagem}
                  alt={categoria.titulo}
                />
                <div className="mt-2">{categoria.titulo}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </nav>
    </header>
  );
}
