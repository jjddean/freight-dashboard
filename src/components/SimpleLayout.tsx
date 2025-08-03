import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';

interface LayoutProps {
  children: React.ReactNode;
}

const SimpleLayout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: '📊' },
    { name: 'Users', href: '/users', icon: '👥' },
    { name: 'Shipments', href: '/shipments', icon: '📦' },
    { name: 'Compliance', href: '/compliance', icon: '🛡️' },
    { name: 'Payments', href: '/payments', icon: '💳' },
    { name: 'Support', href: '/support', icon: '💬' },
    { name: 'Logs', href: '/logs', icon: '📄' },
    { name: 'Manual Actions', href: '/manual', icon: '⚙️' },
    { name: 'Settings', href: '/settings', icon: '⚙️' },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex' }}>
      {/* Sidebar */}
      <div style={{ 
        width: '256px', 
        backgroundColor: 'white', 
        borderRight: '1px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ 
          height: '64px', 
          display: 'flex', 
          alignItems: 'center', 
          padding: '0 16px',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', margin: 0 }}>
            Admin Dashboard
          </h1>
        </div>
        <nav style={{ flex: 1, padding: '16px 8px' }}>
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  marginBottom: '4px',
                  backgroundColor: isActive ? '#dbeafe' : 'transparent',
                  color: isActive ? '#1e40af' : '#4b5563'
                }}
              >
                <span style={{ marginRight: '12px', fontSize: '20px' }}>{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top bar */}
        <div style={{
          height: '64px',
          backgroundColor: 'white',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px'
        }}>
          <span style={{ fontSize: '14px', fontWeight: '500', color: '#111827' }}>
            MarketLive Admin
          </span>
          <UserButton afterSignOutUrl="/" />
        </div>

        {/* Page content */}
        <main style={{ flex: 1, padding: '24px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SimpleLayout;
