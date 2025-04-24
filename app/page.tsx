"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { login } from '@/utils/auth';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      router.push('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
        <input
          className="p-2 border rounded"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="p-2 border rounded"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-white text-black px-4 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}