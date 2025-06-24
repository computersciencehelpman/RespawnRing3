// pages/froth.js
import Link from 'next/link';

export default function FrothPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6">Froth Key</h1>
      <img
        src="/images/Froth.png"
        alt="Froth Full Key"
        className="w-full h-auto rounded-lg shadow-xl mb-6 max-w-[90%]"
      />

      <Link href="/leaderboard">
        <button className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded transition">
          ← Back to $DOUGH Leaderboard
        </button>
      </Link>
    </div>
  );
}
