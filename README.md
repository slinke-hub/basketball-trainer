# 🏀 Basketball Training App

A modern, feature-rich Basketball Personal Training App built with Next.js, featuring stunning neon UI effects, comprehensive workout tracking, meal planning, and progress analytics.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38bdf8?logo=tailwind-css)
![Firebase](https://img.shields.io/badge/Firebase-Ready-orange?logo=firebase)

## ✨ Features

### 🎨 Stunning Neon UI
- **Blue Neon Border Effects** with rotating gradients
- **Colorful Icon System** (6 distinct neon colors)
- **Animated Glows** and smooth transitions
- **Dark Theme** with vibrant accents
- **Fully Responsive** design for all devices

### 🏋️ Core Functionality
- **Workout Tracking** - Browse programs, track exercises, sets, and reps
- **Meal Planning** - Log meals with nutritional breakdowns
- **Progress Analytics** - View charts, stats, and personal records
- **BMI Calculator** - Calculate and track body metrics
- **User Profiles** - Manage basketball stats and account settings

### 🔐 Authentication
- Firebase Authentication integration
- Mock auth mode for development
- Protected routes with automatic redirects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- Firebase account (optional for development)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/basketball-trainer.git
cd basketball-trainer
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Copy the environment template:
```bash
cp env.template .env.local
```

For development, the app works with mock authentication out of the box!

For production, add your Firebase credentials to `.env.local`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages

- **`/login`** - User authentication
- **`/signup`** - New user registration  
- **`/`** - Dashboard with stats and quick actions
- **`/workouts`** - Workout program browser
- **`/workouts/track`** - Exercise tracking
- **`/meals`** - Meal planner and nutrition tracker
- **`/progress`** - Progress charts and analytics
- **`/bmi`** - BMI calculator
- **`/profile`** - User profile and settings
- **`/settings`** - App preferences

## 🎨 Design System

### Color Palette
- **Neon Blue** (#00d9ff) - Primary accent
- **Neon Purple** (#a855f7) - Secondary accent
- **Neon Cyan** (#06b6d4) - Highlights
- **Neon Pink** (#ec4899) - Special accents
- **Neon Green** (#10b981) - Success states
- **Dark Tones** (#09090b - #27272a) - Backgrounds

### Components
- **Buttons** - 4 variants (primary, secondary, ghost, danger)
- **Cards** - Animated neon borders with hover effects
- **Inputs** - Focus states with validation
- **Bottom Navigation** - Colorful icons with active indicators

## 🛠️ Tech Stack

- **Framework:** [Next.js 16.1.1](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + Custom CSS
- **Icons:** [Lucide React](https://lucide.dev/)
- **Charts:** [Recharts](https://recharts.org/)
- **Backend:** [Firebase](https://firebase.google.com/) (Auth, Firestore, Storage)
- **State Management:** React Context API

## 📂 Project Structure

```
basketball-trainer/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Dashboard
│   ├── login/             # Authentication pages
│   ├── workouts/          # Workout tracking
│   ├── meals/             # Meal planning
│   ├── progress/          # Analytics
│   ├── profile/           # User profile
│   └── globals.css        # Global styles & design tokens
├── components/            # Reusable components
│   ├── ui/               # UI components (Button, Card, Input)
│   └── BottomNav.tsx     # Navigation
├── context/              # React contexts
│   └── AuthContext.tsx   # Authentication state
├── lib/                  # Utilities & config
│   └── firebase.config.ts # Firebase setup
└── public/               # Static assets
```

## 🔥 Firebase Setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication (Email/Password)
3. Create a Firestore database
4. Enable Storage
5. Copy your config to `.env.local`

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Firebase Hosting
```bash
npm run build
firebase deploy
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspired by modern sports apps
- Built with Next.js and Firebase
- Icons by Lucide
- Fonts from Google Fonts (Inter)

## 📞 Support

For issues or questions, please open an issue on GitHub.

---

**Made with 🏀 and ⚡ by [Your Name]**
