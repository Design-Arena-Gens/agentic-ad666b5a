import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-copy">
        <h1>Build agentic web experiences in minutes</h1>
        <p>
          Launch-ready templates, reusable components, and automation workflows
          tuned for Vercel deployments. Focus on what matters: delivering value
          fast.
        </p>
        <div className="hero-actions">
          <Link href="#cta" className="primary-btn">
            Start building
          </Link>
          <Link href="#showcase" className="secondary-btn">
            Explore templates
          </Link>
        </div>
      </div>
      <div className="hero-visual" aria-hidden>
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="code-card">
          <span className="code-title">deploy.sh</span>
          <pre>
            <code>{`#!/bin/bash
npm install
npm run build
vercel deploy --prod`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
