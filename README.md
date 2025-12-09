# Process Group Dashboard

A modern dashboard interface built with React.js and Tailwind CSS, replicating the design from the screenshot.

## Features

- **Left Sidebar**: Navigation with icons (Home, Folder, Users, Bell, Settings) and action buttons
- **Main Content Panel**: Process Group view with:
  - Header with back navigation and edit controls
  - Search bar with "Ask DAPty anything"
  - Process flow visualization
  - Performance metrics table
  - Tab navigation (Insights, Process Contents, Baseline Journey, More Info)
- **Right Sidebar**: Inspector panel with properties and code view

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Project Structure

```
src/
  ├── components/
  │   ├── LeftSidebar.jsx
  │   ├── MainContent.jsx
  │   └── RightSidebar.jsx
  ├── App.jsx
  ├── main.jsx
  └── index.css
```

## Styling

The application uses a dark theme with purple accents, matching the original design:
- Background: Dark gray (#111827)
- Primary color: Purple (#9333EA)
- Sidebar: Purple primary background
- Content areas: Gray-800 and Gray-900 backgrounds


