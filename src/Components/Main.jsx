import React from "react";
import "./css/Main.css";
import dados from "../../back-end/dados.js";
function Main() {
  return (
    <main className=" w-full sm:px-[80px]   ">
      <div className="grid grid-cols-6">
        {dados.map((acomodacao, index) => (
          <div key={acomodacao.id} className="">
            <img src={acomodacao.imagens[0]} className=""></img>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;
