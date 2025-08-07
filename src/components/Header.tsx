import React from 'react';
import { Link } from 'react-router-dom';
import { SignInButton, SignUpButton, UserButton, useAuth, SignedIn, SignedOut } from '@clerk/clerk-react';

const Header: React.FC = () => {
  const { isSignedIn, isLoaded } = useAuth();
  
  console.log('Header render - Clerk state:', { isSignedIn, isLoaded });
  
  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Platform', href: '/platform' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header style={{
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px'
      }}>
        {/* Logo/Brand */}
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <Link 
            to="/" 
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#111827',
              textDecoration: 'none'
            }}
          >
            MarketLive
          </Link>
        </div>

        {/* Navigation Items */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }}>
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              style={{
                fontSize: '16px',
                fontWeight: '500',
                color: item.name === 'Platform' ? 'white' : '#374151',
                textDecoration: 'none',
                padding: item.name === 'Platform' ? '8px 16px' : '8px 0',
                backgroundColor: item.name === 'Platform' ? '#2563eb' : 'transparent',
                borderRadius: item.name === 'Platform' ? '6px' : '0',
                transition: 'color 0.2s, background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                if (item.name !== 'Platform') {
                  e.currentTarget.style.color = '#2563eb';
                } else {
                  e.currentTarget.style.backgroundColor = '#1d4ed8';
                }
              }}
              onMouseLeave={(e) => {
                if (item.name !== 'Platform') {
                  e.currentTarget.style.color = '#374151';
                } else {
                  e.currentTarget.style.backgroundColor = '#2563eb';
                }
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <SignedOut>
            <div style={{ display: 'flex', gap: '8px' }}>
              <SignInButton 
                mode="modal"
                afterSignInUrl="/"
                afterSignUpUrl="/"
              >
                <button 
                  onClick={() => console.log('🔵 Sign In button clicked!')}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#2563eb',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton 
                mode="modal"
                afterSignInUrl="/"
                afterSignUpUrl="/"
              >
                <button 
                  onClick={() => console.log('🟢 Sign Up button clicked!')}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#059669',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
