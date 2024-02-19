import Close from "./assets/Close.svg";
import airbnb from "./assets/airbnb.svg";
import icon from "./assets/icon/no-mundo-todo.svg";
import icon2 from "./assets/icon/menu_svg.svg";
import icon3 from "./assets/icon/people.svg";

function App() {
  return (
    <div className="m-auto mx-auto rounded ">
      <header className="w-full border h-[258px]">
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
        <div className=" w-full  h-[168px]  px-[80px]  border">
          <nav className="flex mt-[7px] justify-between h-[80px]">
            <div className="border w-full  items-center">
              <img src={airbnb} className="w-[118px] h-[64px]" alt="logo" />
            </div>
            <div className=" border text-center w-full font-semibold h-[48px]  text-[16px] my-auto">
              <button>Acomodações</button>
              <button className="mx-5">Experiências</button>
              <button>Experiências online</button>
            </div>
            <div className="border w-full h-[80px]  inline">
              <nav className="w-full flex">
                <button className="border w-[492px] flex items-center justify-end text-right font-semibold  text-[14px] ">
                  Anuncie seu espaço no Airbnb
                  <button className="border  mx-[10px]">
                    <img src={icon} alt="icon1" className="max-w-5 mt-[2px]" />
                  </button>
                </button>
                <button className="border  w-[86px] h-[48px] rounded-full  ">
                  <div className="flex justify-center">
                    <img
                      className="max-w-3 max-h-3 mx-[4px]"
                      src={icon2}
                      alt="icon2"
                    />
                    <img
                      className="max-w-5 max-h-5 mx-[3px]"
                      src={icon3}
                      alt="icon3"
                    />
                  </div>
                </button>
              </nav>
              <nav className="border  w-full "></nav>
            </div>
          </nav>
          <div className="flex justify-center items-center">
            <nav className="w-[853px] flex justify-between  border rounded-full h-[66px]">
              <button className="border rounded-full w-full">1</button>
              <button className="border rounded-full w-full">2</button>
              <button className="border rounded-full w-full">3</button>
              <button className="border rounded-full w-full">4</button>
            </nav>
          </div>
        </div>
        <nav className="h-[90px] w-full  border px-[80px] ">
          <div className=" border h-[78px] flex items-center justify-around w-full rounded-full ">
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
      <main className="border px-[80px]">
        <section className="w-full border flex ">
          <div className="flex justify-between w-full">
            <article className="w-[315px] h-[443px] border rounded-[20px]">
              1 artigo
            </article>
            <article className="w-[315px] h-[443px] border rounded-[20px]">
              2 artigo
            </article>
            <article className="w-[315px] h-[443px] border rounded-[20px]">
              3 artigo
            </article>
            <article className="w-[315px] h-[443px] border rounded-[20px]">
              4 artigo
            </article>
          </div>
        </section>
        <section>
          <article>1 artigo</article>
          <article>2 artigo</article>
          <article>3 artigo</article>
          <article>4 artigo</article>
        </section>
        <section>
          <article>1 artigo</article>
          <article>2 artigo</article>
          <article>3 artigo</article>
          <article>4 artigo</article>
        </section>
        <section>
          <article>1 artigo</article>
          <article>2 artigo</article>
          <article>3 artigo</article>
          <article>4 artigo</article>
        </section>
        <section>
          <article>1 artigo</article>
          <article>2 artigo</article>
          <article>3 artigo</article>
          <article>4 artigo</article>
        </section>
        <section>
          <article>1 artigo</article>
          <article>2 artigo</article>
          <article>3 artigo</article>
          <article>4 artigo</article>
        </section>
      </main>
      <footer>rodapé</footer>
    </div>
  );
}

export default App;
