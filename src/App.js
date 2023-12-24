import Layout from "./Layout";
import {Routes, Route} from 'react-router-dom'
import HomePage from "./Pages/Homepage/HomePage";
import ContactPage from "./Pages/Contact/ContactPage";

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Layout />}>
      <Route index element = {<HomePage />} />
      <Route path="/contact-us" element = {<ContactPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
