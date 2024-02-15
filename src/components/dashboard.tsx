import "../index.css";

export default function Dashboard() {
  return (
    <div className="Section self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
      <div className="flex items-start justify-center w-full h-full py-5 ImageContainer grow shrink basis-0">
        <div className="flex items-center justify-center h-full bg-opacity-50 rounded-md w-90 Image bg-zinc-300">
          <img
            className="w-full h-[400px] rounded-md"
            src="/LaptopWorking.webp"
          />
        </div>
      </div>
      <div className="inline-flex flex-col items-start justify-start gap-6 Container grow shrink basis-0">
        <div className="Title self-stretch text-black text-[40px] font-bold font-['AvantGarde Bk BT'] leading-[48px]">
          Votre parcours
        </div>
        <div className="Description self-stretch text-black text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
          Suivez vos progrès et lancez de nouvelles formations
        </div>
        <div className="inline-flex items-start justify-start gap-3 Button">
          <div className="inline-flex flex-col items-center justify-center w-40 p-3 border rounded-lg Seconday bg-cyan-700 border-cyan-700">
            <div className="Title text-white text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
              En voir plus
            </div>
          </div>
          <div className="inline-flex flex-col items-center justify-center w-40 p-3 bg-pink-500 rounded-lg Primary">
            <div className="Title text-white text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
              Démarrer
            </div>
          </div>
        </div>
        <div className="List self-stretch h-[264px] py-5 flex-col justify-center items-start flex">
          <div className="inline-flex items-center self-stretch justify-center gap-4 py-4 Item">
            <div className="Frame ml-1 w-[60px] h-[60px] bg-black bg-opacity-5 rounded-[30px] justify-center items-center flex">
              <img
                className="Padlock w-[60px] h-[60px] rounded-[30px]"
                src="/Padlock.webp"
              />
            </div>
            <div className="inline-flex flex-col items-start justify-start Frame427318906 grow shrink basis-0">
              <div className="Title self-stretch text-black text-xl font-normal font-['AvantGarde Bk BT'] leading-7">
                Introduction à la cybersécurité
              </div>
              <div className="Subtitle self-stretch text-black text-opacity-50 text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
                En cours de formation
              </div>
            </div>
            <div className="mr-1 Subtitle w-[200px] text-right text-black text-xl font-normal font-['AvantGarde Bk BT'] leading-7">
              3/5 Cours Complétés
            </div>
          </div>
          <div className="inline-flex items-center self-stretch justify-center gap-4 py-4 Item">
            <div className="Frame ml-1 w-[60px] h-[60px] bg-black bg-opacity-5 rounded-[30px] justify-center items-center flex">
              <img
                className="WebDevelopment w-[60px] h-[60px] rounded-[30px]"
                src="/WebDev.webp"
              />
            </div>
            <div className="inline-flex flex-col items-start justify-start Frame427318906 grow shrink basis-0">
              <div className="Title self-stretch text-black text-xl font-normal font-['AvantGarde Bk BT'] leading-7">
                Les fondamentaux du Web
              </div>
              <div className="Subtitle self-stretch text-black text-opacity-50 text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
                Complété
              </div>
            </div>
            <div className="mr-1 Subtitle text-right text-black text-xl font-normal font-['AvantGarde Bk BT'] leading-7">
              Certification obtenue
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
