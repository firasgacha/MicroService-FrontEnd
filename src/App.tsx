import "./App.css";
import Home from "./pages/home";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import Profile from "pages/home/profile";
import Signup from "pages/Singup";
import About from "pages/About";
import MedicalFolder from "pages/home/MedicalFolder";
import ListOfDoctors from "pages/home/ListOfDoctors";
import LandingPage from "pages/LandingPage";
import Contact from "pages/Contact";
import ListOfRadios from "pages/home/ListOfRadios";
import ListOfContacts from "pages/home/ListOfContacts";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />}>
          <Route path="profile" element={<Profile />} />
          <Route path="medical-folder" element={<MedicalFolder />} />
          <Route path="constat" element={<ListOfDoctors />} />
          <Route path="radios" element={<ListOfRadios />} />
          <Route path="contacts" element={<ListOfContacts />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/NotFound" replace />} />
      </Routes>
    </>
  );
}

export default App;
