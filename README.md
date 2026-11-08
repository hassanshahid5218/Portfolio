# Muhammad Hassan — Portfolio

React + Vite + TypeScript, plain CSS. No backend, no environment variables and no
API keys are needed.

## Requirements

- Node.js **22.12 or newer** (or 20.19+). Check with `node -v`. Download from https://nodejs.org
- npm (installed with Node.js)

## Run it (Windows, VS Code + PowerShell)

1. Extract the ZIP, then open the `muhammad-hassan-portfolio` folder in VS Code
   (File → Open Folder).
2. Open the terminal in VS Code (Ctrl + `). It should be PowerShell.
3. Run:

```powershell
npm install
npm run dev
```

4. Open the address it prints, normally http://localhost:5173. Press Ctrl + C to stop.

If PowerShell refuses to run `npm` with an "execution policy" error, run this once and retry:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

## Other commands

```powershell
npm run build      # type-check, then build the production site into dist/
npm run preview    # serve the production build at http://localhost:4173
npm run typecheck  # TypeScript check only
```

## Where to edit things

| What | File |
| --- | --- |
| Name, email, social links, hero text, About text | `src/content/site.ts` |
| Experience, LeetCode count, education | `src/content/site.ts` |
| Projects (text, stack, repo and demo links) | `src/content/projects.ts` |
| Skills | `src/content/skills.ts` |
| Colours, spacing, type scale | `src/styles.css` (tokens at the top) |

## Adding your resume

Put your real resume PDF in `src/assets/resume/` (for example `Muhammad-Hassan-Resume.pdf`).
A "Download resume" button in the hero and a "Resume" link in the navigation appear automatically
and download the file as `Muhammad-Hassan-Resume.pdf`. With no PDF in that folder, neither is
shown, so there is never a broken link.

## Outstanding items

- **Real Estate Marketplace**: set `repo` (and `demo`, if any) in `projects.ts`. Its description
  is written from your own summary and has not been checked against the code.
- **LeetCode**: `practice.solved` in `site.ts` is a manually maintained number.
- **Dates**: `period` on the experience entries is `null` (hidden). Add one when you have it.
- **Resume**: no resume file was supplied yet, so the button and nav link are hidden until you add the PDF (see above).
- **Skills**: Supabase, Appwrite, Docker, Postman, Bootstrap and C++ are from your CV but were not
  found in the three inspected repositories. Remove any you can't stand behind.

## Deploying

`npm run build` produces a static site in `dist/`. It can be deployed as-is to Vercel, Netlify
or GitHub Pages (framework preset: Vite, build command `npm run build`, output `dist`).
