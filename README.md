# Sarah Gibson's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features embedded interactive applications, dynamic content, and professional presentation.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sarahgibsonnnn/My-portfolio.git
   cd My-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   
   **Option 1: Using npm (recommended)**
   ```bash
   npm run dev
   ```
   
   **Option 2: Using the batch file (Windows - if PowerShell blocks npm)**
   ```bash
   run-dev.bat
   ```
   
   **Option 3: If PowerShell execution policy blocks npm, try:**
   ```powershell
   # Allow scripts for current user
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   # Then run npm normally
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## ✨ Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Interactive Applications** - Embedded holiday planner and dictionary apps
- **Dynamic Content** - Real-time experience calculations and career timeline
- **Modern Tech Stack** - React 19, TypeScript, Vite, SCSS
- **Component Architecture** - Reusable components with consistent styling
- **Professional Presentation** - LinkedIn-aligned about page with achievements

## 🚀 Deployment

This project is configured for easy deployment to multiple platforms:

### GitHub Pages (Automated)
- **Automatic deployment** when you push to the `main` branch
- Uses GitHub Actions with Ubuntu 24.04 and Node.js 20
- Builds and deploys to GitHub Pages automatically

### Manual Deployment Options
1. **Build the project:**
   ```bash
   npm run build
   # or use: build.bat (Windows)
   ```

2. **Deploy the `dist` folder to your hosting platform:**
   - **Netlify**: Drag `dist` folder or connect GitHub repo
   - **Vercel**: Connect GitHub repo or use Vercel CLI
   - **Traditional hosting**: Upload `dist` folder contents via FTP

### Hosting Configuration Files Included
- `netlify.toml` - Netlify configuration with proper MIME types
- `vercel.json` - Vercel configuration for SPA routing
- `public/.htaccess` - Apache server configuration
- `.github/workflows/deploy.yml` - GitHub Pages deployment

## 🔧 Troubleshooting

### Common Deployment Issues

**MIME Type Errors:**
```
Failed to load module script: Expected a JavaScript module script but the server responded with MIME type "application/octet-stream"
```
- **Solution**: Use the included configuration files (`netlify.toml`, `vercel.json`, `.htaccess`)

**Syntax Errors:**
```
Uncaught SyntaxError: missing ) after argument list
```
- **Solution**: Check for trailing commas in JSX render calls
- **Fixed**: Removed extra comma in `main.tsx`

**PowerShell Execution Policy:**
```
npm : File cannot be loaded because running scripts is disabled
```
- **Solution**: Use `run-dev.bat` or run `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

### Testing Your Build
```bash
# Clean build (recommended for deployment)
clean-build.bat

# Or build normally
npm run build
# or: build.bat

# Preview production build locally
npm run preview
# or: preview.bat

# Serves at: http://localhost:4173/
```

### Force Deploy New Version
If you're still seeing old cached errors after fixing issues:

1. **Clean build locally:**
   ```bash
   clean-build.bat
   ```

2. **Upload the NEW dist folder** (completely replace the old one)

3. **Clear browser cache** or test in incognito mode

4. **For hosting platforms:**
   - **Netlify**: Drag new dist folder or trigger new deploy
   - **Vercel**: Redeploy from dashboard or push to GitHub
   - **GitHub Pages**: Commit and push changes to trigger new build

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
