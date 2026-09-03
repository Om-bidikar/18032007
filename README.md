# A surprise for Chiku 💌

A small interactive "surprise" website: password gate → a playful yes/no
moment → a love note → a photo gallery → a gift box → a virtual hug.

## How to customize

**Password** — open `script.js`, change this line:
```js
const PASSWORD = "1832007";
```

**The love note** — open `index.html`, find `id="letter-text"` and edit the
`<p>` paragraphs inside it.

**Real photos** — drop three images into the `images/` folder named exactly:
```
images/photo1.jpg
images/photo2.jpg
images/photo3.jpg
```
The placeholder camera icons disappear automatically once real files with
those names exist — no code changes needed. Add a 4th, 5th photo by copying
one `.polaroid` block in `index.html` and adding a matching `<img>` tag.

**Colors** — all colors are defined at the top of `style.css` as a comment,
and used throughout as hex values (`#E8547C` berry pink, `#B9A6E0` lavender,
`#FFCB4C` sunshine, `#7FD8C0` mint, `#3A2145` plum, `#FFF6EC` cream).

## How to host it on GitHub Pages

1. Create a new GitHub repo (e.g. `chiku-surprise`).
2. Upload these three files (`index.html`, `style.css`, `script.js`) and the
   `images/` folder to the repo root.
3. Go to the repo's **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   pick the `main` branch and `/ (root)` folder, then **Save**.
5. GitHub gives you a live link after a minute or two, usually:
   `https://<your-username>.github.io/<repo-name>/`

That link is what you send her.

## Notes

- Everything is plain HTML/CSS/JS — no build step, no dependencies to install.
- The password check happens in the browser, so it's a fun gate, not real
  security — anyone determined could view the page source and find it.
- Works on mobile and desktop; respects reduced-motion settings.
