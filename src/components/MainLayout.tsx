import React from 'react';
import Header from './Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <Header />
      <main>
        {children}
      </main>
      
      {/* Footer */}
      <footer style={{
        backgroundColor: '#111827',
        color: 'white',
        padding: '48px 0 24px 0'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
            marginBottom: '32px'
          }}>
            <div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '16px'
              }}>
                MarketLive
              </h3>
              <p style={{
                color: '#9ca3af',
                lineHeight: '1.6'
              }}>
                Professional freight forwarding solutions for modern businesses. 
                Streamlined logistics with intelligent technology.
              </p>
            </div>
            
            <div>
              <h4 style={{
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '16px'
              }}>
                Services
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {['Ocean Freight', 'Air Freight', 'Ground Transport', 'Customs Clearance'].map((service) => (
                  <li key={service} style={{ marginBottom: '8px' }}>
                    <a href="#" style={{
                      color: '#9ca3af',
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 style={{
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '16px'
              }}>
                Company
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {['About Us', 'Careers', 'Contact', 'Support'].map((item) => (
                  <li key={item} style={{ marginBottom: '8px' }}>
                    <a href="#" style={{
                      color: '#9ca3af',
                      textDecoration: 'none',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 style={{
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '16px'
              }}>
                Contact Info
              </h4>
              <div style={{
                color: '#9ca3af',
                lineHeight: '1.6'
              }}>
                <p>1-800-FREIGHT</p>
                <p>support@marketlive.com</p>
                <p>24/7 Customer Support</p>
              </div>
            </div>
          </div>
          
          <div style={{
            borderTop: '1px solid #374151',
            paddingTop: '24px',
            textAlign: 'center',
            color: '#9ca3af'
          }}>
            <p>&copy; 2024 MarketLive. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
