# Jonathan Lucky Yap — CV

Personal portfolio for Jonathan Lucky Yap, Product Engineering professional.

**Website:** https://luckyume.github.io/CV/

## Content

Edit `data/portfolio.yml` to update the profile, education, experience, certifications, organizations, skills, and contact links. The current role is Product Engineering. Work Experience lists Quality Assurance, Product Engineering to reflect the move from the earlier Quality Assurance division to the current Product Engineering division. The 20 skill icons are stored in `assets/icons/` and `static/images/skills/`. Certificate previews in `static/images/certifications/` are captured from the original credential pages, and each entry links to its issuer's verification page.

## Run locally

Requires Hugo Extended 0.154.5 and Node.js 22 or newer.

```sh
npm ci
npx tailwindcss -c ./assets/css/tailwind.config.js -i ./assets/css/input.css -o ./assets/css/output.css --minify
hugo server --baseURL http://localhost:1313/ --renderToMemory
```

## Deployment

GitHub Pages deploys automatically from the `main` branch through `.github/workflows/hugo.yaml`. Pages uses GitHub Actions as its build source. The workflow builds Tailwind CSS, builds the Hugo site for the `/CV/` path, then publishes the result.

## Icon credits

The Hardware Integration, Electrical Wiring & Soldering, Drone Systems, and REST API Development icons are adapted from [Lucide](https://lucide.dev/) and distributed under its [ISC license](static/licenses/lucide.txt). Their colors are customized for this portfolio.

The colored FastAPI and Espressif icons come from [Simple Icons](https://simpleicons.org/) under [CC0](static/licenses/simple-icons.txt).
