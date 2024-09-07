import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesNewPage from "./pages/ServicesNewPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/new" element={<ServicesNewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
