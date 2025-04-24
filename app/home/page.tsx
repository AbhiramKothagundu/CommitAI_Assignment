"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/utils/auth';
import ImageGrid from '@/components/ImageGrid';
import ChatBox from '@/components/ChatBox';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/');
    }
  }, [router]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome!</h1>
      <ImageGrid />
      <ChatBox />
    </div>
  );
}