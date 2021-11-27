import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { EditShift } from "./components/routes/edit-shift";
import { AddShift } from "./components/routes/add-shift";
import { LoginPage } from "./components/routes/login";
import { EditProfile } from "./components/routes/edit-profile";
import { ForgotPswd } from "./components/routes/password-recovery";
import { About } from "./components/routes/about";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/add-shift" element={<AddShift />} />
      <Route path="/edit-shift" element={<EditShift />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPswd />} />
      <Route path="/edit-profile" element={<EditProfile />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
