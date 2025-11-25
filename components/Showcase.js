const projects = [
  {
    title: 'LaunchPad SaaS',
    description: 'Conversion-focused landing page built with our hero + pricing stack.',
    tag: 'Marketing'
  },
  {
    title: 'Insight Dashboard',
    description: 'Interactive analytics starter harnessing server components.',
    tag: 'Product'
  },
  {
    title: 'Docs Mosaic',
    description: 'Structured docs template with search-ready semantics and MDX support.',
    tag: 'Documentation'
  }
];

export default function Showcase() {
  return (
    <section className="showcase" id="showcase">
      <h2>Starter experiences ready to remix</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title}>
            <span className="badge">{project.tag}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button type="button">Clone template</button>
          </article>
        ))}
      </div>
    </section>
  );
}
