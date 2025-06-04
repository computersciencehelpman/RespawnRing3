import React from 'react';

export default function LeaderboardPage({ holders, totalSupply, tokenPrice }) {
  return (
    <div className="bg-[var(--bg-color)] text-[var(--text-color)] px-4 py-8 pb-32">
      <h1 className="text-2xl font-bold mb-6">Top 20 Holders</h1>
      <table className="w-full border-separate border-spacing-y-2 text-sm sm:text-base">
        <thead>
          <tr className="text-left text-gray-400 uppercase text-xs border-b border-gray-700">
            <th className="pb-2">Rank</th>
            <th className="pb-2">Wallet</th>
            <th className="pb-2">Amount</th>
            <th className="pb-2">% of Supply</th>
            <th className="pb-2">Value (USD)</th>
          </tr>
        </thead>
        <tbody>
          {holders.map((holder, index) => (
            <tr key={index} className="hover:bg-zinc-800">
              <td className="py-2 px-3 text-white">{index + 1}</td>
              <td className="py-2 px-3">
                <a
                  href={`https://solscan.io/account/${holder.owner}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300"
                >
                  {holder.owner.slice(0, 4)}...{holder.owner.slice(-4)}
                </a>
              </td>
              <td className="py-2 px-3 text-white">{Number(holder.amount).toLocaleString()}</td>
              <td className="py-2 px-3 text-white">
                {totalSupply > 0
                  ? ((holder.amount / totalSupply) * 100).toFixed(2)
                  : '—'}
                %
              </td>
              <td className="py-2 px-3 text-white">
                ${(holder.amount * tokenPrice).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        <p>Total Supply: {Number(totalSupply).toLocaleString()}</p>
        <p>Token Price (USD): ${tokenPrice}</p>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const MINT = '4XKyPd6Z8mts5BTYMJ4xM53z6ZBJUzNpAqUw1JZi1Tkz';
  const API_KEY = 'cf9fbd2a-0c38-4992-9030-e06f9a75ef94';

  let holders = [];
  let totalSupply = 0;
  let tokenPrice = 0;

  try {
    // 1. Fetch top 20 token holders from Helius
    const holdersRes = await fetch(
      `https://api.helius.xyz/v0/token-holders?mint=${MINT}&limit=20&api-key=${API_KEY}`
    );
    const holdersData = await holdersRes.json();
    holders = Array.isArray(holdersData) ? holdersData : [];

    // 2. Fetch token metadata using the getAsset method
    const assetRes = await fetch(`https://mainnet.helius-rpc.com/?api-key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 'getAsset',
        method: 'getAsset',
        params: {
          id: MINT,
          displayOptions: {
            showFungible: true,
          },
        },
      }),
    });

    const assetData = await assetRes.json();
    const tokenInfo = assetData?.result?.token_info;
    const supplyRaw = Number(tokenInfo?.supply || 0);
    const decimals = Number(tokenInfo?.decimals || 0);
    totalSupply = supplyRaw / Math.pow(10, decimals);

    // 3. Fetch token price from DexScreener
    const priceRes = await fetch(
      `https://api.dexscreener.com/latest/dex/pairs/solana/4YX2LqvzVRgYuotmq8SqPvT4iYDMdSmWAb52pgHwXjQ8`
    );
    const priceData = await priceRes.json();
    tokenPrice = parseFloat(priceData?.pair?.priceUsd || 0);
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
  }

  return {
    props: {
      holders,
      totalSupply,
      tokenPrice,
    },
    revalidate: 86400, // Revalidate every 24 hours
  };
}
