I need to develop a mobile first web site for a Music Label named "IV Room", this website is listing all the Albums on platforms like spotify, apple music, YT Music, Soundcloud, Merch, Distribution on different Dowload services like beatport and traxsource.

This website must use this technologies.
React JS with Material UI
Github Pages

Requirements:
Mobile usage
beauriful animations
Elegant design

Architecture proposal

Goals
- Mobile-first, fast loading, and accessible.
- Simple authoring for albums and links.
- Compatible with Github Pages static hosting.

Tech stack
- React (SPA) with Material UI (MUI) components + custom theme.
- Vite for build tooling (fast dev server, static output).
- Static data source in JSON (or Markdown) committed to the repo.
- Github Pages for hosting and CI deploy via Github Actions.

App structure
- src/
	- app/
		- App.tsx (layout + routing)
		- routes.tsx (route definitions)
		- theme.ts (MUI theme + typography + color tokens)
	- pages/
		- HomePage.tsx (label intro + featured releases)
		- AlbumPage.tsx (album list + filters)
		- AlbumDetailPage.tsx (single album links)
	- components/
		- AlbumCard.tsx
		- LinkGrid.tsx
		- Hero.tsx
		- AnimatedSection.tsx
	- data/
		- albums.json
	- hooks/
		- useMediaQuery.ts
	- styles/
		- animations.ts
	- utils/
		- formatters.ts

Routing
- Use client-side routing with React Router.
- For Github Pages, configure a 404.html redirect or HashRouter.

Data model (albums.json)
- albumId, title, artist, year, coverImage, tags
- links[] with label + url + platform
- merchUrl, distributionUrls[]

Animation approach
- CSS keyframes for global transitions.
- MUI transitions (Grow/Fade/Slide) for content reveal.
- Staggered entrance on album cards for elegant motion.

Performance and UX
- Lazy-load album cover images.
- Use responsive image sizes.
- Keep initial bundle small (split routes).

Deployment
- Build command outputs to dist/.
- Github Actions builds and deploys to Github Pages.

Quality and maintenance
- ESLint + Prettier.
- Basic accessibility checks (keyboard focus, contrast, aria labels).
- Content updates through a single JSON file.