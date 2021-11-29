import { HomePage } from "./components/routes/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/routes/about";
import { NavbarMenu } from "./components/Navbar";
import { EditShift } from "./components/routes/edit-shift";
import { AddShift } from "./components/routes/add-shift";
import { LoginPage } from "./components/routes/login";
import { Dashboard } from "./components/routes/dashboard";
import { ForgotPswd } from "./components/routes/password-recovery";
import { Footer } from "./components/Footer";
import { RegisterPage } from "./components/routes/register";
import { WrongRoute } from "./components/routes/wrong-route";
import { useState } from "react";
function App() {
  const [Login, setLogin] = useState(false);
  const [User, setUser] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarMenu Login={Login} setLogin={setLogin} User={User}></NavbarMenu>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-shift" element={<AddShift />} />
          <Route path="/edit-shift" element={<EditShift />} />
          <Route path="/login" element={<LoginPage setLogin={setLogin} />} />
          <Route path="/forgot-password" element={<ForgotPswd />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<WrongRoute />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
