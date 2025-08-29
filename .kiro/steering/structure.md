# Project Structure & Organization

## Root Structure
```
├── index.html              # Main HTML entry point
├── src/                    # Source code directory
├── docs/                   # Build output (GitHub Pages)
├── logs/                   # Quality check reports (JSON)
├── design/                 # Design reference images
└── public/                 # Static assets (favicon, robots.txt)
```

## Source Code Organization (`src/`)
```
src/
├── main.ts                 # TypeScript entry point
├── assets/
│   └── images/            # Component images and icons
└── styles/                # SCSS architecture
    ├── index.scss         # Main styles entry (forwards only)
    ├── _variables.scss    # Design tokens and variables
    ├── _mixins.scss       # Reusable SCSS mixins
    ├── _reset.scss        # CSS reset/normalize
    ├── _base.scss         # Base styles and typography
    └── components/        # Component-specific styles
        ├── index.scss     # Components entry point
        └── _[component].scss  # Individual component styles
```

## Naming Conventions

### CSS/SCSS
- **BEM methodology**: `.block__element--modifier`
- **Component prefix**: `.article-preview__*`
- **SCSS partials**: Prefix with underscore (`_variables.scss`)
- **Mixins**: Descriptive names (`text-preset-1`, `display-center`)

### Files & Directories
- **SCSS files**: Underscore prefix for partials
- **Components**: Kebab-case naming
- **Assets**: Descriptive, semantic names

## Import Strategy
- **SCSS**: Use `@forward` in index files, `@use` in components
- **TypeScript**: ES modules with explicit imports
- **Assets**: Relative paths from `src/`

## Configuration Files
- **Root level**: Build tools, linting, and project config
- **Hidden directories**: IDE settings (`.vscode/`, `.cursor/`)
- **Logs**: Automated quality reports in `logs/` directory

## Design System Integration
- **Variables**: Centralized in `_variables.scss` (colors, typography, spacing)
- **Mixins**: Reusable patterns in `_mixins.scss`
- **Breakpoints**: Mobile-first responsive design tokens