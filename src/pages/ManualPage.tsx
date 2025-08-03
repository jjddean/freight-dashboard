import React from 'react';

const ManualPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Manual Actions</h1>
        <p className="text-gray-600">Trigger workflows and manual processes</p>
      </div>
      <div className="admin-card">
        <div className="text-center py-12">
          <span style={{ fontSize: '48px', color: '#9ca3af', display: 'block' }}>⚙️</span>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Manual Operations</h3>
          <p className="mt-1 text-sm text-gray-500">Trigger workflows and retry failed automation</p>
        </div>
      </div>
    </div>
  );
};

export default ManualPage;
