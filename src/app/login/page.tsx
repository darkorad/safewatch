'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {useToast} from '@/hooks/use-toast';
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {Link} from '@/components/ui/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {toast} = useToast();
  const router = useRouter();

  const handleLogin = async () => {
    // TODO: Implement actual login functionality
    toast({
      title: 'Logged In',
      description: `Logged in with email ${email}.`,
    });
    router.push('/');
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-3/4 max-w-md rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login to SafeWatch</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="mt-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <Button onClick={handleLogin}>Log In</Button>
          </div>
          <div className="mt-4 text-sm">
            Don't have an account? <Link href="/register">Register</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
