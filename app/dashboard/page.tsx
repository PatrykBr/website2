'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push('/auth/sign-in');
      } else {
        setUser(user);
      }
    };

    fetchUser();
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/auth/sign-in');
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-500/10 to-transparent">
      <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg border border-white/10 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <p className="mb-4">Welcome, {user.email}!</p>
        <button
          onClick={handleSignOut}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}