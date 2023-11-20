import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/ui/Header";
import theam from "./components/ui/Theme";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <ThemeProvider theme={theam}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/services" element={<div>Services</div>} />
          <Route path="/customsoftware" element={<div>Custom Software</div>} />
          <Route path="/mobileapps" element={<div>Moble Apps</div>} />
          <Route path="/websites" element={<div>Websites</div>} />
          <Route path="/revolution" element={<div>The Revolution</div>} />
          <Route path="/about" element={<div>About Us</div>} />
          <Route path="/contact" element={<div>Contact Us</div>} />
          <Route path="/estimate" element={<div>Estimate</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
