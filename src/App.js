import "./App.css";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";
import Products from "./components/Products";
import Footer from "./components/Footer";
// internal imports
import "./App.css";
import "aos/dist/aos.css";

// initialization
AOS.init({
  //offset: 200, // offset (in px) from the original trigger point
  // delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
});
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
