import './Navbar.css';

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#fff',
        padding: '1rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <span style={{ width: '12px', height: '12px', backgroundColor: '#ff5f56', borderRadius: '9999px' }}></span>
        <span style={{ width: '12px', height: '12px', backgroundColor: '#ffbd2e', borderRadius: '9999px' }}></span>
        <span style={{ width: '12px', height: '12px', backgroundColor: '#27c93f', borderRadius: '9999px' }}></span>
      </div>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0, fontWeight: 500 }}>
        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🏠 Home</li>
        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>📊 Budgets</li>
        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>💼 Accounts</li>
        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🕓 Reports</li>
      </ul>
    </nav>
  );
}

export default Navbar;