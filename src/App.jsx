import Close from "./assets/Close.svg";
import airbnb from "./assets/airbnb.svg";
import icon from "./assets/icon/no-mundo-todo.svg";
import icon2 from "./assets/icon/menu_svg.svg";
import icon3 from "./assets/icon/people.svg";

function App() {
  return (
    <div className="m-auto mx-auto rounded ">
      <header className="w-full h-[328px]">
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
        <div className=" w-full h-[120px]  px-[52px]  border">
          <nav className="grid grid-cols-3 my-[11px]">
            <div className="border flex items-center">
              <img src={airbnb} className="w-[70px] h-[30px]" alt="logo" />
            </div>
            <div className="flex justify-center border font-semibold  text-[11px] my-auto">
              <button>Acomodações</button>
              <button className="mx-5">Experiências</button>
              <button>Experiências online</button>
            </div>
            <div className="border grid grid-cols-3 ">
              <nav className="col-span-2 flex justify-end w-[330px]">
                <button className="border text-[11px] font-semibold text-[9px] ">
                  Anuncie seu espaço no Airbnb
                </button>
                <button className="border mx-[10px]">
                  <img src={icon} alt="icon1" className="max-w-3 max-h-3" />
                </button>
              </nav>
              <nav className="border flex justify-end ">
                <button className="border flex justify-center items-center w-[50px] h-[30px] rounded-full flex  ">
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
                </button>
              </nav>
            </div>
          </nav>
          <div className="w-full flex justify-center items-center h-[88px]">
            <nav>navegação</nav>
          </div>
        </div>
      </header>
      <main className="px-8">
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
