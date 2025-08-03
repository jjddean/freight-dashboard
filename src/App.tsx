import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Temporarily disable Clerk authentication for admin dashboard
// import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import SimpleLayout from './components/SimpleLayout';
import NotificationSystem, { useNotifications } from './components/NotificationSystem';
import Dashboard from './pages/Dashboard';
import UsersPage from './pages/UsersPage';
import ShipmentsPage from './pages/ShipmentsPage';
import CompliancePage from './pages/CompliancePage';
import PaymentsPage from './pages/PaymentsPage';
import LogsPage from './pages/LogsPage';
import ManualPage from './pages/ManualPage';
import SupportPage from './pages/SupportPage';
import SettingsPage from './pages/SettingsPage';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  if (!clerkPubKey) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        gap: '16px',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <h1 style={{ color: '#dc2626', fontSize: '24px', margin: 0 }}>Configuration Error</h1>
        <p style={{ color: '#6b7280', textAlign: 'center', maxWidth: '400px', margin: 0 }}>
          Missing Clerk Publishable Key. Please set VITE_CLERK_PUBLISHABLE_KEY in your environment variables.
        </p>
        <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0 }}>
          Check your Vercel dashboard → Settings → Environment Variables
        </p>
      </div>
    );
  }

  return (
    // Temporarily disable ClerkProvider for deployment
    // <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        {/* Temporarily disable SignedIn wrapper */}
        {/* <SignedIn> */}
          <Routes>
            <Route path="/" element={<SimpleLayout><Dashboard /></SimpleLayout>} />
            <Route path="/dashboard" element={<SimpleLayout><Dashboard /></SimpleLayout>} />
            <Route path="/users" element={<SimpleLayout><UsersPage /></SimpleLayout>} />
            <Route path="/shipments" element={<SimpleLayout><ShipmentsPage /></SimpleLayout>} />
            <Route path="/compliance" element={<SimpleLayout><CompliancePage /></SimpleLayout>} />
            <Route path="/payments" element={<SimpleLayout><PaymentsPage /></SimpleLayout>} />
            <Route path="/support" element={<SimpleLayout><SupportPage /></SimpleLayout>} />
            <Route path="/logs" element={<SimpleLayout><LogsPage /></SimpleLayout>} />
            <Route path="/manual" element={<SimpleLayout><ManualPage /></SimpleLayout>} />
            <Route path="/settings" element={<SimpleLayout><SettingsPage /></SimpleLayout>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        {/* </SignedIn> */}

        {/* <SignedOut>
          <RedirectToSignIn />
        </SignedOut> */}
      </BrowserRouter>
    // </ClerkProvider>
  );
}

export default App;
