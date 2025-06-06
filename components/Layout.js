import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Rightbar from './Rightbar';
import DarkModeToggle from './DarkModeToggle';

export default function Layout({ children }) {
  const router = useRouter();
  const path = router.pathname;

  // Define per-page background logic
  const isLeaderboard = path === '/leaderboard';
  const backgroundStyle = isLeaderboard
    ? {
        backgroundColor: 'white',
      }
    : {
        backgroundImage: "url('/images/RR-Background-Image.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      };

  const textColor = isLeaderboard ? 'text-black' : 'text-white';

  return (
    <div className={`min-h-screen relative ${textColor}`} style={backgroundStyle}>
      <Navbar />
      <Sidebar />
      <Rightbar />
      <DarkModeToggle />
      <main
  className={`pt-32 flex flex-col items-center justify-center min-h-screen text-center ${
    path === '/leaderboard' ? 'px-4' : ''
  }`}>
  <div className={path === '/leaderboard' ? 'w-fit' : 'w-full'}>
    {children}
  </div>
</main>

    </div>
  );
}
