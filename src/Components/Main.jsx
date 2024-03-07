import React from "react";
import "./css/Main.css";
import { acomodacoes } from "../../back-end/dados";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper required modules
// import { Navigation, Pagination } from 'swiper/modules';

// // Styles must use direct files imports
// import 'swiper/swiper.scss'; // core Swiper
// import 'swiper/modules/navigation.scss'; // Navigation module
// import 'swiper/modules/pagination.scss'; // Pagination module

// Core modules imports are same as usual
import { Pagination, Navigation } from "swiper/modules";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react";

// Styles must use direct files imports
import "swiper/css"; // core Swiper
import "swiper/css/navigation"; // Navigation module
import "swiper/css/pagination"; // Pagination module

import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

{
  /* <FaArrowLeft /> <FaArrowRight /> */
}

function Main() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <main className=" w-full sm:px-[80px] sm:mt-0 mt-[80px] ">
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 xl:grid-cols-6  p-6 gap-5">
        {acomodacoes.map((acomodacao, index) => (
          <div key={acomodacao.id} className="">
            <Swiper
              className="img-content"
              navigation={true}
              pagination={true}
              modules={[Pagination, Navigation]}
            >
              {acomodacao.imagens.map((imagem, index) => (
                <SwiperSlide
                  key={index}
                  className="slideac w-full h-[250px] cursor-pointer"
                >
                  <img
                    src={imagem}
                    className="img h-[250px] w-full object-cover object-left "
                  ></img>
                </SwiperSlide>
              ))}
            </Swiper>
            <p className="flex justify-between mt-3 mb-0  ">
              <span
                style={{
                  display: "block",
                  maxWidth: "200px",
                }}
                className="font-bold truncate"
              >
                {" "}
                {acomodacao.cidade}, {acomodacao.pais}
              </span>
              <span className=" flex items-center gap-1">
                {" "}
                <i>
                  <FaStar size={13} />{" "}
                </i>
                {acomodacao.nota}
              </span>
            </p>
            <p className="text-slate-500 ">
              {getRandomInt(10, 800)} KM de distância
            </p>
            <p className="text-slate-500 ">
              {getRandomInt(1, 31)} de jan - {getRandomInt(1, 28)} de fev
            </p>
            <p className="font-bold mt-3 mb-6">
              R$ {acomodacao.preco.toLocaleString("pt-br")} noite
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;
