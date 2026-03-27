# 🎙️ PrepAI — AI Mock Interview Platform

An intelligent mock interview platform powered by real-time AI voice agents. Practice interviews, get instant feedback, and level up your interview game — all in one place.


## ✨ Features

- 🎤 **Real-time AI Voice Interviews** — Powered by Vapi AI voice agents
- 🤖 **Custom Interview Generation** — AI generates role-specific questions using Google Gemini
- 🔐 **Authentication** — Secure Sign Up / Sign In with Firebase Auth
- 📊 **Instant Feedback** — Detailed performance feedback after every interview session
- 💾 **Interview History** — All your past interviews saved and accessible
- 📱 **Responsive UI** — Clean, modern design with Tailwind CSS

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | Frontend Framework |
| Tailwind CSS | Styling |
| Firebase | Auth + Database |
| Vapi | AI Voice Agent |
| Google Gemini | Interview Question Generation |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- Firebase account
- Vapi account
- Google Gemini API key

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/prepai.git

# Navigate into the project
cd prepai

# Install dependencies
npm install

# Start the dev server
npm run dev
```

### Environment Variables

Create a `.env.local` file in the root directory and add:

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_token
VAPI_WORKFLOW_ID=your_workflow_id

# Google Gemini
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_key
```

---

## 📁 Project Structure

```
prepai/
├── app/
│   ├── (auth)/         # Sign in / Sign up pages
│   ├── (root)/         # Main app pages
│   │   ├── page.tsx    # Home page
│   │   └── interview/  # Interview session pages
├── components/         # Reusable UI components
├── firebase/           # Firebase config
├── lib/                # Utility functions & actions
└── public/             # Static assets
```

---

## 🧠 How It Works

1. **Sign up / Log in** with your account
2. **Generate an interview** — choose role, level, and tech stack
3. **Start the session** — AI voice agent conducts the interview in real time
4. **Get feedback** — detailed analysis of your performance after each session
5. **Track progress** — review past interviews anytime

---

## 🙌 Acknowledgements

- [Vapi](https://vapi.ai) — for the voice AI infrastructure
- [Google Gemini](https://ai.google.dev) — for AI-powered question generation
- [Firebase](https://firebase.google.com) — for auth and database

---

## 📄 License

MIT License — feel free to use and modify.

---

> Built with 💙 by Samruddhi Gulhane

