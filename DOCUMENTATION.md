# Electron + React + TypeScript + Vite Documentation

## 📊 Version Analysis

### Current Versions (Updated and Secure)

| Package | Version | Status | Notes |
|---------|---------|--------|-------|
| **Electron** | ^34.0.0 | ✅ Latest | Latest stable version |
| **React** | ^18.3.1 | ✅ Stable | LTS version with hooks |
| **React DOM** | ^18.3.1 | ✅ Stable | Matches React version |
| **TypeScript** | ~5.6.2 | ✅ Latest | Latest stable version |
| **Vite** | ^6.0.5 | ✅ Latest | Latest stable version |
| **ESLint** | ^9.17.0 | ✅ Latest | Latest stable version |
| **Electron Builder** | ^25.1.8 | ✅ Latest | Added for packaging |

### Security Status
- ✅ **0 vulnerabilities** after running `npm audit fix`
- ✅ All dependencies are up to date
- ✅ Using latest stable versions

## 🏗️ Architecture Overview

### Main Process (Electron)
```typescript
// src/electron/main.ts
import { BrowserWindow, app } from "electron";
import { isDev } from "./util.js";
import path from 'path';

app.on("ready", ()=>{
    const mainWindow = new BrowserWindow({});
    if(isDev()) {
        mainWindow.loadURL('http://localhost:5123');
    }else {
        mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));
    }
});
```

**Key Features:**
- Development mode loads from Vite dev server
- Production mode loads from built files
- Environment-aware loading strategy

### Renderer Process (React)
```typescript
// src/ui/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**Key Features:**
- React 18 with StrictMode
- TypeScript support
- CSS modules support
- Hot Module Replacement (HMR)

## 🔧 Build System

### Development Workflow
1. **Vite Dev Server** (Port 5123)
   - Serves React app with HMR
   - TypeScript compilation on-the-fly
   - Fast refresh for React components

2. **Electron Main Process**
   - TypeScript compilation to `dist-electron/`
   - Watches for changes and restarts
   - Loads React app from dev server

### Production Build
1. **React Build** (`npm run build`)
   - TypeScript compilation
   - Vite production build
   - Output to `dist-react/`

2. **Electron Build** (`npm run transpile:electron`)
   - TypeScript compilation
   - Output to `dist-electron/`

3. **Distribution** (`npm run dist:*`)
   - Electron Builder packaging
   - Platform-specific builds

## 📁 File Structure Deep Dive

### Source Code Organization
```
src/
├── electron/                 # Main process code
│   ├── main.ts             # App entry point
│   ├── util.ts             # Utility functions
│   └── tsconfig.json       # Electron TS config
└── ui/                     # Renderer process code
    ├── App.tsx             # Main React component
    ├── App.css             # Component styles
    ├── main.tsx            # React entry point
    ├── index.css           # Global styles
    └── assets/             # Static assets
        └── react.svg       # Example asset
```

### Build Outputs
```
dist-electron/              # Compiled main process
├── main.js                # Main process entry
└── util.js                # Utility functions

dist-react/                # Built React app
├── index.html             # HTML entry point
├── assets/                # Compiled assets
│   ├── index-*.js         # JavaScript bundle
│   └── index-*.css        # CSS bundle
```

## ⚙️ Configuration Files

### TypeScript Configuration

**Root `tsconfig.json`:**
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

**App `tsconfig.app.json`:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "noEmit": true
  },
  "include": ["src"],
  "exclude": ["src/electron"]
}
```

**Electron `tsconfig.json`:**
```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ESNext",
    "module": "NodeNext",
    "outDir": "../../dist-electron",
    "skipLibCheck": true
  }
}
```

### ESLint Configuration
```javascript
// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
```

## 🚀 Development Guidelines

### Code Style
- Use TypeScript strict mode
- Follow ESLint rules
- Use functional components with hooks
- Prefer ES6+ syntax

### File Naming
- React components: PascalCase (e.g., `App.tsx`)
- Utilities: camelCase (e.g., `util.ts`)
- Constants: UPPER_SNAKE_CASE
- CSS modules: camelCase (e.g., `App.module.css`)

### Import Organization
```typescript
// 1. React imports
import React, { useState, useEffect } from 'react'

// 2. Third-party libraries
import { someLibrary } from 'some-library'

// 3. Local imports
import { MyComponent } from './MyComponent'
import './styles.css'
```

## 🔍 Debugging

### Main Process Debugging
```typescript
// In main.ts
console.log('Main process started')
console.error('Error occurred:', error)
```

### Renderer Process Debugging
```typescript
// In React components
console.log('Component rendered')
console.warn('Warning message')
```

### DevTools
- **React DevTools**: Available in development
- **Electron DevTools**: Press F12 in the app
- **Main Process**: Check terminal output

## 📦 Distribution

### Build Targets
- **macOS**: ARM64 DMG installer
- **Windows**: x64 portable and MSI
- **Linux**: x64 AppImage

### Build Process
1. Transpile Electron TypeScript
2. Build React app
3. Package with Electron Builder
4. Generate platform-specific installers

### Build Configuration
```json
{
  "appId": "com.utkarsh.electron-tutorial",
  "files": ["dist-electron", "dist-react"],
  "icon": "./appIcon.png",
  "mac": { "target": "dmg" },
  "linux": { "target": "AppImage", "category": "Utility" },
  "win": { "target": ["portable", "msi"] }
}
```

## 🔄 Update Strategy

### Dependency Updates
1. **Monthly**: Check for security updates
2. **Quarterly**: Update major versions
3. **Annually**: Review architecture decisions

### Update Process
```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Update to latest versions (careful!)
npm install package@latest

# Test after updates
npm run build
npm run dev
```

## 🛡️ Security Considerations

### Best Practices
- ✅ Keep dependencies updated
- ✅ Use HTTPS in production
- ✅ Validate user inputs
- ✅ Sanitize data
- ✅ Use Content Security Policy (CSP)

### Electron Security
- ✅ Disable Node.js integration in renderer
- ✅ Use contextIsolation: true
- ✅ Enable sandbox mode
- ✅ Validate IPC messages

## 📈 Performance Optimization

### Build Optimization
- Tree shaking enabled
- Code splitting with Vite
- Minification in production
- Source maps for debugging

### Runtime Optimization
- Lazy loading for routes
- Memoization for expensive components
- Efficient state management
- Proper cleanup in useEffect

## 🧪 Testing Strategy

### Unit Testing
- Jest for JavaScript/TypeScript
- React Testing Library for components
- Electron testing with Spectron

### Integration Testing
- End-to-end testing with Playwright
- Cross-platform testing
- Performance benchmarking

## 📚 Additional Resources

### Official Documentation
- [Electron Documentation](https://electronjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Vite Guide](https://vitejs.dev/guide)

### Community Resources
- [Electron Forge](https://electronforge.io/)
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [TypeScript Playground](https://www.typescriptlang.org/play)

### Migration Guides
- [React 18 Migration](https://reactjs.org/blog/2022/03/29/react-v18.html)
- [Vite Migration](https://vitejs.dev/guide/migration)
- [TypeScript Migration](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html) 