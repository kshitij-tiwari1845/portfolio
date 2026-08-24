# Kshitij Tiwari — Personal Portfolio

A sleek, modern developer portfolio website built with semantic **HTML5**, **modern CSS3**, and **vanilla JavaScript (ES6+)**. Designed to be fast, responsive, and ready for instant deployment on **Vercel**.

---

## 🚀 Features

- **High-Contrast Light Theme**: Refined warm-stone/white base (`#FAFAF9` / `#FFFFFF`), crisp slate typography (`#0F172A`), layered soft shadows, and subtle indigo/sapphire brand accents.
- **Tailored Typography & Icons**: Paired `Plus Jakarta Sans` and `Outfit` fonts with crisp, lightweight SVG icons.
- **Modular Project Showcase**:
  - Filterable tabs: **All**, **Full Stack**, **Frontend**, and **Backend & Systems**.
  - Interactive "View Details" modal revealing in-depth system architecture, challenges solved, key highlights, and direct source links.
  - Easy-to-edit `js/projects-data.js` data file.
- **Dedicated `projects/` Directory**: Drop in your project folders, build outputs, or mockups.
- **Interactive Micro-Interactions**:
  - Smooth scroll with active navbar tracking (Scroll Spy).
  - Scroll-triggered reveal animations via `IntersectionObserver`.
  - One-click "Copy Email to Clipboard" with toast notifications.
  - Interactive contact form with live validation and state transitions.
  - Mobile responsive hamburger navigation drawer.
- **Vercel Ready**: Includes `vercel.json` with security headers and caching rules for static deployment.

---

## 📁 Directory Structure

```
portfolioindi/
├── index.html               # Main portfolio landing page
├── vercel.json              # Vercel static deployment & caching configuration
├── css/
│   ├── style.css            # Design tokens, typography, grid, and light theme styles
│   └── animations.css       # Keyframes, scroll reveals, and micro-interactions
├── js/
│   ├── projects-data.js     # Data store for your projects (add/edit your work here)
│   ├── modal.js             # Project details popup modal controller
│   └── main.js              # Navbar scroll spy, filtering, email copy, & form handlers
├── assets/
│   └── images/              # SVG vectors, developer avatar, and project mockups
│       ├── avatar.svg
│       ├── project-1.svg
│       ├── project-2.svg
│       ├── project-3.svg
│       └── project-4.svg
├── projects/                # Dedicated folder where you can attach your project files
│   └── README.md
└── README.md
```

---

## 🛠️ How to Customize

### 1. Update Your Personal Information
- Open `index.html`:
  - Change `"Alex Rivera"` to your name.
  - Update the hero headline, bio, and experience timeline.
  - Replace the GitHub (`https://github.com/yourusername`) and LinkedIn (`https://linkedin.com/in/yourusername`) links.
  - Update the email address in the hero, copy-box, and mailto links.

### 2. Add or Edit Projects
- Open `js/projects-data.js`.
- Modify or add project objects in the `portfolioProjects` array:
  ```javascript
  {
    id: "my-custom-project",
    title: "My Awesome Project",
    category: "fullstack", // 'all' | 'fullstack' | 'frontend' | 'backend'
    categoryLabel: "Full Stack App",
    shortDescription: "What this project does in 1-2 sentences.",
    image: "assets/images/my-screenshot.png",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://myproject.com",
    githubUrl: "https://github.com/myusername/myproject",
    highlights: [
      "Key highlight 1",
      "Key highlight 2"
    ],
    architecture: "Brief summary of architecture.",
    challenges: "Key engineering challenge solved."
  }
  ```
- Drop your screenshots or project images into `assets/images/`.

---

## 🚢 Deploying to Vercel

### Method 1: Deploy via GitHub (Recommended)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** → **"Project"**.
4. Select your GitHub repository and click **"Deploy"**.
5. Vercel will instantly detect it as a static site and give you a live production URL (e.g. `https://your-portfolio.vercel.app`).

### Method 2: Deploy via Vercel CLI / Drag and Drop
- Alternatively, run `npx vercel` in the project folder, or drag and drop the folder into the Vercel dashboard.

---

## 📄 License
MIT License. Feel free to use, modify, and build upon this portfolio for personal or commercial use.
