import React from 'react';

export default function Leaderboard({ holders, totalSupply, tokenPrice }) {
  return (
    <div className="bg-black text-white px-6 py-10 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Top Holders (Simple View)</h1>
      <table className="w-full text-sm">
        <thead>
          <tr className="uppercase text-gray-400 text-xs border-b border-gray-700">
            <th className="pb-2 text-left">Rank</th>
            <th className="pb-2 text-left">Wallet</th>
            <th className="pb-2 text-left">Amount</th>
            <th className="pb-2 text-left">% of Supply</th>
            <th className="pb-2 text-left">Value (USD)</th>
          </tr>
        </thead>
        <tbody>
          {holders.map((holder) => (
            <tr key={holder.rank} className="border-b border-gray-800 hover:bg-gray-900">
              <td className="py-2 pr-4">{holder.rank}</td>
              <td className="py-2 pr-4">
                <a
                  href={`https://solscan.io/account/${holder.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {holder.shortAddress}
                </a>
              </td>
              <td className="py-2 pr-4">{holder.amount}</td>
              <td className="py-2 pr-4">{holder.percentage}</td>
              <td className="py-2 pr-4">${holder.valueUSD}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 text-xs text-gray-400">
        <p>Total Supply: {totalSupply.toLocaleString()}</p>
        <p>Token Price (USD): ${tokenPrice}</p>
      </div>
    </div>
  );
}
