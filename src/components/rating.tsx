export default function Rating() {
  return (
    <div className="Section self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
      <div className="inline-flex flex-col items-start justify-start gap-6 Container grow shrink basis-0">
        <div className="Title self-stretch text-black text-[40px] font-bold font-['AvantGarde Bk BT'] leading-[48px]">
          Avis des étudiants
        </div>
        <div className="Description self-stretch text-black text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
          Découvrez l’avis de nos anciens étudiants !
        </div>
        <div className="inline-flex items-start justify-start gap-3 Button">
          <div className="inline-flex flex-col items-center justify-center w-40 p-3 border rounded-lg Seconday bg-cyan-700 border-cyan-700">
            <div className="Title text-white text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
              En voir plus
            </div>
          </div>
          <div className="inline-flex flex-col items-center justify-center w-40 p-3 bg-pink-500 rounded-lg Primary">
            <div className="Title text-white text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
              Ecrire un avis
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-48 gap-10 List grow shrink basis-0">
        <div className="inline-flex flex-col items-center justify-center gap-4 p-4 bg-opacity-50 rounded-md Card grow shrink basis-0 bg-stone-300">
          <div className="inline-flex items-center self-stretch justify-start gap-1 User">
            <div className="flex items-center justify-start h-8 gap-2 Avatar grow shrink basis-0">
              <div className="Avatar w-8 h-8 bg-black bg-opacity-10 rounded-[32px] justify-center items-center flex">
                <img
                  className="AmyJohnsonAvatar w-8 h-[33px]"
                  src="/AmyJohnson.webp"
                />
              </div>
              <div className="inline-flex flex-col items-start justify-start Frame427318906 grow shrink basis-0">
                <div className="Title self-stretch h-5 text-black text-sm font-normal font-['AvantGarde Bk BT'] leading-tight">
                  Amy Johnson
                </div>
              </div>
            </div>
            <div className="Frame427318817 w-[58.26px] h-[9.81px] justify-center items-center flex" />
          </div>
          <div className="Title self-stretch h-[72px] text-black text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
            Cette plateforme m'a beaucoup aidé. Vivement recommandé !<br />
          </div>
          <div className="inline-flex items-center self-stretch justify-start gap-2 IconButtons">
            <div className="Icon w-6 h-6 text-center text-black text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
              👍
            </div>
            <div className="Icon w-6 h-6 text-center text-black text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
              📝
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col items-center justify-center gap-4 p-4 bg-opacity-50 rounded-md Card grow shrink basis-0 bg-stone-300">
          <div className="inline-flex items-center self-stretch justify-start gap-1 User">
            <div className="flex items-center justify-start h-8 gap-2 Avatar grow shrink basis-0">
              <div className="Avatar w-8 h-8 bg-black bg-opacity-10 rounded-[32px] justify-center items-center flex">
                <img
                  className="MichaelLeeAvatar w-8 h-[33px]"
                  src="/MichaelLee.webp"
                />
              </div>
              <div className="inline-flex flex-col items-start justify-start Frame427318906 grow shrink basis-0">
                <div className="Title self-stretch h-5 text-black text-sm font-normal font-['AvantGarde Bk BT'] leading-tight">
                  Michael Lee
                </div>
              </div>
            </div>
            <div className="Frame427318817 w-[58.26px] h-[9.81px] justify-center items-center flex" />
          </div>
          <div className="Title self-stretch h-[72px] text-black text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
            Les cours proposés ici sont de première qualité. Je suis
            impressionné par la qualité
            <br />.<br />
          </div>
          <div className="inline-flex items-center self-stretch justify-start gap-2 IconButtons">
            <div className="Icon w-6 h-6 text-center text-black text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
              👍
            </div>
            <div className="Icon w-6 h-6 text-center text-black text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
              📝
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
