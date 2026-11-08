import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/manrope';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import './styles.css';
import App from './App';
import { projects } from './content/projects';

// Reminder for the site owner: surface any outstanding TODOs in the console.
projects.forEach((p) => {
  if (p.todo) console.info(`[portfolio TODO] ${p.todo}`);
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
