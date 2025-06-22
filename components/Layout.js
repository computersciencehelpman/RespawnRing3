import { useRouter } from 'next/router';
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

      {/* ✅ Move this outside <main> so it's not hidden by z-10 */}
      {isLeaderboard && (
        <>
          <div className="fixed bottom-4 left-4 z-[9999] p-3 bg-white rounded-xl shadow-2xl">
            <img
              src="/images/Froth_resized.png"
              alt="Froth Key"
              className="w-40 h-auto block rounded"
            />
          </div>

          <div className="fixed top-0 left-0 z-[9999] bg-red-500 text-white p-4">
            ✅ Layout isLeaderboard check passed
          </div>
        </>
      )}

      <main className="pt-32 flex flex-col items-center justify-center min-h-screen text-center relative z-10">
        {children}
      </main>
    </div>
  );
}