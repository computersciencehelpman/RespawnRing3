import TopHoldersTable from '@/components/TopHoldersTable';

export default function Leaderboard() {
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold text-center text-purple-400 mb-6">Dough Leaderboard</h2>
      <TopHoldersTable />
    </div>
  );
}