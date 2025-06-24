import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Rightbar from './Rightbar';
import DarkModeToggle from './DarkModeToggle';

export default function Layout({ children }) {
  const router = useRouter();
  const isLeaderboard = router.pathname === '/leaderboard';

  const backgroundStyle = isLeaderboard
    ? { backgroundColor: 'black' }
    : {
        backgroundImage: "url('/images/RR-Background-Image.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      };

  const textColor = 'text-white';

  return (
    <div className={`min-h-screen relative ${textColor}`} style={backgroundStyle}>
      <Navbar />
      <Sidebar />
      <Rightbar />
      <DarkModeToggle />

      <main className="pt-32 flex flex-col items-center justify-center min-h-screen text-center relative z-10">
        {children}
      </main>

      {/* ✅ Froth Key image - truly fixed bottom-right */}
      {isLeaderboard && (
  <div
    className="z-[1000]"
    style={{
      position: 'fixed',
      bottom: '1rem',
      right: '1rem',
    }}
  >
    <Link href="/froth">
      <div
        className="bg-black/80 p-2 rounded-lg shadow-lg backdrop-blur-md cursor-pointer"
        style={{ width: '14rem', maxHeight: '200px' }}
      >
        <img
          src="/images/Froth.png"
          alt="Froth Key"
          className="w-full h-auto object-contain rounded opacity-90"
        />
      </div>
    </Link>
  </div>
)}
    </div>
  );
}
