
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  const name = "res";

  return (
    <div className="w-full h-screen bg-slate-800 flex flex-col">
      <Navbar />
      <Main name={name} />
      <Footer />
      {/* <Greetings /> */}
    </div>
  );
}

export default App;
