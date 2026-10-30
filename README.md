# Jonathan Lucky Yap — CV

Personal portfolio for Jonathan Lucky Yap, Product Engineering professional.

**Website:** https://luckyume.github.io/CV/

## Content

Edit `data/portfolio.yml` to update the profile, education, experience, certifications, organizations, skills, and contact links. The current role is Product Engineering; the combined Quality Assurance & Product Engineering role is listed in Work Experience. All 20 skill logos use the original assets in `assets/icons/` and `static/images/skills/`. Certificate previews in `static/images/certifications/` are captured from the original credential pages, and each entry links to its issuer's verification page.

## Run locally

Requires Hugo Extended 0.154.5 and Node.js 22 or newer.

```sh
npm ci
npx tailwindcss -c ./assets/css/tailwind.config.js -i ./assets/css/input.css -o ./assets/css/output.css --minify
hugo server --baseURL http://localhost:1313/ --renderToMemory
```

## Deployment

GitHub Pages deploys automatically from the `main` branch through `.github/workflows/hugo.yaml`. Pages uses GitHub Actions as its build source. The workflow builds Tailwind CSS, builds the Hugo site for the `/CV/` path, then publishes the result.
