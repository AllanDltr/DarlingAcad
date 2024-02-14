import "./App.css";
import Footer from "./components/footer.tsx";

function App() {
  return (
    <>
      <div className="inline-flex flex-col items-center justify-start w-full h-full Page bg-neutral-100">
        <div className="inline-flex items-center justify-center w-full h-20 gap-5 p-5 bg-white shadow NavBar">
          <img
            className="AcademyIcon w-10 h-10 rounded-[100px]"
            src="https://via.placeholder.com/40x40"
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
              <div className="Text grow shrink basis-0 text-black text-opacity-50 text-sm font-normal font-['AvantGarde Bk BT'] leading-tight">
                Search in site
              </div>
              <div className="flex items-center justify-center w-5 h-5 IconSearch" />
            </div>
            <div className="Tab text-black text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
              Se connecter/S’inscrire
            </div>
          </div>
        </div>
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
                <div className="Title text-white text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
                  En voir plus
                </div>
              </div>
              <div className="inline-flex flex-col items-center justify-center w-40 p-3 bg-pink-500 rounded-lg Primary">
                <div className="Title text-white text-base font-normal font-['AvantGarde Bk BT'] leading-normal">
                  Commencer
                </div>
              </div>
            </div>
          </div>
          <div className="ImageContainer grow shrink basis-0 h-[400px] py-1 justify-start items-start flex">
            <div className="Image w-[520px] h-[392px] bg-zinc-300 bg-opacity-50 rounded-md justify-center items-center flex">
              <img
                className="Adef6e9d77ff4801Ac785842899d741a1 w-[520px] h-[392px]"
                src="https://via.placeholder.com/520x392"
              />
            </div>
          </div>
        </div>
        <div className="Section self-stretch px-[170px] py-[60px] justify-center items-center gap-[60px] inline-flex">
          <div className="List grow shrink basis-0 h-[348px] justify-center items-center gap-10 flex">
            <div className="inline-flex flex-col items-center justify-start bg-opacity-50 border rounded-md Card grow shrink basis-0 bg-stone-300 border-stone-300 border-opacity-10">
              <div className="inline-flex items-start self-stretch justify-start ImageContainer h-60">
                <div className="relative bg-opacity-50 Image w-60 h-60 bg-zinc-300">
                  <img
                    className="Ddc7819607b34423A3d8Bd00ba76986f1 w-60 h-60 left-0 top-[-0.33px] absolute rounded-tl-md rounded-tr-md"
                    src="https://via.placeholder.com/240x240"
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
              <div className="inline-flex items-start self-stretch justify-start ImageContainer h-60">
                <div className="relative bg-opacity-50 Image w-60 h-60 bg-zinc-300">
                  <div className="Title w-52 h-4 left-[16px] top-[112px] absolute text-center text-black text-xs font-normal font-['AvantGarde Bk BT'] leading-none">
                    Course Image
                  </div>
                  <img
                    className="Fd5360c0Bbdd4eb6949eBf121c665bdb1 w-60 h-[241px] left-0 top-[-0.33px] absolute"
                    src="https://via.placeholder.com/240x241"
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
                      className="DallE20240214135106DesignASmallAvatarOfAWomanNamedAmyJohnson1 w-8 h-[33px]"
                      src="https://via.placeholder.com/32x33"
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
                      className="DallE20240214135225DesignASmallAvatarOfAManNamedMichaelLee1 w-8 h-[33px]"
                      src="https://via.placeholder.com/32x33"
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
      </div>
      <Footer />
    </>
  );
}

export default App;
