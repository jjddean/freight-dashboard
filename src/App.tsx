import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
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
    throw new Error("Missing Clerk Publishable Key");
  }

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <SignedIn>
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
        </SignedIn>

        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default App;
