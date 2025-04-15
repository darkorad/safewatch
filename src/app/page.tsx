'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {useToast} from '@/hooks/use-toast';
import {useEffect, useState} from 'react';
import {SettingsSidebar} from '@/components/SettingsSidebar';

function generateCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export default function Home() {
  const [connectionCode, setConnectionCode] = useState<string | null>(null);
  const [enteredCode, setEnteredCode] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [childLocation, setChildLocation] = useState<{latitude: number | null; longitude: number | null}>({
    latitude: null,
    longitude: null,
  });
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

  useEffect(() => {
    const storedLocations = localStorage.getItem('offlineLocations');
    let offlineLocations: {latitude: number; longitude: number; timestamp: number}[] = [];
    if (storedLocations) {
      offlineLocations = JSON.parse(storedLocations);
    }

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const {latitude, longitude} = position.coords;
            setChildLocation({latitude: latitude, longitude: longitude});

            // Attempt to send location to parent (simulated)
            if (isConnected) {
              // Simulate sending location data
              toast({
                title: 'Location Updated',
                description: `Sent location update: ${latitude}, ${longitude}`,
              });

              // Send any stored offline locations
              if (offlineLocations.length > 0) {
                offlineLocations.forEach((loc) => {
                  toast({
                    title: 'Offline Location Sent',
                    description: `Sent offline location: ${loc.latitude}, ${loc.longitude} at ${new Date(
                      loc.timestamp
                    ).toLocaleTimeString()}`,
                  });
                });
                localStorage.removeItem('offlineLocations');
              }
            } else {
              // Store location offline
              const newLocation = {
                latitude: latitude,
                longitude: longitude,
                timestamp: Date.now(),
              };
              offlineLocations.push(newLocation);
              localStorage.setItem('offlineLocations', JSON.stringify(offlineLocations));
              toast({
                title: 'Location Stored Offline',
                description: `Location stored for later: ${latitude}, ${longitude}`,
              });
            }
          },
          (error) => {
            console.error('Error getting location:', error);
            toast({
              variant: 'destructive',
              title: 'Location Error',
              description: 'Failed to retrieve location.',
            });
          }
        );
      } else {
        toast({
          variant: 'destructive',
          title: 'Geolocation Error',
          description: 'Geolocation is not supported by this browser.',
        });
      }
    };

    getLocation(); // Get initial location
    const intervalId = setInterval(getLocation, 60000); // Update every 60 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [isConnected, toast]);

  return (
    <div className="flex h-screen">
      <SettingsSidebar/>
      <div className="flex items-center justify-center flex-grow">
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
    </div>
  );
}
