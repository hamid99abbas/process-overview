# Process Overview Site

A single page: three teams (Design / Construction / Commercial) → click a
team → its document register opens on the same page → click a document
that has a sample or workflow attached → it opens in a viewer overlay
without leaving the list.

No framework, no backend — plain HTML/CSS/JS, so it deploys free on
Vercel with zero configuration and costs nothing to run.

## Files

- `index.html` / `style.css` / `script.js` — the site
- `data.js` — **everything you'll actually edit.** Team names, document
  lists, counts, and which documents have a sample or workflow attached
- `samples/` — put your real PDF/Word/Excel files here

## Adding your real documents

1. Drop the file into `samples/` (e.g. `samples/D-05-sample.pdf`)
2. In `data.js`, find that document's entry and point `sample` or
   `workflow` at it:
   ```js
   { no: 5, title: "D-05 Material Specification",
     sample: { file: "samples/D-05-sample.pdf", type: "pdf" },
     workflow: null },
   ```
   `type` is `"pdf"` for anything you want previewed inline in the
   overlay, or `"docx"`/`"xlsx"`/anything else for a download link
   instead (browsers can't preview Word/Excel inline).
3. To add or remove a document, add/remove an entry in that team's
   `documents` array. `documentCount` is the total the team blurb quotes
   (e.g. "80 documents") — it doesn't need to match how many rows you
   list, since you said you don't want all 80 shown, just the ones with
   samples/workflows plus a few others.
4. Save, then redeploy (see below) — Vercel picks up the change.

## Deploying to Vercel (free)

**Easiest — no git required:**
1. Install the CLI once: `npm install -g vercel`
2. From this folder, run `vercel` and follow the prompts (free account,
   no card needed for the Hobby plan)
3. Run `vercel --prod` to get the permanent production URL

**With GitHub (recommended if you'll keep editing it):**
1. Push this folder to a GitHub repo
2. Go to vercel.com → **Add New Project** → import that repo → Deploy
3. From then on, every `git push` auto-redeploys — so updating
   `data.js` and pushing is your whole "backend"

## About "updating the backend"

There's no database here on purpose — it's what keeps this free and
maintenance-free. Editing `data.js` and redeploying (a few seconds on
Vercel) IS the update mechanism, and it's something either of you can
do without touching code — it's just a list. If you later want
non-technical staff to edit documents through a form instead of a text
file, that's a real next step (e.g. a small Supabase or Vercel KV
backend) but it's a separate, paid-tier-adjacent piece — worth doing
only once the content changes often enough to justify it.
