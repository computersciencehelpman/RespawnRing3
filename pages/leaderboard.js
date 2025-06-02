import TopHoldersTable from '../components/TopHoldersTable';

const mockData = [
  { name: 'Alice', amount: 500 },
  { name: 'Bob', amount: 300 },
  { name: 'Charlie', amount: 150 },
];

export default function Leaderboard() {
  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">$Dough Leaderboard</h1>
      <TopHoldersTable holders={mockData} />
    </div>
  );
}
