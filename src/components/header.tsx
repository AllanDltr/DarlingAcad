export default function Header() {
  return (
    <div className="inline-flex items-center justify-center w-full h-20 gap-5 p-5 bg-white shadow NavBar">
      <img
        className="AcademyIcon w-10 h-10 rounded-[100px]"
        src="/AcademyLogo.webp"
      />
      <div className="Title grow shrink basis-0 text-black text-[28px] font-bold font-['AvantGarde Bk BT'] leading-9">
        Darling’s Academy
      </div>
      <div className="flex items-center justify-center gap-10 bg-white Navigation">
        <div className="Tab text-black text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
          Cours
        </div>
        <div className="Tab text-black text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
          Catégories
        </div>
        <div className="Tab text-black text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
          A propos
        </div>
        <div className="flex items-center justify-end gap-1 p-2 border border-black rounded-md Textfield h-9 border-opacity-10">
          <input
            type="text"
            placeholder="Rechercher sur le site ..."
            className="Text grow shrink basis-0 text-black text-opacity-50 text-sm font-normal font-['AvantGarde Bk BT']"
          />
          <div className="flex items-center justify-center w-5 h-5 IconSearch" />
        </div>
        <div className="Tab text-black text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
          Se connecter/S’inscrire
        </div>
      </div>
    </div>
  );
}
