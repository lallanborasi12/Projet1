import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import TopFooter from './component/TopFooter';
import Home from "./pages/Home";
import About from "./pages/About";
import HelpCenter from "./pages/HelpCenter";
import General from "./pages/General";
import Subscription from "./pages/Subscription";
import Paymentinfo from "./pages/Paymentinfo";
import FastingInq from "./pages/FastingInq";
import HowUseApp from "./pages/HowUseApp";
import HowUseWeb from "./pages/HowUseWeb";
import CookiePolicy from "./pages/CookiePolicy";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { ContactUs } from "./pages/ContactUs";
import "./App.css";

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/general" element={<General />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/payment-info" element={<Paymentinfo />} />
        <Route path="/fastingInq" element={<FastingInq />} />
        <Route path="/how-to-use-app" element={<HowUseApp />} />
        <Route path="/how-to-use-web" element={<HowUseWeb />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <TopFooter />
      <Footer />
    </Router>
  );
}

export default App;
