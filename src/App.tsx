import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import SimpleLayout from './components/SimpleLayout';
import Dashboard from './pages/Dashboard';
import UsersPage from './pages/UsersPage';
import ShipmentsPage from './pages/ShipmentsPage';
import CompliancePage from './pages/CompliancePage';
import PaymentsPage from './pages/PaymentsPage';
import LogsPage from './pages/LogsPage';
import ManualPage from './pages/ManualPage';
import SupportPage from './pages/SupportPage';
import SettingsPage from './pages/SettingsPage';
import PlatformPage from './pages/PlatformPage';
import HomePage from './pages/HomePage';

function App() {
  const { isSignedIn, isLoaded, user } = useAuth();

  useEffect(() => {
    console.log('Clerk State:', { isLoaded, isSignedIn, userId: user?.id });
    const timeout = setTimeout(() => {
      if (!isLoaded) console.error('Clerk loading timeout - possible configuration issue');
    }, 5000);
    return () => clearTimeout(timeout);
  }, [isLoaded, isSignedIn, user]);

  if (!isLoaded) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        fontSize: '18px'
      }}>
        <div style={{
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          Loading authentication...
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {isSignedIn ? (
          <>
            <Route path="/" element={<SimpleLayout><Dashboard /></SimpleLayout>} />
            <Route path="/dashboard" element={<SimpleLayout><Dashboard /></SimpleLayout>} />
            <Route path="/users" element={<SimpleLayout><UsersPage /></SimpleLayout>} />
            <Route path="/shipments" element={<SimpleLayout><ShipmentsPage /></SimpleLayout>} />
            <Route path="/compliance" element={<SimpleLayout><CompliancePage /></SimpleLayout>} />
            <Route path="/payments" element={<SimpleLayout><PaymentsPage /></SimpleLayout>} />
            <Route path="/logs" element={<SimpleLayout><LogsPage /></SimpleLayout>} />
            <Route path="/manual" element={<SimpleLayout><ManualPage /></SimpleLayout>} />
            <Route path="/support" element={<SimpleLayout><SupportPage /></SimpleLayout>} />
            <Route path="/settings" element={<SimpleLayout><SettingsPage /></SimpleLayout>} />
            <Route path="/platform" element={<SimpleLayout><PlatformPage /></SimpleLayout>} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
