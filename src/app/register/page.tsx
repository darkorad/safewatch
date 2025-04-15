'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {useToast} from '@/hooks/use-toast';
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {Link} from '@/components/ui/link';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {toast} = useToast();
  const router = useRouter();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Passwords do not match.',
      });
      return;
    }

    // TODO: Implement actual registration functionality
    toast({
      title: 'Registered',
      description: `Registered with email ${email}.`,
    });
    router.push('/login');
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-3/4 max-w-md rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Register to SafeWatch</CardTitle>
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
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <Button onClick={handleRegister}>Register</Button>
          </div>
          <div className="mt-4 text-sm">
            Already have an account? <Link href="/login">Login</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
