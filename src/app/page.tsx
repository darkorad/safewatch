'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {useToast} from '@/hooks/use-toast';
import {useEffect, useState} from 'react';

function generateCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export default function Home() {
  const [connectionCode, setConnectionCode] = useState<string | null>(null);
  const [enteredCode, setEnteredCode] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const {toast} = useToast();

  useEffect(() => {
    if (connectionCode) {
      toast({
        title: 'Connection Code Generated',
        description: `Your connection code is ${connectionCode}. Share this with your parent.`,
      });
    }
  }, [connectionCode, toast]);

  const handleGenerateCode = () => {
    const code = generateCode();
    setConnectionCode(code);
  };

  const handleConnect = () => {
    if (connectionCode && enteredCode === connectionCode) {
      setIsConnected(true);
      toast({
        title: 'Connected!',
        description: 'You are now connected with your child.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Invalid connection code. Please try again.',
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-3/4 max-w-md rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Welcome to SafeWatch</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          A family safety and tracking application.
          {!isConnected ? (
            <>
              {connectionCode ? (
                <div>
                  <p>Share this code with your parent:</p>
                  <p className="font-bold text-lg">{connectionCode}</p>
                </div>
              ) : (
                <div className="mt-4">
                  <Button onClick={handleGenerateCode}>Generate Connection Code</Button>
                </div>
              )}
              <div className="mt-4">
                <Input
                  type="text"
                  placeholder="Enter Connection Code"
                  value={enteredCode || ''}
                  onChange={(e) => setEnteredCode(e.target.value)}
                />
                <Button className="mt-2" onClick={handleConnect}>
                  Connect
                </Button>
              </div>
            </>
          ) : (
            <div>
              <p>You are connected!</p>
              {/* TODO: Implement the StreetView Component */}
              {/* <StreetViewComponent location={childLocation} /> */}
              <p>Map Currently Unavailable.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
