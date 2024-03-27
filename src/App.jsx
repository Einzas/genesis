import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Purchases from "./pages/Purchases";
import Product from "./pages/Product";
import Header from "./components/layout/Header";
import NotFound from "./pages/NotFound";
import ProtectedAuth from "./components/auth/ProtectedAuth";
import Cart from "./components/cart/Cart";
import Footer from "./components/layout/Footer";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import ProtectedRole from "./components/auth/ProtectedRole";
function App() {
  return (
    <section className="grid font-['Yantramanav'] grid-rows-[auto_1fr] min-h-screen">
      <Routes>
        {/* Rutas comunes */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Header />
              <SignUp />
              <Footer />
            </>
          }
        />
        <Route
          path="/products/:id"
          element={
            <>
              <Header />
              <Product />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Header />
              <NotFound />
              <Footer />
            </>
          }
        />
        {/* Rutas de autenticación protegidas */}
        <Route element={<ProtectedAuth />}>
          <Route
            path="/purchases"
            element={
              <>
                <Header />
                <Purchases />
                <Footer />
              </>
            }
          />
        </Route>
        {/* Rutas de administrador */}
        {/*}  <Route element={<ProtectedRole />}>
          </Route>
        {*/}
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
      <Cart />
    </section>
  );
}

export default App;
