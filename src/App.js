import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Details from "./pages/Details/Details";
import SignUp from "./SignUp/SignUp";
// import { SignalIcon } from "lucide-react";
import SignIn from "./pages/Home/SignIn/SignIn";
// import1
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        {/* <Route path="/contact-us" element={<ContactUs />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
