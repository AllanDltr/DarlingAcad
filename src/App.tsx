import "./App.css";
import Courses from "./components/courses.tsx";
import Dashboard from "./components/dashboard.tsx";
import Footer from "./components/footer.tsx";
import Header from "./components/header.tsx";
import Hero from "./components/hero.tsx";
import Rating from "./components/rating.tsx";

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
