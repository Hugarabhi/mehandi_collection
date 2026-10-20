# Mehandi Collection

Static multi-page website hosted by GitHub Pages from the repository's `main`
branch root at <https://hugarabhi.github.io/mehandi_collection/>.

## Business configuration

Update `business-config.js` only with details confirmed by the business owner.
`whatsappNumber` must be the full international number in digits only (country
calling code included); social URL, email, city, and hours are optional. Booking
links stay disabled until a valid WhatsApp number is configured. The previous
10-digit number did not include a verifiable country code, so it is intentionally
not carried forward.

## Deployment

GitHub Pages currently publishes the repository root from `main`; there is no
GitHub Actions workflow or installed Vite dependency in this repository. To
publish changes, commit and push to `main`:

```sh
git add .
git commit -m "Describe the website update"
git push origin main
```

GitHub Pages builds and deploys the pushed branch automatically. `vite.config.js`
retains a multi-page production build configuration for installations that add
Vite as a project dependency; its output is `dist/`.
