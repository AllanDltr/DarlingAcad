export default function Dashboard() {
  return (
    <div className="Section self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
      <div className="ImageContainer grow shrink basis-0 h-[416px] py-5 justify-start items-start flex">
        <div className="Image w-[520px] h-[376px] bg-zinc-300 bg-opacity-50 rounded-md justify-center items-center flex">
          <img
            className="DallE20240214135641CreateAnImageShowingTheViewOverTheShoulderOfSomeoneWorkingOnTheirLaptopSeenFromBehindThePersonSPerspective1 w-[520px] h-[376px] rounded-md"
            src="https://via.placeholder.com/520x376"
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
            <div className="Frame w-[60px] h-[60px] bg-black bg-opacity-5 rounded-[30px] justify-center items-center flex">
              <img
                className="DallE20240214142504CreateAnImageOfAPadlockDesignedWithHighDetailAndRealism1 w-[60px] h-[60px] rounded-[30px]"
                src="https://via.placeholder.com/60x60"
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
            <div className="Subtitle w-[200px] text-right text-black text-xl font-normal font-['AvantGarde Bk BT'] leading-7">
              3/5 Cours Complétés
            </div>
          </div>
          <div className="inline-flex items-center self-stretch justify-center gap-4 py-4 Item">
            <div className="Frame w-[60px] h-[60px] bg-black bg-opacity-5 rounded-[30px] justify-center items-center flex">
              <img
                className="DallE20240214142840CreateASimpleImageThatRepresentsTheBasicsOfWebDevelopment1 w-[60px] h-[60px] rounded-[30px]"
                src="https://via.placeholder.com/60x60"
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
            <div className="Subtitle text-right text-black text-xl font-normal font-['AvantGarde Bk BT'] leading-7">
              Certification obtenue
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
