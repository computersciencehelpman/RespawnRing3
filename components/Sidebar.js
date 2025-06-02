export default function Sidebar() {
  return (
    <div className="fixed top-24 left-4 flex flex-col gap-4 z-50">
      <a href="https://twitter.com/degensx" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/x-twitter-logo-1.png"
          alt="Twitter Logo"
          className="w-6 h-6 max-w-[24px] max-h-[24px] object-contain p-0 m-0 hover:drop-shadow-[0_0_8px_#1DA1F2]"
        />
      </a>
      <a href="https://discord.com/invite/YBDAsjQcVb" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/Discord-logo-1.png"
          alt="Discord Logo"
          className="w-6 h-6 max-w-[24px] max-h-[24px] object-contain p-0 m-0 hover:drop-shadow-[0_0_8px_#5865F2]"
        />
      </a>
      <a href="https://magiceden.us/marketplace/degensx" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/ME-1.jpeg"
          alt="Magic Eden Logo"
          className="w-6 h-6 max-w-[24px] max-h-[24px] object-contain p-0 m-0 hover:drop-shadow-[0_0_8px_#F70CFF]"
        />
      </a>
      <a href="https://www.tensor.trade/trade/degensx" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/Tensor-logo-1.jpg"
          alt="Tensor Logo"
          className="w-6 h-6 max-w-[24px] max-h-[24px] object-contain p-0 m-0 hover:drop-shadow-[0_0_8px_#FFC300]"
        />
      </a>
    </div>
  );
}
