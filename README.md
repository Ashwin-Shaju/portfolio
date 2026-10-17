<<<<<<< HEAD
# Ashwin Shaju — Portfolio

A responsive dark personal portfolio built with React, Vite, and lucide-react.

## Requirements
- Node.js LTS (npm is included)
- Git (only needed for publishing)
- A GitHub account (for GitHub Pages)

## Run locally on Windows
1. Install Node.js LTS from https://nodejs.org/
2. Extract this folder.
3. Open the folder in VS Code.
4. Open Terminal → New Terminal.
5. Run:

   ```powershell
   npm install
   npm run dev
   ```

6. Open the local URL Vite prints, usually `http://localhost:5173`.

To make a production build:

```powershell
npm run build
npm run preview
```

## Personalize before publishing
Open `src/main.jsx` and update:
- `profile.email`
- `profile.github`
- `profile.linkedin`
- Each project's `link` where you have a public repository/demo
- The IEEE publication card with the exact paper title, venue, year, and DOI
- Skills/projects so every statement accurately reflects your experience

Add your resume PDF at `public/resume.pdf`. Keep the file named exactly `resume.pdf` for the current download link.

## Publish with GitHub Pages
1. Create an empty GitHub repository, e.g. `ashwin-portfolio`.
2. In `vite.config.js`, set `base: '/ashwin-portfolio/'` (use your exact repository name).
3. In `package.json`, add this script if it isn't already there:

   `"predeploy": "npm run build"`

4. In PowerShell from the project folder, run:

   ```powershell
   git init
   git add .
   git commit -m "Create portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/ashwin-portfolio.git
   git push -u origin main
   npm run deploy
   ```

5. In the GitHub repository, open Settings → Pages and choose the `gh-pages` branch as the deployment source (root folder if asked).
6. Wait for the Pages deployment to complete. The URL will usually be:
   `https://YOUR_GITHUB_USERNAME.github.io/ashwin-portfolio/`

If you change the repository name, update `base` in `vite.config.js` to match. For a user/organization repository named `YOUR_GITHUB_USERNAME.github.io`, use `base: '/'`.

## Contact form
The form uses `mailto:` and opens the visitor's email app. It does not send messages through a server. A backend or form service is needed for silent, direct form submissions.
=======
# portfolio
>>>>>>> 8e004eb60d2abf4190453a60a99fc614e54e4e6f
