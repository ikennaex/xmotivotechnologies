import Layout from "./Layout";
import {Routes, Route} from 'react-router-dom'
import HomePage from "./Pages/Homepage/HomePage";
import ContactPage from "./Pages/Contact/ContactPage";
import PortfolioPage from "./Pages/Portfolio/PortfolioPage";

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Layout />}>
      <Route index element = {<HomePage />} />
      <Route path="/contact-us" element = {<ContactPage/>} />
      <Route path="/viewportfolio" element = {<PortfolioPage />} />
      </Route>
    </Routes>
  );
}

export default App;
