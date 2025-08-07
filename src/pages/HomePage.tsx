import React from 'react';
import Header from '../components/Header';

const HomePage: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      {/* Hero Section */}
      <section style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        padding: '120px 0',
        display: 'flex',
        alignItems: 'center',
        minHeight: '600px'
      }}>
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }} />
        
        {/* Content */}
        <div style={{
          position: 'relative',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          zIndex: 10
        }}>
          <div style={{
            maxWidth: '600px'
          }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
              lineHeight: '1.1',
              marginBottom: '24px'
            }}>
              Professional Freight Forwarding
            </h1>
            
            <p style={{
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.6',
              marginBottom: '32px'
            }}>
              Streamlined global logistics with intelligent quotes, digital documentation, and real-time tracking for complex shipping lanes.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'center'
            }}>
              <button style={{
                padding: '12px 32px',
                fontSize: '18px',
                fontWeight: '600',
                color: 'white',
                backgroundColor: '#10b981',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#059669';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#10b981';
              }}
              >
                Get Instant Quote
              </button>
              
              <input 
                type="text" 
                placeholder="Enter tracking number..."
                style={{
                  padding: '12px 16px',
                  fontSize: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  width: '250px',
                  backdropFilter: 'blur(10px)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '64px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '16px'
            }}>
              Why Choose MarketLive?
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Advanced logistics solutions designed for modern businesses
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                title: 'Intelligent Quotes',
                description: 'Get instant, accurate quotes from multiple carriers with our AI-powered pricing engine.',
                icon: '💡'
              },
              {
                title: 'Real-time Tracking',
                description: 'Monitor your shipments with live updates and detailed location information.',
                icon: '📍'
              },
              {
                title: 'Digital Documentation',
                description: 'Streamlined paperwork with digital forms and automated compliance checks.',
                icon: '📄'
              }
            ].map((feature, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: '32px',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '16px'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '12px'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
