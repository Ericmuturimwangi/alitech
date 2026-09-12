import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Updates from "./pages/Updates";
import TravelAccommodation from "./pages/TravelAccommodation";
import RegistrationPage from "./pages/RegistrationPage";
import Delegate from "./pages/Delegate";
import Exhibitor from "./pages/Exhibitor";
import Sponsorship from "./pages/Sponsorship";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/travel-accommodation" element={<TravelAccommodation />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/delegate" element={<Delegate />} />
        <Route path="/exhibitor" element={<Exhibitor />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
      </Route>
    </Routes>
  );
}
