import React from 'react';
import AuthForm from '@/components/AuthForm';

export default function LoginPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Sign Up / Login</h1>
      <AuthForm />
    </div>
  );
}
