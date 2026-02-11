# 🛠️ Vibe Match: Developer Setup Guide

Follow these steps to get the project running locally.

## 1. Prerequisites
- **Node.js** (v18 or higher)
- **Git**
- A **Supabase** account (Free tier is fine)

## 2. Installation

```bash
# Clone the repository
git clone https://github.com/anshc022/Clozer.git
cd Clozer

# Go to frontend directory
cd frontend

# Install dependencies
npm install
```

## 3. Database Setup (Supabase)

1.  Create a new project on [Supabase.com](https://supabase.com).
2.  Go to the **SQL Editor** in your dashboard.
3.  Open the `supabase_schema.sql` file from this repository.
4.  Copy the entire content and paste it into the SQL Editor.
5.  Click **RUN** to create the tables (`profiles`, `matches`) and security policies.

## 4. Environment Configuration

1.  In the `frontend` folder, rename `.env.example` to `.env`.
2.  Get your API keys from Supabase:
    *   Go to **Project Settings** -> **API**.
    *   Copy **Project URL** -> paste as `VITE_SUPABASE_URL`.
    *   Copy **anon public** key -> paste as `VITE_SUPABASE_ANON_KEY`.

Example `.env` file:
```env
VITE_SUPABASE_URL=https://xyz.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5c...
```

## 5. Run the App

```bash
# Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser.

## 👻 Troubleshooting
- **White screen?** Check console for errors.
- **Supabase error?** Ensure you ran the SQL schema and copied keys correctly.
