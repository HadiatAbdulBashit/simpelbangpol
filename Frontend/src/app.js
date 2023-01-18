import Navbar from "./components/navbar";
import Footer from "./components/footer";
// import Home from "./pages/home";
import Faq from "./pages/faq";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Faq />
      <Footer />
    </div>
  );
}

export default App;