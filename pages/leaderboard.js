// pages/leaderboard.js
import React from 'react';

export default function LeaderboardPage({ holders = [], totalSupply = 0, tokenPrice = 0 }) {
  return (
    <div className="flex justify-center items-start py-16 min-h-screen bg-black text-white">
      <div className="bg-white text-black rounded-xl shadow-lg p-6 w-fit max-w-full overflow-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Top 20 Holders</h1>
        <table className="table-auto border-collapse text-sm sm:text-base">
          <thead>
            <tr className="text-left text-gray-700 uppercase text-xs border-b border-gray-300">
              <th className="pb-2 pr-4">Rank</th>
              <th className="pb-2 pr-4">Wallet</th>
              <th className="pb-2 pr-4">Amount</th>
              <th className="pb-2 pr-4">% of Supply</th>
              <th className="pb-2 pr-4">Value (USD)</th>
            </tr>
          </thead>
          <tbody>
            {holders.map((holder, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 pr-4 font-semibold">{index + 1}</td>
                <td className="py-2 pr-4">
                  <a
                    href={`https://solscan.io/account/${holder.owner}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-700"
                  >
                    {holder.owner.slice(0, 4)}...{holder.owner.slice(-4)}
                  </a>
                </td>
                <td className="py-2 pr-4">{Number(holder.amount).toLocaleString()}</td>
                <td className="py-2 pr-4">
                  {totalSupply > 0
                    ? ((holder.amount / totalSupply) * 100).toFixed(2)
                    : '—'}
                  %
                </td>
                <td className="py-2 pr-4">
                  ${(holder.amount * tokenPrice).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 text-sm text-gray-600">
          <p>Total Supply: {Number(totalSupply).toLocaleString()}</p>
          <p>Token Price (USD): ${tokenPrice.toFixed(8)}</p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const MINT = '4XKyPd6Z8mts5BTYMJ4xM53z6ZBJUzNpAqUw1JZi1Tkz';
  const HELIUS_API_KEY = process.env.HELIUS_API_KEY;

  let holders = [];
  let totalSupply = 0;
  let tokenPrice = 0;
  let decimals = 0;

  try {
    const supplyRes = await fetch('https://api.mainnet-beta.solana.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'getTokenSupply',
        params: [MINT],
      }),
    });

    const supplyData = await supplyRes.json();
    const rawSupply = Number(supplyData?.result?.value?.amount || 0);
    decimals = Number(supplyData?.result?.value?.decimals || 0);
    totalSupply = rawSupply / Math.pow(10, decimals);
  } catch (error) {
    console.error('❌ Error fetching total supply:', error);
  }

  try {
    const heliusRes = await fetch(`https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'getTokenAccounts',
        params: {
          mint: MINT,
          page: 1,
          limit: 1000,
          displayOptions: {
            showZeroBalance: false,
          },
        },
      }),
    });

    const heliusData = await heliusRes.json();
    console.log("✅ Helius response:", JSON.stringify(heliusData, null, 2));

    const tokenAccounts = heliusData?.result?.token_accounts || [];

    const ownerBalances = {};
    tokenAccounts.forEach((account) => {
      const owner = account.owner;
      const amount = account.amount / Math.pow(10, decimals);
      ownerBalances[owner] = (ownerBalances[owner] || 0) + amount;
    });

    holders = Object.entries(ownerBalances)
      .map(([owner, amount]) => ({ owner, amount }))
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 20);
  } catch (error) {
    console.error('❌ Failed to fetch holders from Helius:', error);
  }

  try {
    const priceRes = await fetch(
      'https://api.dexscreener.com/latest/dex/pairs/solana/4YX2LqvzVRgYuotmq8SqPvT4iYDMdSmWAb52pgHwXjQ8'
    );
    const priceData = await priceRes.json();
    tokenPrice = parseFloat(priceData?.pair?.priceUsd || 0);
  } catch (error) {
    console.error('❌ Error fetching token price:', error);
  }

  return {
    props: {
      holders,
      totalSupply,
      tokenPrice,
    },
  };
}
