import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

// Lazy loading das páginas
const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
