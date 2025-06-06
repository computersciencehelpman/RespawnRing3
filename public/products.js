import React from 'react';

export default function ProductsPage() {
  return (
    <div className="product-gallery flex justify-center items-center flex-wrap mt-24 px-4">
      <div className="product-card bg-white rounded-[15px] p-5 m-5 shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-between w-[600px] hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(128,0,255,0.3)] transition duration-300">
        <img
          src="/images/Degen TV.jpg"
          alt="Degen TV"
          className="w-[150px] h-auto rounded-[10px]"
        />
        <div className="product-details flex flex-col items-center flex-grow mx-5">
          <h3 className="text-black font-sans text-lg font-semibold m-0">Degen TV</h3>
        </div>
        <div className="product-price text-green-500 text-2xl font-bold font-sans hover:drop-shadow-[0_0_8px_#00ff00,0_0_15px_#00ff00]">
          $349.99
        </div>
      </div>
    </div>
  );
}
