import React from "react";

const TopHoldersTable = ({ holders }) => {
  return (
    <table className="min-w-full bg-white text-black">
      <thead>
        <tr>
          <th className="py-2 px-4 border">Rank</th>
          <th className="py-2 px-4 border">Holder</th>
          <th className="py-2 px-4 border">$Dough</th>
        </tr>
      </thead>
      <tbody>
        {holders.map((holder, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border">{index + 1}</td>
            <td className="py-2 px-4 border">{holder.name}</td>
            <td className="py-2 px-4 border">{holder.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TopHoldersTable;

