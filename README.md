# A surprise for Chiku 💌

A small interactive "surprise" website: password gate → a playful yes/no
moment → a love note that slides out of an envelope → a photo gallery →
a gift box → a virtual hug.

## How to customize

**Password** — open `script.js`, change this line:
```js
const PASSWORD = "1832007";
```

**The love note** — open `index.html`, find `id="note-paper"` and edit the
`<p>` paragraphs inside it.

**Real photos** — drop images into the `images/` folder named exactly:
```
images/photo1.jpg      (gallery photo 1)
images/photo2.jpg      (gallery photo 2)
images/photo3.jpg      (gallery photo 3)
images/locket1.jpg     (heart locket on the envelope, left)
images/locket2.jpg     (heart locket on the envelope, right)
```
The placeholder camera icons disappear automatically once real files with
those names exist — no code changes needed.

**Confetti symbols** — open `script.js`, find this line and add whatever
characters or emoji you like:
```js
const emojis = ['*'];
```

**Colors** — all colors are defined at the top of `style.css` as a comment,
and used throughout as hex values (berry pink, lavender, sunshine, mint,
maroon ink, cream).

## How to host it on GitHub Pages

1. Create a new GitHub repo (e.g. `chiku-surprise`).
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, the whole
   `fonts/` folder, and the `images/` folder to the repo root. If you use
   GitHub's drag-and-drop web uploader, drag the files inside `fonts/`
   directly (not the folder itself), then type `fonts/` before each
   filename in the upload list — the web uploader sometimes drops nested
   folders silently otherwise.
3. Go to the repo's **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   pick the `main` branch and `/ (root)` folder, then **Save**.
5. GitHub gives you a live link after a minute or two, usually:
   `https://<your-username>.github.io/<repo-name>/`

That link is what you send her.

## Notes

- Everything is plain HTML/CSS/JS — no build step, no dependencies to install.
- Fonts (Baloo 2, Caveat, Sacramento, Quicksand) are bundled in `fonts/` and
  loaded locally, so the page works even without internet access once opened
  — and so it doesn't silently break if a font CDN is unreachable.
- The password check happens in the browser, so it's a fun gate, not real
  security — anyone determined could view the page source and find it.
- Designed to look good on a laptop screen; it also adapts down to mobile.
- Respects reduced-motion settings for accessibility.
