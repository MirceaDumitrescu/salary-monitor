import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/routes/about";
import { NavbarMenu } from "./components/Navbar";
import { EditShift } from "./components/routes/edit-shift";
import { AddShift } from "./components/routes/add-shift";
import { LoginPage } from "./components/routes/login";
import { EditProfile } from "./components/routes/edit-profile";
import { ForgotPswd } from "./components/routes/password-recovery";
import { Footer } from "./components/Footer";
import { RegisterPage } from "./components/routes/register";
import { WrongRoute } from "./components/routes/wrong-route";

ReactDOM.render(
  <BrowserRouter>
    <NavbarMenu></NavbarMenu>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/add-shift" element={<AddShift />} />
      <Route path="/edit-shift" element={<EditShift />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPswd />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<WrongRoute />} />
    </Routes>
    <Footer></Footer>
  </BrowserRouter>,
  document.getElementById("root")
);
