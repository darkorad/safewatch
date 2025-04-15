'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {Icons} from '@/components/icons';
import {Separator} from '@/components/ui/separator';
import {Button} from '@/components/ui/button';
import {useEffect, useState} from 'react';
import {useToast} from '@/hooks/use-toast';
import {useRouter} from 'next/navigation';

export function SettingsSidebar() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const {toast} = useToast();
  const router = useRouter();

  useEffect(() => {
    if (isSettingsOpen) {
      toast({
        title: 'Settings Opened',
        description: 'You have opened settings.',
      });
    }
  }, [isSettingsOpen, toast]);

  const handleSettingsToggle = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleLogout = () => {
    // TODO: Implement actual logout functionality
    toast({
      title: 'Logged Out',
      description: 'You have been logged out.',
    });
    router.push('/login');
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarTrigger>
            <Icons.settings className="mr-2 h-4 w-4"/>
            Settings
          </SidebarTrigger>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Tracking Settings</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Location Tracking</SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>Geofencing</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarSeparator/>
          <SidebarGroup>
            <SidebarGroupLabel>Safety Settings</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>SOS Contacts</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarSeparator/>
          <SidebarGroup>
            <SidebarGroupLabel>Usage Settings</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>App Usage Limits</SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>Website Content Filtering</SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>Communication Monitoring</SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>Time Limits</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarSeparator/>
          <SidebarGroup>
            <SidebarGroupLabel>Reports</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Usage Reports</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarSeparator/>
          <SidebarGroup>
            <SidebarGroupLabel>Account Settings</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Data Privacy</SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>Account Management</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <Separator/>
          <div className="p-2">
            <Button variant="outline" className="w-full" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}
