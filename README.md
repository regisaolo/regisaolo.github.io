# Régis Aolo — academic website

A responsive, accessible academic website for **https://regisaolo.github.io/**.

There is no build step, package manager, framework, tracking, or external font dependency. The site works on GitHub Pages and can also be opened directly from `index.html`.

## Preview it

Unzip the download and open **index.html** in a browser. All content, the menu, abstract, and local downloads work without installing anything. The optional “Copy email” button appears only when the browser provides a secure clipboard connection; it is normally hidden when opening a local file directly.

## Upload to your existing GitHub Pages website

1. Unzip this package on your computer.
2. Open your **regisaolo/regisaolo.github.io** repository on GitHub. For a backup, use **Code → Download ZIP** before replacing any files.
3. Choose **Add file → Upload files**. Upload the **contents** of this package into the root of the repository. `index.html` must be at the top level, not inside another `regis-aolo-website` folder. Keep the `assets` and `docs` folders together with it. Include the empty `.nojekyll` file if your file picker shows it; this website also uses ordinary filenames that Jekyll can serve.
4. Commit the upload. The files with matching names, including your old `index.html`, will be replaced. Leave any unrelated existing documents and domain settings in place unless you intend to remove them.
5. In **Settings → Pages**, use **Deploy from a branch**, choose the branch containing the uploaded files (usually `main`), and choose **/ (root)**. Save if a change is needed. If these are already your settings, the commit will update the site automatically.
6. Once GitHub finishes publishing, visit **https://regisaolo.github.io/**. If the old design is cached, reload the page while bypassing the browser cache.

These instructions target a branch-based Pages deployment. If your repository currently uses a custom GitHub Actions workflow, either keep that workflow configured to publish these static files or select the branch-based deployment above.

## What to edit

| File | Purpose |
| --- | --- |
| `index.html` | All text, links, research, manuscripts, talks, teaching, and contact details |
| `styles.css` | Layout, colours, typography, responsive sizes, and print styles |
| `script.js` | Mobile menu, active section, optional email copying, and copyright year |
| `assets/orbit.svg` | A mathematical illustration: 144 points of a Kronecker orbit on the unit square |
| `assets/favicon.svg` | Browser tab icon |
| `docs/regis-aolo-cv.pdf` | A short academic CV, based on the available information |
| `docs/regis-aolo-cv.tex` | Editable LaTeX source for that CV |
| `docs/regis-aolo.bib` | BibTeX entry for the current manuscript |
| `404.html` | A small page for links that no longer exist |
| `robots.txt`, `sitemap.xml` | Search engine discovery |
| `.nojekyll` | Tells GitHub Pages to serve the files directly |

The short CV includes the current doctoral affiliation, research interests, manuscript, teaching, and two selected talks. Add earlier degrees, dates, awards, and other appointments before treating it as your complete career CV. You can also replace it with an existing CV, keeping the same filename.

### Add a paper

Find `<!-- PAPERS:` in `index.html`. Copy the `<article class="paper">…</article>` block to add another paper. Leave a small gap between multiple articles by adding `.paper + .paper { margin-top: 24px; }` to `styles.css`.

For the current manuscript, the page deliberately provides a **Request a copy** email link. Its PDF is not bundled or published. When you are ready to share it, put the PDF in `docs/`, replace the email link with that relative path, and change the link text to `PDF`. Add an arXiv or journal link only when it exists. Update the manuscript status and the BibTeX entry as appropriate; no submission or publication status has been assumed.

### Update teaching, talks, or contact details

Edit the corresponding clearly labelled sections in `index.html`. The office address and supervisor come from the public LAMA profile. The selected talks follow the LAMA doctoral seminar programme. The teaching section reflects the 2026–2027 courses supplied in our work together.

Update the “Updated October 2026” text in the footer, and the date in `sitemap.xml`, when you revise the site. Change the canonical URL, structured data URL, sitemap, and `robots.txt` if you move to another domain.

### Regenerate the short CV

The editable LaTeX source is included. Compile it using a standard LaTeX installation or upload it to Overleaf. Download the resulting PDF as `regis-aolo-cv.pdf` and put it back in `docs/`.

## Accessibility and privacy

- Semantic headings, a skip link, keyboard focus indicators, and a keyboard-operable mobile menu.
- A native expandable abstract; the content and links remain usable without JavaScript.
- Responsive layouts for phones, tablets, and computers, plus a print stylesheet.
- Reduced-motion preferences are respected.
- Self-hosted assets with no analytics, cookies, contact form, or third-party JavaScript.

## Content sources

- Existing personal site: https://regisaolo.github.io/
- LAMA profile: https://lama-umr8050.fr/membres/aolo.sewanou_regis
- LAMA doctoral seminar: https://lama-umr8050.fr/evenements/seminaire_des_doctorants
- Manuscript metadata and summary: the version of `unimod.pdf` supplied on 23 October 2026.

The figure is drawn specifically for this site. It shows `n(α, β) mod 1`, with `α = √2 − 1` and `β = √3 − 1`, for `n = 1, …, 144`. It illustrates orbit distribution and does not depict numerical results from the manuscript.
