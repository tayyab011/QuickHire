import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Admin from "./pages/Admin";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<JobDetails />} />

        
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
