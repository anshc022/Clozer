# Project Vibe Match: Web App Master Plan

**Target:** Web Application (Responsive)
**Stack:** React + Vite
**Version:** 3.0 (Web Pivot)

## 1. Executive Summary
Project Vibe Match is a web-based anonymous matching platform for university students. It prioritizes "vibes" (music, interests, personality tags) over photos. The web app will be fully responsive, allowing access from mobile browsers and laptops.

## 2. Core Mechanics

### The "Vibe Check" Profile
*   **No Photos Initially:** Users are represented by generative avatars or vibe-based abstract art.
*   **Vibe Tags:** #NightOwl, #Techno, #MatchaLover, etc.
*   **Spotify Integration:** Connect account to display top genres/artists (via API).

### Matching Engine
*   **Logic:** Interest overlap + Location (University specific).
*   **Modes:**
    *   Study Buddy
    *   Platonic Friend
    *   Dating
    *   Event Squad

### The "Defrost" Chat
*   **Anonymous Start:** Chat begins with blurred/hidden details.
*   **Progression:** As message count increases, the profile "defrosts" (reveals more info).
*   **Vibe Check Button:** Manual override to reveal identities if both agree.

## 3. Technology Stack

### Frontend (Web)
*   **Framework:** React (v18+)
*   **Build Tool:** Vite (Fast HMR & Build)
*   **Styling:** Tailwind CSS (Rapid UI development)
*   **State Management:** Zustand or React Context
*   **Routing:** React Router 6

### Backend & Database
*   **Platform:** Supabase (PostgreSQL)
*   **Auth:** Supabase Auth (Email + potential .edu verification)
*   **Realtime:** Supabase Realtime (for Chat & Presence)

### Deployment
*   **Host:** Vercel (Preferred for React/Vite) or Netlify

## 4. Development Roadmap

### Phase 1: Setup & UI (Days 1-3)
*   Initialize Vite + React project.
*   Setup Tailwind CSS.
*   Design system (Colors: Neon/Dark Mode, Fonts: Modern Sans).
*   Build static views: Landing, Login, Profile Edit.

### Phase 2: Core Logic (Days 4-7)
*   Supabase integration (Auth tables, Profiles table).
*   Profile creation flow (Tag selection, Music inputs).
*   "Vibeprint" display component.

### Phase 3: Matching & Chat (Days 8-14)
*   Matching logic (SQL query or Edge Function to find compatible users).
*   Real-time chat implementation.
*   "Defrost" visual effect (CSS blur filters based on message count).

## 5. Directory Structure
```
/src
  /assets        # Images, global styles
  /components    # Reusable UI (Buttons, Cards, ChatBubble)
  /context       # Global state (Auth, Theme)
  /hooks         # Custom hooks (useChat, useMatch)
  /pages         # Route views (Home, Profile, Match, Chat)
  /services      # Supabase client & API calls
  App.jsx        # Main entry
  main.jsx       # Mount point
```

## 6. Next Steps
1.  Initialize repository with `npm create vite@latest`.
2.  Install dependencies: `npm install tailwindcss @supabase/supabase-js react-router-dom`.
3.  Start coding the Landing Page.
