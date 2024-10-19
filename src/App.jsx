import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import AppRoutes from "./routes";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  const { i18n } = useTranslation();
  const storedLanguage = JSON.parse(localStorage.getItem("lang")) || "en";
  const currentLanguage = i18n.language;
  const location = useLocation();
  useEffect(() => {
    const direction = i18n.dir(currentLanguage);
    document.body.setAttribute("dir", direction);
    console.log("currentLanguage: ", currentLanguage);
  }, [currentLanguage, i18n]);
  
  useEffect(() => {
    if (storedLanguage !== currentLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [storedLanguage, currentLanguage, i18n]);
  
  const excludedRoutes = ["/Login", "/Register"];
  
  return (
    <div className="App">
      {!excludedRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<AppRoutes />} />
      </Routes>
      {!excludedRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
