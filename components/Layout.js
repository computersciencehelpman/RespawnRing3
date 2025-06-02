import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Rightbar from './Rightbar';
import DarkModeToggle from './DarkModeToggle';

export default function Layout({ children }) {
  return (
    <div
      className="min-h-screen relative text-white"
      style={{
        backgroundImage: "url('/images/RR-Background-Image.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />
      <Sidebar />
      <Rightbar />
      <DarkModeToggle />

      <main className="pt-32 flex flex-col items-center justify-center min-h-screen text-center">
        {children}
      </main>
    </div>
  );
}
