import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/app/components/Layout";
import Home from "@/app/pages/Home";
import Projects from "@/app/pages/Projects";
import Skills from "@/app/pages/Skills";
import Contact from "@/app/pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
