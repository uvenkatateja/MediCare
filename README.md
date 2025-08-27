# Healthcare SaaS Landing Page

A modern, interactive landing page for a healthcare SaaS product built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **Interactive Feature Showcase**: Navigate through 5 key healthcare features
- **Multiple Navigation Methods**: 
  - Click on feature list items
  - Use arrow buttons (up/down)
  - Scroll interaction (sticky section with feature switching)
  - Touch gestures on mobile (swipe)
- **Responsive Design**: Optimized for both desktop and mobile
- **Smooth Animations**: Powered by Framer Motion
- **Modern UI**: Built with ShadCN UI components

## 🏥 Healthcare Features Showcased

1. **Smart Appointment & OPD Dashboard** - Streamlines patient scheduling and outpatient department management
2. **AI-Powered EMR & E-Prescription** - Utilizes AI for electronic medical records and prescription generation
3. **Clinic Insights & Reports** - Provides data analytics and reporting for clinic performance
4. **Patient Records & History** - Manages comprehensive patient medical records and history
5. **Billing & GST-Compliant Invoicing** - Handles billing processes with GST compliance

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4.x
- **UI Components**: ShadCN UI
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── features/           # Feature-specific components
│   │   │   ├── FeatureImage.tsx
│   │   │   ├── FeatureContent.tsx
│   │   │   └── FeatureNavigation.tsx
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/           # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   └── CTASection.tsx
│   │   └── ui/                 # Reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── progress.tsx
│   ├── data/                   # Static data
│   │   └── features.ts
│   ├── hooks/                  # Custom hooks
│   │   ├── useScrollFeatures.ts
│   │   └── useTouchGestures.ts
│   ├── lib/                    # Utilities
│   │   └── utils.ts
│   ├── types/                  # TypeScript types
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── images/                 # Feature images (add your own)
└── package.json
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 🎨 Customization

### Adding Feature Images
Replace the placeholder images in `public/images/` with your actual feature screenshots:
- `appointment-dashboard.jpg`
- `ai-emr.jpg`
- `clinic-insights.jpg`
- `patient-records.jpg`
- `billing-gst.jpg`

### Updating Feature Content
Modify the feature data in `src/data/features.ts` to match your product's features.

### Styling
The project uses Tailwind CSS with a custom design system. Colors and spacing can be customized in `src/index.css`.

## 📱 Mobile Experience

- **Touch Gestures**: Swipe up/down or left/right to navigate features
- **Responsive Layout**: Stacked layout on mobile (image above text)
- **Optimized Navigation**: Touch-friendly buttons and feature list

## 🔧 Key Components

- **FeaturesSection**: Main interactive section with scroll-lock functionality
- **useScrollFeatures**: Custom hook managing scroll behavior and feature switching
- **useTouchGestures**: Custom hook for mobile touch interactions
- **FeatureNavigation**: Arrow buttons, feature list, and progress indicator

## 🎯 User Experience

### Desktop
- Left side: Feature image/mockup
- Right side: Feature content + navigation
- Scroll behavior: Section becomes sticky, features change on scroll

### Mobile
- Stacked layout: Image on top, content below
- Same interactions: tap arrows, swipe to change features
- Responsive navigation panel

## 📄 License

This project is created for demonstration purposes. Feel free to use and modify as needed.