export default function Footer() {
  return (
    <div className="FooterSection w-full self-stretch p-[60px] bg-neutral-100 justify-center items-center gap-[60px] inline-flex">
      <div className="FooterContainer justify-center items-center gap-[60px] flex">
        <div className="APropos  self-stretch text-center text-black text-xl font-normal font-['AvantGarde Bk BT'] leading-7">
          A propos
        </div>
        <div className="TOS self-stretch text-center text-black text-xl font-normal font-['AvantGarde Bk BT'] leading-7">
          Termes & Conditions
        </div>
        <div className="Contacts self-stretch text-center text-black text-xl font-normal font-['AvantGarde Bk BT'] leading-7">
          Contacts
        </div>
        <div className="FAQ self-stretch text-center text-black text-xl font-normal font-['AvantGarde Bk BT'] leading-7">
          FAQ
        </div>
      </div>
    </div>
  );
}
