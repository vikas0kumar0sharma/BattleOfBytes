import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero"
import App2 from './App2.css'
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import ReactPollComponnet from "./components/react-poll/react-poll-vote";
import ContactUs from "./components/Contact_Us/ContactUs";
import Gallary from "./components/Gallary/Gallary";
import Coordinators from "./components/Coordinators/Coordinators";
import Faculty from "./components/Faculty/Faculty";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="parent2">
        <div className="white-gradient"></div>
        <Header />
        <Hero />
      </div>
      <Value/>
      <Residencies/>
      <ReactPollComponnet/>
      <Gallary/>
      <Coordinators/>
      <Faculty/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
