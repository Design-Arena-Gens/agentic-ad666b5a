const features = [
  {
    title: 'Zero-config deployment',
    description:
      'Prewired project structure and scripts optimized for one-command Vercel deploys.'
  },
  {
    title: 'Composable UI kits',
    description:
      'Ready-to-ship sections and patterns that adapt to your brand in minutes.'
  },
  {
    title: 'AI-first tooling',
    description:
      'Scriptable workflows and content helpers to keep your product velocity high.'
  },
  {
    title: 'Production ready',
    description:
      'Best-practice defaults including linting, analytics stubs, and accessibility helpers.'
  }
];

export default function FeatureGrid() {
  return (
    <section className="feature-grid" id="features">
      <h2>Launch with confidence</h2>
      <p className="section-intro">
        Everything you need for a polished launch is already wired in. Extend the
        foundations, or deploy as-is.
      </p>
      <div className="grid">
        {features.map((feature) => (
          <article key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
