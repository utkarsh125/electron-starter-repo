# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Prerequisites
```bash
# Check Node.js version (requires 18+)
node --version

# Check npm version (requires 9+)
npm --version
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development
```bash
npm run dev
```

This will:
- Start Vite dev server on `http://localhost:5123`
- Launch Electron app
- Enable Hot Module Replacement (HMR)

### 4. Make Changes
Edit `src/ui/App.tsx` and see changes instantly!

### 5. Build for Production
```bash
npm run build
```

### 6. Package for Distribution
```bash
# For your platform
npm run dist:mac    # macOS
npm run dist:win    # Windows  
npm run dist:linux  # Linux
```

## 📁 Key Files to Know

| File | Purpose |
|------|---------|
| `src/electron/main.ts` | Electron main process |
| `src/ui/App.tsx` | Main React component |
| `package.json` | Dependencies and scripts |
| `vite.config.ts` | Build configuration |
| `electron-builder.json` | Packaging configuration |

## 🔧 Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run dev:react        # React only
npm run dev:electron     # Electron only

# Building
npm run build            # Build for production
npm run transpile:electron # Compile Electron TS

# Quality
npm run lint             # Run ESLint

# Distribution
npm run dist:mac         # Build for macOS
npm run dist:win         # Build for Windows
npm run dist:linux       # Build for Linux
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change port in vite.config.ts
server: {
  port: 5124,  # Change from 5123
  strictPort: true,
}
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules dist-electron dist-react
npm install
npm run build
```

### Electron Not Starting
```bash
# Check if React dev server is running
curl http://localhost:5123

# Check main process logs
npm run dev:electron
```

## 📚 Next Steps

1. **Read the full documentation**: `DOCUMENTATION.md`
2. **Explore the codebase**: Start with `src/ui/App.tsx`
3. **Add your features**: Modify the React components
4. **Customize the build**: Edit `electron-builder.json`
5. **Deploy your app**: Use the distribution commands

## 🆘 Need Help?

- Check the [full documentation](DOCUMENTATION.md)
- Review the [README.md](README.md)
- Look at the [project structure](#project-structure)
- Run `npm run lint` to check for issues 