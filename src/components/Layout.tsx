import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import ChatbotWidget from "./ChatbotWidget";

export default function Layout() {
  return (
    <div className="min-h-screen bg-paper font-body text-ink">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Nav />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatbotWidget />
    </div>
  );
}
