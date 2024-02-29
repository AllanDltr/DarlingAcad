export default function Hero() {
  return (
    <div className="Section self-stretch px-[170px] py-[60px] bg-zinc-800 justify-center items-center gap-[60px] inline-flex">
      <div className="inline-flex flex-col items-start justify-start gap-6 Container grow shrink basis-0">
        <div className="Title self-stretch text-white text-[40px] font-bold font-['AvantGarde Bk BT'] leading-[48px]">
          Bienvenue sur Darling’s Academy
        </div>
        <div className="Description self-stretch text-white text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
          Démarrez votre apprentissage !
        </div>
        <div className="inline-flex items-start justify-start gap-3 Button">
          <div className="inline-flex flex-col items-center justify-center w-40 p-3 border rounded-lg Seconday bg-cyan-700 border-cyan-700">
            <a
              href="#"
              className="Title text-white text-base font-normal font-['AvantGarde Bk BT'] leading-normal"
            >
              En voir plus
            </a>
          </div>
          <div className="inline-flex flex-col items-center justify-center w-40 p-3 bg-pink-500 rounded-lg Primary">
            <a
              href="#"
              className="Title text-white text-base font-normal font-['AvantGarde Bk BT'] leading-normal"
            >
              Commencer
            </a>
          </div>
        </div>
      </div>
      <div className="ImageContainer grow shrink basis-0 w-90 h-[400px] py-1 justify-center items-start flex">
        <div className="flex items-center justify-center bg-opacity-50 rounded-md Image bg-zinc-300">
          <img
            className="Adef6e9d77ff4801Ac785842899d741a1 w-hero h-[400px]"
            src="/HeroSection.webp"
          />
        </div>
      </div>
    </div>
  );
}
