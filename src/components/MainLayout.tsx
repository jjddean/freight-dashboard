import React from 'react';
import Header from './Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f9fafb' 
    }}>
      <Header />
      <main style={{
        flex: 1,
        padding: '24px',
        maxWidth: '1440px',
        width: '100%',
        margin: '0 auto'
      }}>
        {children}
      </main>
      
      {/* Footer */}
      <footer style={{
        backgroundColor: '#111827',
        color: 'white',
        padding: '24px 0',
        marginTop: 'auto'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center'
        }}>
          <p> {new Date().getFullYear()} MarketLive. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
