import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="cta" id="cta">
      <div className="cta-inner">
        <h2>Ship your next project faster</h2>
        <p>
          Drop your email and we&apos;ll send over the starter kit, deployment
          checklist, and a demo project tailored to agentic workflows.
        </p>
        {submitted ? (
          <p className="success">Check your inbox—resources are on the way!</p>
        ) : (
          <form onSubmit={onSubmit}>
            <label htmlFor="email" className="sr-only">
              Work email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <button type="submit">Send me the kit</button>
          </form>
        )}
      </div>
    </section>
  );
}
