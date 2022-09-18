import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Cart from "./Components/Cart";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import SignUpAsSeller from "./Components/SignUpAsSeller";
import ProductDesc from "./Components/ProductDesc";
import ProductList from "./Components/ProductList";
import ProtectedRoutes from "./Hooks/ProtectedRoutes";
import UploadProductPage from "./Components/UploadProductPage";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/" index element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:productDesc" element={<ProductDesc />} />
        <Route path="/signUp" element={<SignUpAsSeller />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/upload" element={<UploadProductPage />} />
        </Route>
      </Routes>
      {/* <PaymentDetailsModal/> */}
    </>
  );
}

export default App;
