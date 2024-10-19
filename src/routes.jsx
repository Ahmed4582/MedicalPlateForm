// routes.jsx
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Blogs from "./pages/Blogs";
import CartPage from "./components/cart";
import Shop from "./pages/shop";
import BlogsDetails from "./pages/BlogsDetails";
import Services from "./pages/services";
import AdvertiseWithUs from "./pages/AdvertiseWithUs";
import ContactUs from "./pages/contactUs";
import ServiceDetails from "./pages/serviceDetails";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<Blogs />} />
      <Route path="/newsBlog/:id" element={<BlogsDetails />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:id" element={<ServiceDetails />} />
      <Route path="/AdvertiseWithUs" element={<AdvertiseWithUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:id" element={<ServiceDetails />} />
    </Routes>
  );
};

export default AppRoutes;
