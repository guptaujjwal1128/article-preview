# Tech Stack & Build System

## Core Technologies
- **TypeScript** - Primary language with strict type checking
- **Vite** - Build tool and dev server
- **Sass/SCSS** - CSS preprocessing with modular architecture
- **Vanilla JavaScript/TypeScript** - No frontend framework dependencies

## Build System
- **Bundler**: Vite with ES modules
- **TypeScript Config**: Strict mode, ES2022 target, DOM types
- **Output**: Static files to `docs/` directory for GitHub Pages deployment

## Common Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production (TypeScript + Vite)
npm run preview      # Preview production build
```

### Code Quality
```bash
npm run fmt          # Format code with Prettier
npm run lint         # ESLint for JS/TS files
npm run htmlhint     # HTML validation and semantic checks
npm run pa11y-ci     # Accessibility testing (WCAG 2.1 AA)
npm run lint:all     # Run all quality checks
```

### Reporting
```bash
npm run lint:all:logs    # Generate JSON reports in logs/ directory
```

## Quality Tools
- **ESLint**: Modern JS/TS linting with TypeScript plugin
- **Prettier**: Code formatting (format-on-save ready)
- **HTMLHint**: Semantic HTML and SEO validation
- **Pa11y CI**: Automated accessibility testing
- **TypeScript**: Strict type checking with modern ES features

## Dependencies
- All dependencies are dev dependencies (static site)
- Node.js 20+ recommended
- Uses npm for package management