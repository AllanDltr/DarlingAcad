import Header from "./components/0.header.tsx";
import Hero from "./components/1.hero.tsx";
import Courses from "./components/2.courses.tsx";
import Rating from "./components/3.rating.tsx";
import Dashboard from "./components/4.dashboard.tsx";
import Footer from "./components/5.footer.tsx";
import "./index.css";

function App() {
  return (
    <>
      <div className="inline-flex flex-col items-center justify-start w-full h-full Page bg-neutral-100">
        <Header />
        <Hero />
        <Courses />
        <Rating />
        <Dashboard />
      </div>
      <Footer />
    </>
  );
}

export default App;
