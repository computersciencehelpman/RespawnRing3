import React from 'react';

export default function ProductsPage() {
  return (
    <div className="flex justify-center items-center flex-wrap mt-24 px-4">
      <div className="bg-white rounded-2xl p-5 m-5 w-[600px] shadow-lg flex gap-4 items-center hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(128,0,255,0.3)] transition duration-300">
        
        {/* Product Image */}
        <img
          src="/images/Degen TV.jpg"
          alt="Degen TV"
          className="w-[150px] h-auto rounded-lg object-cover"
        />

        {/* Product Info (fills rest of white box) */}
        <div className="flex flex-col justify-between flex-grow">
          <h3 className="text-black text-lg font-semibold font-sans mb-2">Degen TV</h3>
          <div className="text-green-500 text-2xl font-bold font-sans hover:drop-shadow-[0_0_8px_#00ff00]">
            $349.99
          </div>
        </div>
      </div>
    </div>
  );
}
