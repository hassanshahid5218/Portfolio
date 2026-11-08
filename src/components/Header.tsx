import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { site } from '../content/site';
import { resumeDownloadName, resumeUrl } from './resume';

const nav = [
  { href: '#work', label: 'Selected work' },
  { href: '#about', label: 'About' },
  { href: '#background', label: 'Background' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Escape closes the menu and returns focus to the toggle button.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // If the window is widened past the mobile breakpoint, reset the menu.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 760px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#top" onClick={() => setOpen(false)}>
          {site.name}
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            {resumeUrl && (
              <li className="nav-resume">
                <a href={resumeUrl} download={resumeDownloadName}>
                  Resume
                </a>
              </li>
            )}
            <li>
              <a href={site.links.github} target="_blank" rel="noopener noreferrer">
                GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          <span>{open ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      <nav id="mobile-nav" className="nav-mobile" aria-label="Primary mobile" hidden={!open}>
        <ul className="container">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          {resumeUrl && (
            <li>
              <a href={resumeUrl} download={resumeDownloadName} onClick={() => setOpen(false)}>
                Resume
              </a>
            </li>
          )}
          <li>
            <a href={site.links.github} target="_blank" rel="noopener noreferrer">
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
