# FloraVision 🪴

FloraVision is a pixel-perfect, highly responsive e-commerce showcase application for premium indoor and outdoor plants. Built with React, Vite, and Tailwind CSS (v4), it is optimized for accessibility, keyboard navigation, and fast rendering.

## 🚀 Tech Stack

- **Framework**: React (v19)
- **Build Tool**: Vite (v8)
- **Styling**: Tailwind CSS (v4)
- **Icons**: React Icons (Fi, Fa)
- **Linter**: Oxlint

## 🛠️ Project Structure

```text
src
├── assets         # Static assets and images
├── components     # Reusable layout components (Navbar, Hero, Footer, etc.)
├── data           # Static data models for products and reviews
├── pages          # Page-level entry components (Home)
├── sections       # Modular sections of the landing page
├── App.jsx        # Root application setup
├── main.jsx       # Mounting coordinate file
└── index.css      # Core style definitions and themes
```

## ⚙️ Setup and Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/SAANVIVERMA05/frontend-test.git
   cd frontend-test
   ```

2. **Install Dependencies**
   Use npm to install the required dependencies:
   ```bash
   npm install
   ```

## 🏃 Running the Application

### Development Server
Start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) (or the port specified in the console) to view the application in your browser.

### Quality Checks
Run Oxlint to perform fast code linting:
```bash
npm run lint
```

### Production Build
Compile and bundle the application for production:
```bash
npm run build
```
The optimized files will be output to the `dist/` directory.

### Preview Build
Preview the production build locally:
```bash
npm run preview
```

## ♿ Accessibility & Performance

- **Semantic HTML**: Built using structural tags (`<header>`, `<main>`, `<section>`, `<footer>`, `<article>`).
- **Accessible Links**: Interactivity wrapped in keyboard-focusable anchors and buttons.
- **Scroll Lock**: Body scroll locking applied dynamically to the mobile navigation menu drawer.
- **Keyboard Indicators**: Keyboard focus rings visible for all interactive components.
- **Clean Code**: Comment-free, structured source code for production readiness.
