import ScrollAnimations from "./scroll-animations";

const services = [
  {
    title: "Communication Coaching",
    copy: "Refine the way you speak, listen, lead conversations, and hold presence in the moments that matter.",
  },
  {
    title: "Leadership Development",
    copy: "Build self-aware, emotionally intelligent leaders who can align people, navigate complexity, and create trust.",
  },
  {
    title: "Energy Healing",
    copy: "Support deeper release, regulation, and inner alignment through restorative sessions for personal growth.",
  },
  {
    title: "Personal Growth",
    copy: "Create a practical path toward clarity, confidence, and more integrated ways of living and working.",
  },
];

const testimonials = [
  "Caryn created a space where our leaders could be honest, courageous, and practical about how they communicate.",
  "The work felt grounded and deeply human. I left with tools I could use immediately and insight I will carry forward.",
  "Her facilitation helped our team reconnect with purpose, trust, and a more constructive way of working together.",
];

export default function Home() {
  return (
    <main>
      <ScrollAnimations />
      <section className="hero" id="top">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Caryn Greeff home">
            <span>Caryn</span> Greeff
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#corporate">Corporate</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Communication | Leadership | Inner Alignment</p>
            <h1>Speak with clarity. Lead with presence. Grow from within.</h1>
            <p className="hero-lede">
              Caryn Greeff partners with individuals and corporate teams to
              strengthen communication, deepen self-awareness, and unlock more
              aligned ways of leading, relating, and becoming.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Book a conversation
              </a>
              <a className="button secondary" href="#services">
                Explore services
              </a>
            </div>
          </div>

          <div className="hero-card" aria-label="Caryn Greeff brand focus">
            <img className="hero-image" src="/caryn-portrait.jpg" alt="Caryn Greeff wearing turquoise" width={1280} height={1073} fetchPriority="high" />
            <p className="card-kicker">Trusted facilitator, speaker, and guide</p>
            <h2>Where corporate confidence meets human connection.</h2>
            <div className="focus-list">
              <span>Executive presence</span>
              <span>Team trust</span>
              <span>Personal healing</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro" id="about">
        <div>
          <p className="eyebrow">About Caryn</p>
          <h2>A grounded guide for meaningful transformation.</h2>
          <img className="about-portrait" src="/caryn-smiling.png" alt="Caryn Greeff smiling in a relaxed setting" width={425} height={380} loading="lazy" />
        </div>
        <p>
          Caryn brings together the precision of communication coaching, the
          depth of leadership development, and the restorative intelligence of
          energy healing. Her work is designed for people who want more than
          surface-level performance: they want to communicate with integrity,
          lead with emotional range, and return to a steadier relationship with
          themselves.
        </p>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Support for the conversations, transitions, and growth that matter.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-line" />
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section" id="corporate">
        <div className="split-copy">
          <p className="eyebrow">Corporate Offerings</p>
          <h2>Development experiences for leaders and teams.</h2>
          <p>
            Caryn designs and facilitates high-trust spaces where teams can
            build practical communication capability while strengthening the
            human dynamics that determine culture, performance, and belonging.
          </p>
        </div>
        <div className="offering-panel">
          <h3>Common focus areas</h3>
          <ul>
            <li>Leadership communication and executive presence</li>
            <li>Team alignment, trust, and courageous conversations</li>
            <li>Facilitated workshops, retreats, and development programs</li>
            <li>Change resilience, emotional intelligence, and culture shifts</li>
          </ul>
        </div>
      </section>

      <section className="section pathways">
        <article>
          <p className="eyebrow">Individual Coaching & Healing</p>
          <h2>For private clients seeking clarity, confidence, and alignment.</h2>
          <p>
            One-to-one work can include communication coaching, personal growth
            mentoring, energy healing, and guided reflection for people moving
            through change, visibility, leadership, or deeper self-discovery.
          </p>
        </article>
        <article>
          <p className="eyebrow">Speaking & Facilitation</p>
          <h2>For rooms that need presence, insight, and connection.</h2>
          <p>
            Caryn brings warmth, structure, and depth to keynotes, panels,
            leadership offsites, wellness events, and facilitated conversations
            where the goal is to move people beyond information into integration.
          </p>
        </article>
      </section>

      <section className="section testimonials">
        <div className="section-heading">
          <p className="eyebrow">Client Reflections</p>
          <h2>Placeholder testimonials for future client stories.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((quote) => (
            <figure key={quote}>
              <blockquote>{quote}</blockquote>
              <figcaption>Client testimonial</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">Contact & Booking</p>
          <h2>Start with a focused conversation.</h2>
          <p>
            For individual sessions, corporate programs, speaking engagements,
            or tailored facilitation, book an introductory call with Caryn.
          </p>
        </div>
        <a className="button primary light" href="mailto:hello@caryngreeff.com">
          Enquire now
        </a>
      </section>
    </main>
  );
}
