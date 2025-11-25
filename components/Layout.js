import Link from 'next/link';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#cta', label: 'Get Started' }
];

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="site-header">
        <div className="logo">Agentic Apps</div>
        <nav>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <p>Crafted with purpose for modern web experiences. &copy; {new Date().getFullYear()} Agentic Apps.</p>
      </footer>
    </div>
  );
}
