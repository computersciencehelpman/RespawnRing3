import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 flex gap-4 z-50">
      <Link href="/" className="btn">Home</Link>
      <Link href="/products" className="btn">Our Products</Link>
      <Link href="/leaderboard" className="btn">Dough Leaderboard</Link>
    </nav>
  );
}