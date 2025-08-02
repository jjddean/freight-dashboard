import React, { useState } from 'react';
import { Users, Package, AlertTriangle, DollarSign, Activity, TrendingUp, TestTube, CheckCircle, Clock, AlertCircle } from 'lucide-react';

// API Testing Service - Direct in component
const VERCEL_APP_URL = 'https://clerk-react-lac.vercel.app';

interface TestResult {
  endpoint: string;
  status: 'success' | 'error';
  responseTime: number;
  data?: any;
  error?: string;
}

const Dashboard: React.FC = () => {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const runAPITests = async () => {
    setIsLoading(true);
    setTestResults([]);

    const tests = [
      {
        name: 'Quote API',
        endpoint: '/api/quotes',
        method: 'POST',
        body: {
          origin: 'London, UK',
          destination: 'Hamburg, DE',
          serviceType: 'ocean',
          cargoType: 'general',
          weight: '1000',
          dimensions: { length: '100', width: '100', height: '100' },
          value: '10000',
          incoterms: 'FOB',
          urgency: 'standard',
          additionalServices: ['insurance'],
          contactInfo: {
            name: 'Admin Test',
            email: 'admin@test.com',
            phone: '+44123456789',
            company: 'Test Company'
          }
        }
      },
      {
        name: 'Rates API',
        endpoint: '/api/rates',
        method: 'POST',
        body: {
          origin: {
            street1: '123 Test St',
            city: 'New York',
            state: 'NY',
            zip: '10001',
            country: 'US'
          },
          destination: {
            street1: '456 Test Ave',
            city: 'Los Angeles',
            state: 'CA',
            zip: '90001',
            country: 'US'
          },
          parcel: {
            length: 10,
            width: 8,
            height: 6,
            distance_unit: 'in',
            weight: 5,
            mass_unit: 'lb'
          }
        }
      },
      {
        name: 'Tracking API',
        endpoint: '/api/shipments/SH-2024-001/tracking',
        method: 'GET'
      }
    ];

    const results: TestResult[] = [];

    for (const test of tests) {
      const startTime = Date.now();
      try {
        const response = await fetch(`${VERCEL_APP_URL}${test.endpoint}`, {
          method: test.method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: test.body ? JSON.stringify(test.body) : undefined
        });

        const responseTime = Date.now() - startTime;
        const data = await response.json();

        results.push({
          endpoint: test.endpoint,
          status: response.ok ? 'success' : 'error',
          responseTime,
          data: response.ok ? data : undefined,
          error: response.ok ? undefined : `HTTP ${response.status}`
        });
      } catch (error) {
        results.push({
          endpoint: test.endpoint,
          status: 'error',
          responseTime: Date.now() - startTime,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    setTestResults(results);
    setIsLoading(false);
  };
  const stats = [
    { name: 'Total Users', value: '2,847', change: '+12%', icon: Users, color: 'text-blue-600' },
    { name: 'Active Shipments', value: '1,234', change: '+8%', icon: Package, color: 'text-green-600' },
    { name: 'Compliance Flags', value: '23', change: '-15%', icon: AlertTriangle, color: 'text-red-600' },
    { name: 'Revenue (MTD)', value: '$847K', change: '+23%', icon: DollarSign, color: 'text-purple-600' },
  ];

  const recentActivity = [
    { id: 1, type: 'user', message: 'New user registration: john.doe@company.com', time: '2 minutes ago' },
    { id: 2, type: 'shipment', message: 'Shipment SH-2024-001 flagged for compliance review', time: '5 minutes ago' },
    { id: 3, type: 'payment', message: 'Payment processed: $12,450 for invoice INV-2024-0234', time: '12 minutes ago' },
    { id: 4, type: 'system', message: 'API rate limit exceeded for carrier integration', time: '18 minutes ago' },
    { id: 5, type: 'user', message: 'User access revoked: suspended.user@company.com', time: '25 minutes ago' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header */}
      <div>
        <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#111827', margin: '0 0 8px 0' }}>
          Admin Dashboard
        </h1>
        <p style={{ color: '#6b7280', margin: 0 }}>Overview of system activity and key metrics</p>
      </div>

      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="admin-card">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ flexShrink: 0 }}>
                  <Icon style={{ height: '32px', width: '32px' }} className={stat.color} />
                </div>
                <div style={{ marginLeft: '20px', flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280', marginBottom: '4px' }}>
                    {stat.name}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline' }}>
                    <div style={{ fontSize: '24px', fontWeight: '600', color: '#111827' }}>
                      {stat.value}
                    </div>
                    <div style={{
                      marginLeft: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: stat.change.startsWith('+') ? '#059669' : '#dc2626'
                    }}>
                      {stat.change}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="admin-card">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <button className="admin-button-secondary text-left p-4">
            <Users className="h-5 w-5 mb-2" />
            <div className="text-sm font-medium">Approve User</div>
            <div className="text-xs text-gray-500">Review pending registrations</div>
          </button>
          <button className="admin-button-secondary text-left p-4">
            <Package className="h-5 w-5 mb-2" />
            <div className="text-sm font-medium">Override Quote</div>
            <div className="text-xs text-gray-500">Manually adjust pricing</div>
          </button>
          <button className="admin-button-secondary text-left p-4">
            <AlertTriangle className="h-5 w-5 mb-2" />
            <div className="text-sm font-medium">Review Compliance</div>
            <div className="text-xs text-gray-500">Check flagged shipments</div>
          </button>
          <button className="admin-button-secondary text-left p-4">
            <Activity className="h-5 w-5 mb-2" />
            <div className="text-sm font-medium">Trigger Workflow</div>
            <div className="text-xs text-gray-500">Manual process execution</div>
          </button>
        </div>
      </div>

      {/* API Integration Testing */}
      <div className="admin-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 className="text-lg font-medium text-gray-900">Vercel App API Testing</h2>
          <button
            onClick={runAPITests}
            disabled={isLoading}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              backgroundColor: isLoading ? '#9ca3af' : '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            <TestTube style={{ width: '16px', height: '16px' }} />
            {isLoading ? 'Testing...' : 'Test Vercel APIs'}
          </button>
        </div>

        {testResults.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {testResults.map((result, index) => (
              <div key={index} style={{
                padding: '12px',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                backgroundColor: result.status === 'success' ? '#f0fdf4' : '#fef2f2'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontWeight: '500', fontSize: '14px' }}>{result.endpoint}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '12px', color: '#6b7280' }}>{result.responseTime}ms</span>
                    <span style={{
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '500',
                      backgroundColor: result.status === 'success' ? '#dcfce7' : '#fee2e2',
                      color: result.status === 'success' ? '#166534' : '#dc2626'
                    }}>
                      {result.status}
                    </span>
                  </div>
                </div>
                {result.error && (
                  <div style={{ fontSize: '12px', color: '#dc2626' }}>
                    Error: {result.error}
                  </div>
                )}
                {result.data && (
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>
                    Response: {JSON.stringify(result.data).substring(0, 100)}...
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: '12px', fontSize: '12px', color: '#6b7280' }}>
          Testing connection to: https://clerk-react-lac.vercel.app/
        </div>
      </div>

      {/* Recent Activity */}
      <div className="admin-card">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
        <div className="flow-root">
          <ul className="-mb-8">
            {recentActivity.map((activity, activityIdx) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {activityIdx !== recentActivity.length - 1 ? (
                    <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                        <Activity className="h-4 w-4 text-white" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-500">{activity.message}</p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        {activity.time}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="admin-card">
          <h2 className="text-lg font-medium text-gray-900 mb-4">API Status</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Shippo API</span>
              <span className="status-badge status-active">Online</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">ReachShip API</span>
              <span className="status-badge status-active">Online</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">EasyShip API</span>
              <span className="status-badge status-pending">Degraded</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Stripe Payments</span>
              <span className="status-badge status-active">Online</span>
            </div>
          </div>
        </div>

        <div className="admin-card">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Performance Metrics</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Avg Response Time</span>
              <span className="text-sm font-medium text-gray-900">245ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Success Rate</span>
              <span className="text-sm font-medium text-gray-900">99.2%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Daily API Calls</span>
              <span className="text-sm font-medium text-gray-900">12,847</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Error Rate</span>
              <span className="text-sm font-medium text-gray-900">0.8%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
