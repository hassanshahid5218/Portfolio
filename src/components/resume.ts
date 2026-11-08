// ─────────────────────────────────────────────────────────────
// Resume connection.
//
// Put your real resume PDF in:   src/assets/resume/
// (any .pdf file name works; "Muhammad-Hassan-Resume.pdf" is recommended).
//
// As soon as a PDF is there, the "Download resume" button in the hero and
// the "Resume" link in the navigation appear automatically. With no PDF
// in the folder, neither is rendered, so there is never a broken link.
// ─────────────────────────────────────────────────────────────

const files = import.meta.glob('../assets/resume/*.pdf', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

/** URL of the bundled resume, or undefined if no PDF has been added yet. */
export const resumeUrl: string | undefined = Object.values(files)[0];

/** The file name the browser saves the download as. */
export const resumeDownloadName = 'Muhammad-Hassan-Resume.pdf';
