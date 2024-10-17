import React from 'react';
import { AuthCheck } from '@/components/AuthCheck';

export default function DashboardPage() {
  return (
    <AuthCheck>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        {/* Add your dashboard content here */}
      </div>
    </AuthCheck>
  );
}

