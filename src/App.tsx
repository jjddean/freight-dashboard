import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import UsersPage from './pages/UsersPage';
import ShipmentsPage from './pages/ShipmentsPage';
import CompliancePage from './pages/CompliancePage';
import PaymentsPage from './pages/PaymentsPage';
import LogsPage from './pages/LogsPage';
import ManualPage from './pages/ManualPage';
import SupportPage from './pages/SupportPage';
import SettingsPage from './pages/SettingsPage';
import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';

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
      </div>
    );
  }

  return (
    <React.StrictMode>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="shipments" element={<ShipmentsPage />} />
            <Route path="compliance" element={<CompliancePage />} />
            <Route path="payments" element={<PaymentsPage />} />
            <Route path="logs" element={<LogsPage />} />
            <Route path="manual" element={<ManualPage />} />
            <Route path="support" element={<SupportPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="platform" element={<PlatformPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
