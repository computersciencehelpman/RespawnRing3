export default function Rightbar() {
  return (
    <div
      style={{
        position: 'fixed',
        top: '6rem',
        right: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        zIndex: 9999,
        width: '24px',
      }}
    >
      <a href="https://x.com/BunniesNHomies" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/x-twitter-logo-1.png"
          alt="Twitter"
          style={{
            width: '24px',
            height: '24px',
            objectFit: 'contain',
            transition: 'all 0.3s ease',
          }}
        />
      </a>
      <a href="https://discord.com/invite/59zSDgnx5s" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/Discord-logo-1.png"
          alt="Discord"
          style={{
            width: '24px',
            height: '24px',
            objectFit: 'contain',
            transition: 'all 0.3s ease',
          }}
        />
      </a>
      <a href="https://www.nftlaunch.app/mint/bandh" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/Bunniesmint.jpeg"
          alt="B&H"
          style={{
            width: '24px',
            height: '24px',
            objectFit: 'contain',
            transition: 'all 0.3s ease',
          }}
        />
      </a>
    </div>
  );
}
