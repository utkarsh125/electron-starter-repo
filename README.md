# Electron + React + TypeScript + Vite Boilerplate

A modern, production-ready boilerplate for building cross-platform desktop applications using Electron, React, TypeScript, and Vite.

## 🚀 Features

- **Electron 34.0.0** - Latest stable version for cross-platform desktop apps
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript 5.6.2** - Type-safe development with strict configuration
- **Vite 6.0.5** - Lightning-fast build tool and dev server
- **ESLint 9.17.0** - Code linting with TypeScript and React rules
- **Electron Builder** - Automated packaging and distribution
- **Hot Module Replacement (HMR)** - Instant updates during development
- **Cross-platform builds** - macOS, Windows, and Linux support

## 📋 Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher
- **Git** for version control

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd electron-starter-repo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🏃‍♂️ Development

### Start Development Server

Run both React dev server and Electron in development mode:

```bash
npm run dev
```

This will:
- Start Vite dev server on `http://localhost:5123`
- Launch Electron app in development mode
- Enable Hot Module Replacement (HMR)

### Individual Commands

- **React dev server only:**
  ```bash
  npm run dev:react
  ```

- **Electron only:**
  ```bash
  npm run dev:electron
  ```

### Build for Production

```bash
npm run build
```

This compiles TypeScript and builds the React app for production.

### Linting

```bash
npm run lint
```

Runs ESLint with TypeScript and React rules.

## 📦 Distribution

### Build for Different Platforms

**macOS (ARM64):**
```bash
npm run dist:mac
```

**Windows (x64):**
```bash
npm run dist:win
```

**Linux (x64):**
```bash
npm run dist:linux
```

### Build Outputs

- **macOS**: DMG installer
- **Windows**: Portable executable and MSI installer
- **Linux**: AppImage

## 🏗️ Project Structure

```
electron-starter-repo/
├── src/
│   ├── electron/          # Electron main process
│   │   ├── main.ts       # Main entry point
│   │   ├── util.ts       # Utility functions
│   │   └── tsconfig.json # Electron TypeScript config
│   └── ui/               # React frontend
│       ├── App.tsx       # Main React component
│       ├── App.css       # Styles
│       ├── main.tsx      # React entry point
│       └── assets/       # Static assets
├── dist-electron/         # Compiled Electron code
├── dist-react/           # Built React app
├── electron-builder.json # Build configuration
├── vite.config.ts        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── package.json          # Dependencies and scripts
```

## ⚙️ Configuration

### Electron Builder Configuration

The `electron-builder.json` file configures the build process:

```json
{
  "appId": "com.utkarsh.electron-tutorial",
  "files": ["dist-electron", "dist-react"],
  "icon": "./appIcon.png",
  "mac": {
    "target": "dmg"
  },
  "linux": {
    "target": "AppImage",
    "category": "Utility"
  },
  "win": {
    "target": ["portable", "msi"]
  }
}
```

### Vite Configuration

The `vite.config.ts` file configures the build tool:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist-react",
  },
  server: {
    port: 5123,
    strictPort: true,
  }
})
```

## 🔧 Dependencies

### Production Dependencies
- **react**: ^18.3.1 - React library
- **react-dom**: ^18.3.1 - React DOM rendering

### Development Dependencies
- **electron**: ^34.0.0 - Cross-platform desktop app framework
- **electron-builder**: ^25.1.8 - Build and package Electron apps
- **typescript**: ~5.6.2 - TypeScript compiler
- **vite**: ^6.0.5 - Build tool and dev server
- **@vitejs/plugin-react**: ^4.3.4 - React plugin for Vite
- **eslint**: ^9.17.0 - Code linting
- **@types/react**: ^18.3.18 - React TypeScript definitions
- **@types/react-dom**: ^18.3.5 - React DOM TypeScript definitions

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use:**
   - Change the port in `vite.config.ts` if 5123 is occupied

2. **Build errors:**
   - Ensure all dependencies are installed: `npm install`
   - Clear build cache: `rm -rf dist-electron dist-react`

3. **Electron not launching:**
   - Check if the React dev server is running on port 5123
   - Verify the main process path in `package.json`

### Development Tips

- Use `console.log()` in the main process for debugging
- Use React DevTools for frontend debugging
- Check the Electron console for main process logs

## 📝 Scripts Reference

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run dev:react` | Start React dev server only |
| `npm run dev:electron` | Start Electron only |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run transpile:electron` | Compile Electron TypeScript |
| `npm run dist:mac` | Build for macOS |
| `npm run dist:win` | Build for Windows |
| `npm run dist:linux` | Build for Linux |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Electron](https://electronjs.org/) - Cross-platform desktop apps
- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Type safety
