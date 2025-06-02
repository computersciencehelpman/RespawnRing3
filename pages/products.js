export default function Products() {
  return (
    <div className="flex flex-wrap justify-center mt-20 gap-8">
      <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
        <img src="/images/Degen TV.jpg" alt="Degen TV" className="rounded-lg mb-4" />
        <h3 className="text-xl font-semibold">Degen TV</h3>
        <p className="text-green-500 text-lg font-bold">$349.99</p>
      </div>
    </div>
  );
}