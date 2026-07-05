# Marquee — React Movie Listing App

A responsive movie search application built with React.js, Vite, and the OMDb API. Search for any movie title and browse the results as ticket-stub styled cards showing the poster, title, release year, and type.

## Features

- Search movies by title using the OMDb API
- Responsive card grid with hover effects
- Loading indicator during API requests
- Error handling for failed requests
- "No movies found" state for empty results
- Poster fallback ("No Image Available") when a poster is missing
- Plain CSS only — no UI frameworks

## Tech Stack

- React.js (functional components + hooks)
- Vite
- OMDb API
- Plain CSS

## Prerequisites

- Node.js (v16 or later recommended)
- An OMDb API key — get one for free at https://www.omdbapi.com/apikey.aspx

## Getting Started

### 1. Install dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Add your OMDb API key

Open `src/App.jsx` and replace the placeholder with your key:

\`\`\`javascript
const API_KEY = "YOUR_API_KEY";
\`\`\`

### 3. Run the app locally

\`\`\`bash
npm run dev
\`\`\`

The app will be available at `http://localhost:5173`.

### 4. Build for production

\`\`\`bash
npm run build
\`\`\`

The production-ready files will be output to the `dist/` folder. You can preview the build locally with:

\`\`\`bash
npm run preview
\`\`\`

## Project Structure

\`\`\`
react-movie-app/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieList.jsx
│   │   ├── Loader.jsx
│   │   └── Message.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
\`\`\`

## Pushing to GitHub

\`\`\`bash
git init
git add .
git commit -m "Initial commit: React Movie Listing App"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/react-movie-app.git
git push -u origin main
\`\`\`

## Deploying to Netlify

### Option A: Netlify CLI

\`\`\`bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=dist
\`\`\`

### Option B: Netlify Dashboard (Git-based deploy)

1. Push your project to GitHub (see above).
2. Log in to https://app.netlify.com and click **Add new site → Import an existing project**.
3. Connect your GitHub repository.
4. Set the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**.

Your app will be live on a Netlify-provided URL, which you can customize in site settings.

## Notes

- The OMDb free tier has a daily request limit (1,000 requests/day at the time of writing) — verify current limits on the OMDb site.
- Never commit your real API key to a public repository. For production deployments, consider using an environment variable and a build-time substitution instead of hardcoding the key in `App.jsx`.

## License

MIT