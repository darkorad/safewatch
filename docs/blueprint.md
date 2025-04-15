# **App Name**: SafeWatch

## Core Features:

- Firebase SDK Integration: Integrate Firebase SDK for Capacitor to leverage Firebase services without conflicting with existing Supabase setup.
- FCM Setup: Set up Firebase Cloud Messaging (FCM) for push notifications, including handling background and foreground notifications.
- Firebase Analytics: Enable Firebase Analytics to track user activity and gather insights on app usage.
- Crashlytics Integration: Implement Crashlytics for real-time crash reporting to quickly identify and fix issues.
- Remote Config Setup: Optionally configure Remote Config to remotely toggle features without app updates.

## Style Guidelines:

- Primary color: Dark blue (#003049) for trust and safety.
- Secondary color: Light gray (#D6D6D6) for neutral backgrounds and text.
- Accent: Teal (#40E0D0) for interactive elements and notifications.
- Clean, readable fonts optimized for mobile screens.
- Simple and intuitive icons for navigation and features.
- Clear and intuitive layout for easy navigation.

## Original User Request:
I'm building a mobile app called Travewatcher using Capacitor, Supabase, and TypeScript (with Vite). I want to integrate Firebase into this app to support additional features. Here's what I need Firebase to help with:

App Overview:

App Type: Family safety/tracking app

Platform: iOS + Android (Capacitor-based)

Frontend: TypeScript + Vite + React

Existing backend: Supabase (authentication, database, and storage)

What I need Firebase for:

Push notifications (Firebase Cloud Messaging - FCM)

Analytics (Firebase Analytics to track user activity)

Crashlytics (real-time crash reporting for mobile)

Optional: Remote Config (for remotely toggling features)

Notes:

I already have authentication and database on Supabase, so I don't want Firebase Auth or Firestore.

I want a setup guide or example config that works with Capacitor (including how to set up the Android/iOS native side).

Please guide me step-by-step or give me the necessary configuration for:

Installing Firebase SDK in a Capacitor app

Setting up FCM (including background and foreground notification handling)

Enabling Firebase Analytics and Crashlytics

Proper configuration in AndroidManifest.xml and Info.plist if needed
  