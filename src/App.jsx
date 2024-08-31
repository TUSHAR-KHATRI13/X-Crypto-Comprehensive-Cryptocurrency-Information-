import {BrowserRouter as  Router,Route,Routes} from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import Coins from "./Components/Coins.jsx";
import Exchanges from "./Components/Exchanges.jsx";
import CoinDetails from "./Components/CoinDetails.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
        <Route path="/coin/:id" element={<CoinDetails/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
