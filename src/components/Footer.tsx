export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-dark)',
        borderTop: '4px solid var(--border-black)',
        boxShadow: '0 -4px 0 0 var(--border-white)',
        padding: '24px 0',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <p
          style={{
            fontSize: '8px',
            color: 'var(--text-light)',
            margin: 0,
          }}
        >
          © 2024 PORTFOLIO - PIXEL GAME STYLE
        </p>
        <p
          style={{
            fontSize: '6px',
            color: 'var(--primary-cyan)',
            marginTop: '8px',
          }}
        >
          Made with React + TypeScript + Bun
        </p>
      </div>
    </footer>
  );
}

