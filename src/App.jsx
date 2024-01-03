import "./App.css";
import Navbar from "./components/navbar/Navar";
import Footer from "./components/footer/Footer";

import { Home, Services, ExamService, ContactUs } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ExamService />
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
