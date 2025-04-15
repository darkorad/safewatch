'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {useToast} from '@/hooks/use-toast';
import {useEffect, useState} from 'react';

function generateCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export default function Home() {
  const [connectionCode, setConnectionCode] = useState<string | null>(null);
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

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-3/4 max-w-md rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Welcome to SafeWatch</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          A family safety and tracking application.
          <div className="mt-4">
            <Button onClick={handleGenerateCode}>Generate Connection Code</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
