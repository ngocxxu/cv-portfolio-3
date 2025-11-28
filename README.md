# Pixel Game Portfolio

A retro-style portfolio website built with React, TypeScript, Bun, Zustand, Framer Motion, and Canvas API. Features authentic pixel game aesthetics with smooth animations.

## Features

- 🎮 Pixel game style UI with retro aesthetics
- ⚡ Built with React 18+ and TypeScript
- 🚀 Powered by Bun runtime
- 🎨 Framer Motion animations
- 🖼️ Canvas API for pixel-perfect rendering
- 📦 Zustand for state management
- 🎯 Responsive design
- 🎨 Raven Fantasy Icons integration

## Tech Stack

- **React 18+** with **TypeScript**
- **Bun** (runtime and package manager)
- **Vite** (build tool)
- **Zustand** (state management)
- **Framer Motion** (animations)
- **Canvas API** (pixel art rendering)
- **CSS3** with `image-rendering: pixelated`

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed on your system

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cv-portfolio-3
```

2. Install dependencies:
```bash
bun install
```

3. Download Raven Fantasy Icons:
   - Visit [Raven Fantasy Icons on itch.io](https://clockworkraven.itch.io/raven-fantasy-icons)
   - Download the free version
   - Extract and place icons in `src/assets/icons/raven-fantasy/`

4. Start the development server:
```bash
bun dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Footer component
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   ├── Projects.tsx     # Projects section
│   ├── Experience.tsx   # Experience section
│   ├── Contact.tsx      # Contact form
│   ├── PixelButton.tsx  # Pixel-styled button
│   ├── PixelCard.tsx    # Pixel-styled card
│   ├── PixelCharacter.tsx # Animated pixel character
│   ├── PixelCanvas.tsx  # Canvas component
│   ├── PixelInput.tsx   # Pixel-styled input
│   └── PixelIcon.tsx    # Icon component
├── store/               # Zustand store
│   └── useStore.ts      # Global state management
├── utils/               # Utility functions
│   ├── canvasUtils.ts   # Canvas helpers
│   └── iconUtils.ts     # Icon mapping
├── styles/              # Global styles
│   └── global.css       # Main stylesheet
└── assets/              # Static assets
    └── icons/           # Icon files
        └── raven-fantasy/
```

## Customization

### Adding Your Content

1. **About Section**: Edit `src/components/About.tsx`
2. **Skills**: Update the `skills` array in `src/components/Skills.tsx`
3. **Projects**: Modify the `projects` array in `src/components/Projects.tsx`
4. **Experience**: Update the `experiences` array in `src/components/Experience.tsx`
5. **Contact**: Customize the contact form in `src/components/Contact.tsx`

### Icon Mapping

Icons are mapped in `src/utils/iconUtils.ts`. Add new mappings for your skills and projects:

```typescript
const iconMap: Record<string, string> = {
  'your-skill': 'icon-name',
  // ...
};
```

### Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --bg-dark: #1a1a2e;
  --primary-cyan: #4ecdc4;
  /* ... */
}
```

## Building for Production

```bash
bun run build
```

The built files will be in the `dist/` directory.

## Preview Production Build

```bash
bun run preview
```

## License

This project is open source and available under the MIT License.

## Acknowledgments

- [Raven Fantasy Icons](https://clockworkraven.itch.io/raven-fantasy-icons) by Clockwork Raven
- [Press Start 2P Font](https://fonts.google.com/specimen/Press+Start+2P) by Google Fonts
- Pixel art UI inspiration from [itch.io](https://itch.io/game-assets/tag-pixel-art/tag-user-interface)
