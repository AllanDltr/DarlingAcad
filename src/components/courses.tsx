export default function Courses() {
  return (
    <div className="Section self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
      <div className="List grow shrink basis-0 h-[348px] justify-center items-center gap-10 flex">
        <div className="inline-flex flex-col items-center justify-start bg-opacity-50 border rounded-md Card grow shrink basis-0 bg-stone-300 border-stone-300 border-opacity-10">
          <div className="inline-flex items-center w-full h-60">
            <div className="relative w-full bg-opacity-50 Image h-60 bg-zinc-300">
              <img
                className="w-full h-60 left-0 top-[-0.33px] absolute rounded-tl-md rounded-tr-md"
                src="Introduction.webp"
              />
              <div className="absolute top-0 left-0 inline-flex flex-col items-center justify-center px-2 py-1 bg-black bg-opacity-75 Tag rounded-tl-md rounded-br-md">
                <div className="Text text-white text-xs font-normal font-['AvantGarde Bk BT'] leading-none">
                  Débutant
                </div>
              </div>
            </div>
          </div>
          <div className="TextContent self-stretch h-[108px] p-3 flex-col justify-start items-start gap-1 flex">
            <div className="Title self-stretch text-black text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
              Introduction au Javascript
            </div>
            <div className="Subtitle self-stretch text-black text-xl font-normal font-['AvantGarde Bk BT'] leading-7">
              2h 30m
            </div>
            <div className="inline-flex items-center self-stretch justify-start gap-2 IconButtons">
              <div className="Icon w-6 h-6 text-center text-black text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
                📚
              </div>
              <div className="Icon w-6 h-6 text-center text-black text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
                🎓
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col items-center justify-start bg-opacity-50 border border-black rounded-md Card grow shrink basis-0 bg-stone-300 border-opacity-10">
          <div className="inline-flex items-start self-auto justify-start w-full ImageContainer h-60">
            <div className="relative w-full bg-opacity-50 Image h-60 bg-zinc-300">
              <div className="Title w-52 h-4 left-[16px] top-[112px] absolute text-center text-black text-xs font-normal font-['AvantGarde Bk BT'] leading-none">
                Course Image
              </div>
              <img
                className="Fd5360c0Bbdd4eb6949eBf121c665bdb1 w-full h-60  top-[-0.33px] absolute rounded-tl-md rounded-tr-md"
                src="/DigitalMarketing.webp"
              />
              <div className="absolute top-0 left-0 inline-flex flex-col items-center justify-center px-2 py-1 bg-black bg-opacity-75 Tag rounded-tl-md rounded-br-md">
                <div className="Text text-white text-xs font-normal font-['AvantGarde Bk BT'] leading-none">
                  Intermédiaire
                </div>
              </div>
            </div>
          </div>
          <div className="TextContent self-stretch h-[108px] p-3 flex-col justify-start items-start gap-1 flex">
            <div className="Title self-stretch text-black text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
              Marketing Digital
            </div>
            <div className="Subtitle self-stretch text-black text-xl font-normal font-['AvantGarde Bk BT'] leading-7">
              4h 15m
            </div>
            <div className="inline-flex items-center self-stretch justify-start gap-2 IconButtons">
              <div className="Icon w-6 h-6 text-center text-black text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
                📚
              </div>
              <div className="Icon w-6 h-6 text-center text-black text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
                🎓
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex flex-col items-start justify-start gap-6 Container grow shrink basis-0">
        <div className="Title self-stretch text-black text-[40px] font-bold font-['AvantGarde Bk BT'] leading-[48px]">
          Cours Premium
        </div>
        <div className="Description self-stretch text-black text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
          Découvrez nos meilleurs cours !
        </div>
        <div className="inline-flex items-start justify-start gap-3 Button">
          <div className="inline-flex flex-col items-center justify-center w-40 p-3 border rounded-lg Seconday bg-cyan-700 border-cyan-700">
            <div className="Title text-white text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
              En voir plus
            </div>
          </div>
          <div className="inline-flex flex-col items-center justify-center w-40 p-3 bg-pink-500 rounded-lg Primary">
            <div className="Title text-white text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
              Abonnez-vous !
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
