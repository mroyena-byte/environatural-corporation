import { useState, type FormEvent } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Leaf, Menu, X } from 'lucide-react';

const EMAIL = 'info@enc.com.ph';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formError, setFormError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const company = String(data.get('company') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const area = String(data.get('area') ?? '');
    const details = String(data.get('details') ?? '').trim();
    const date = String(data.get('date') ?? '').trim();
    const time = String(data.get('time') ?? '').trim();
    if (!name || !company || !email || !area || !details) {
      setFormError('Please complete each required field so our team has enough context.');
      return;
    }
    setFormError('');
    const subject = `Meeting request — ${company}`;
    const body = [
      'Hello EnC team,',
      '',
      'I would like to request a conversation with Environatural Corporation.',
      '',
      `Name: ${name}`,
      `Company: ${company}`,
      `Work email: ${email}`,
      `Area of interest: ${area}`,
      `Preferred date (optional): ${date || 'Flexible'}`,
      `Preferred time in the Philippines (optional): ${time || 'Flexible'}`,
      '',
      'A little about what we are looking for:',
      details,
      '',
      'Please let me know if a time can be arranged.',
    ].join('\n');
    setSubmitted(true);
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="site-shell min-h-[100dvh]">
      <a className="skip-link focus-ring" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="wrap header-inner">
          <a href="#top" className="brand focus-ring" aria-label="Environatural Corporation home" onClick={closeMenu}>
            <img className="brand-logo" src="/environatural-logo.png" alt="" width={551} height={261} />
          </a>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            <a href="#what-we-do" className="nav-link" onClick={closeMenu}>What we do</a>
            <a href="#who-we-serve" className="nav-link" onClick={closeMenu}>Who we serve</a>
            <a href="#approach" className="nav-link" onClick={closeMenu}>Our approach</a>
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          </nav>
          <a className="header-cta focus-ring" href="#request">Request an appointment <ArrowUpRight size={15} /></a>
          <button className="menu-toggle focus-ring" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} data-testid="button-menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow reveal">A Filipino ingredient partner</p>
              <h1 className="display reveal reveal-delay-1" id="hero-title">Good ingredients.<br /><span className="serif">Thoughtfully</span> connected.</h1>
              <p className="hero-intro reveal reveal-delay-2">Environatural Corporation connects manufacturers and tollers with raw materials for personal care, home care and pharmaceutical products.</p>
              <div className="hero-actions reveal reveal-delay-3">
                <a className="button button-green focus-ring" href="#request">Request an appointment <ArrowRight size={17} /></a>
                <a className="quiet-link focus-ring" href="#what-we-do">Get to know EnC <ArrowDown size={15} /></a>
              </div>
              <div className="hero-footnote"><span className="footnote-dot" /> Filipino-owned. Rooted in thoughtful distribution.</div>
            </div>
            <div className="hero-art" aria-label="Botanical materials and glass vessels in soft daylight">
              <div className="art-frame"><img src="/ingredient-stilllife.png" width="800" height="1024" alt="Glass vessels and botanical materials arranged in soft natural light" fetchPriority="high" /></div>
              <div className="art-stamp" aria-hidden="true"><span>EnC</span><small>MATTER<br />WITH CARE</small></div>
              <div className="art-caption"><span>01 / INGREDIENTS</span><span>Nature, considered.</span></div>
              <div className="art-orbit orbit-one" aria-hidden="true" />
              <div className="art-orbit orbit-two" aria-hidden="true" />
            </div>
          </div>
          <div className="hero-index" aria-hidden="true">01—04&nbsp; / &nbsp;DISTRIBUTION</div>
        </section>

        <section className="intro-band" id="who-we-serve">
          <div className="wrap intro-grid">
            <div className="intro-label"><span className="eyebrow">Who we serve</span><span className="intro-index">01 — A useful connection</span></div>
            <div>
              <h2 className="display intro-heading">For the people who make<br className="desktop-break" /> everyday essentials.</h2>
              <p className="intro-copy">We work with manufacturers and tollers looking for a distribution partner for the materials behind personal care, home care and pharmaceutical products. Start with a question, an idea, or a brief—we’ll make room for a practical conversation.</p>
            </div>
          </div>
          <div className="thin-rule wrap" />
          <div className="wrap audience-row">
            <div className="audience-note"><span className="small-number">01</span><div><strong>Manufacturers</strong><span>Exploring or developing products</span></div></div>
            <div className="audience-note"><span className="small-number">02</span><div><strong>Tollers</strong><span>Working across product requirements</span></div></div>
            <div className="audience-note audience-aside">A direct line to a team that understands the ingredient conversation.</div>
          </div>
        </section>

        <section className="scope-section" id="what-we-do">
          <div className="wrap">
            <div className="section-heading">
              <div><p className="eyebrow">What we do</p><h2 className="display">A considered range<br />of material categories.</h2></div>
              <p>EnC trades and distributes raw materials for personal and home care, including natural and environment-friendly materials. Our work also serves pharmaceutical product needs.</p>
            </div>
            <div className="scope-list">
              <article className="scope-row">
                <span className="scope-num">01</span><div className="scope-icon"><span className="ring-shape ring-leaf"><Leaf size={25} strokeWidth={1.4} /></span></div>
                <div className="scope-title"><span className="eyebrow">Category</span><h3>Personal care</h3></div><p>Raw materials for the personal care products people reach for every day.</p><a href="#request" aria-label="Ask about personal care materials" className="scope-arrow focus-ring"><ArrowUpRight size={20} /></a>
              </article>
              <article className="scope-row">
                <span className="scope-num">02</span><div className="scope-icon"><span className="ring-shape ring-home"><span className="home-lines" /></span></div>
                <div className="scope-title"><span className="eyebrow">Category</span><h3>Home care</h3></div><p>Materials for products made to care for the spaces around us.</p><a href="#request" aria-label="Ask about home care materials" className="scope-arrow focus-ring"><ArrowUpRight size={20} /></a>
              </article>
              <article className="scope-row">
                <span className="scope-num">03</span><div className="scope-icon"><span className="ring-shape ring-pharma"><span className="cross-mark" /></span></div>
                <div className="scope-title"><span className="eyebrow">Category</span><h3>Pharmaceutical</h3></div><p>Connect with our team to discuss the materials relevant to your requirements.</p><a href="#request" aria-label="Ask about pharmaceutical materials" className="scope-arrow focus-ring"><ArrowUpRight size={20} /></a>
              </article>
            </div>
            <p className="scope-disclaimer">Specific availability and suitability depend on your requirements. Tell us what you are working on and our team can discuss it with you.</p>
          </div>
        </section>

        <section className="nature-section" aria-labelledby="nature-title">
          <div className="nature-texture" aria-hidden="true" />
          <div className="wrap nature-grid">
            <div className="nature-mark"><span className="nature-number">02</span><span className="nature-line" /><Leaf size={35} strokeWidth={1.2} /></div>
            <div className="nature-content">
              <p className="eyebrow eyebrow-light">Nature, without the noise</p>
              <h2 className="display" id="nature-title">A thoughtful place<br />for <span className="serif">better questions.</span></h2>
              <p>Natural and environment-friendly materials are part of EnC’s story. We believe the conversation should begin with your actual brief—not a promise that every material is right for every application.</p>
              <a href="#request" className="nature-link focus-ring">Bring us your question <ArrowRight size={16} /></a>
            </div>
            <div className="nature-side-note"><span>EN C / 02</span><span>Materials in context.<br />Conversations with care.</span></div>
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="wrap">
            <div className="approach-top">
              <div><p className="eyebrow">Our approach</p><h2 className="display">A good first step<br /><span className="serif">is a conversation.</span></h2></div>
              <p>No complicated pitch. Share what you’re making, where you are in the process, and what you need to understand. We’ll take it from there together.</p>
            </div>
            <div className="steps">
              <article className="step"><span className="step-num">01</span><div className="step-rule" /><h3>Tell us what you’re working on</h3><p>Share a little about your company, product area and material needs.</p></article>
              <article className="step"><span className="step-num">02</span><div className="step-rule" /><h3>We get the context</h3><p>Our team can understand the request and the questions behind it.</p></article>
              <article className="step"><span className="step-num">03</span><div className="step-rule" /><h3>Find a time to talk</h3><p>Request a meeting by email. A date is only confirmed once the team replies.</p></article>
            </div>
            <div className="approach-note"><span className="note-mark">“</span><span>Specific needs deserve a thoughtful conversation—not a one-size-fits-all answer.</span></div>
          </div>
        </section>

        <section className="request-section" id="request" aria-labelledby="request-title">
          <div className="wrap request-grid">
            <div className="request-copy">
              <p className="eyebrow eyebrow-light">Start here</p>
              <h2 className="display" id="request-title">Let’s make<br />time to <span className="serif">talk.</span></h2>
              <p>Tell us a little about your needs and a preferred date and time. Your email app will open with a request addressed to EnC.</p>
              <div className="request-email"><span className="email-icon"><ArrowUpRight size={17} /></span><div><small>Prefer to write directly?</small><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></div>
              <div className="request-note"><Check size={15} /> Your form details are prepared in your email app; nothing is submitted on this site.</div>
            </div>
            <form className="request-form" onSubmit={handleSubmit} noValidate>
              <div className="form-heading"><span>APPOINTMENT REQUEST</span><span>03 / 04</span></div>
              <div className="form-row">
                <label className="form-field"><span>Your name <i aria-hidden="true">*</i></span><input className="field" name="name" type="text" autoComplete="name" placeholder="Name" required data-testid="input-name" /></label>
                <label className="form-field"><span>Company <i aria-hidden="true">*</i></span><input className="field" name="company" type="text" autoComplete="organization" placeholder="Company name" required data-testid="input-company" /></label>
              </div>
              <label className="form-field"><span>Work email <i aria-hidden="true">*</i></span><input className="field" name="email" type="email" autoComplete="email" placeholder="you@company.com" required data-testid="input-email" /></label>
              <label className="form-field"><span>Area of interest <i aria-hidden="true">*</i></span><span className="select-wrap"><select className="field" name="area" defaultValue="" required data-testid="select-area"><option value="" disabled>Select a category</option><option>Personal care</option><option>Home care</option><option>Pharmaceutical</option><option>Natural or environment-friendly materials</option><option>Not sure yet</option></select><ChevronDown size={16} aria-hidden="true" /></span></label>
              <div className="form-row">
                <label className="form-field"><span>Preferred date <small>(optional)</small></span><input className="field" name="date" type="date" data-testid="input-date" /></label>
                <label className="form-field"><span>Preferred time <small>(Philippine time, optional)</small></span><input className="field" name="time" type="time" data-testid="input-time" /></label>
              </div>
              <label className="form-field"><span>What would you like to discuss? <i aria-hidden="true">*</i></span><textarea className="field" name="details" rows={3} placeholder="A short note about your product or material needs..." required data-testid="input-details" /></label>
              {formError && <p className="form-error" role="alert">{formError}</p>}
              {submitted && <p className="form-feedback" role="status">Your email app should open with the request ready to send. The meeting is not confirmed until EnC replies.</p>}
              <button className="button button-green submit-button focus-ring" type="submit" data-testid="button-submit">Prepare appointment request <ArrowRight size={17} /></button>
              <p className="form-legal">This opens your device’s email app with a pre-addressed, prefilled message to {EMAIL}. Sending the email requests a meeting; it does not confirm a booking.</p>
            </form>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="wrap contact-grid">
            <div className="contact-intro"><p className="eyebrow">Get in touch</p><h2 className="display">A real person<br />is a good place<br />to <span className="serif">begin.</span></h2><a className="contact-mail focus-ring" href={`mailto:${EMAIL}`}>{EMAIL} <ArrowUpRight size={17} /></a></div>
            <div className="contact-details">
              <div className="contact-block"><span className="contact-label">Telephone</span><a href="tel:+63288329561">(632) 8832 9561</a><a href="tel:+63286889701">(632) 8688 9701</a></div>
              <div className="contact-block"><span className="contact-label">Warehouse</span><address>Warehouse No. 11 Sanford Compound,<br />Edison Ave., Brgy Sun Valley,<br />Paranaque NCR 1700, Philippines</address></div>
              <a className="address-link focus-ring" href="https://maps.google.com/?q=Warehouse+No.+11+Sanford+Compound+Edison+Ave+Brgy+Sun+Valley+Paranaque+NCR+1700+Philippines" target="_blank" rel="noopener noreferrer">View location <ArrowUpRight size={15} /></a>
            </div>
            <div className="contact-aside"><span className="aside-index">EN C / 04</span><div className="aside-illustration" aria-hidden="true"><div className="ill-circle" /><div className="ill-leaf ill-leaf-a" /><div className="ill-leaf ill-leaf-b" /><div className="ill-leaf ill-leaf-c" /><div className="ill-stem" /></div><span className="aside-caption">Environatural Corporation<br />Philippines</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-main">
          <a href="#top" className="brand brand-footer focus-ring" aria-label="Environatural Corporation home"><img className="brand-logo" src="/environatural-logo.png" alt="" width={551} height={261} /></a>
          <p>Connecting materials<br />with makers in the Philippines.</p>
          <a href="#request" className="footer-cta focus-ring">Request an appointment <ArrowUpRight size={15} /></a>
        </div>
        <div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Environatural Corporation</span><span>Filipino-owned • Raw material trading & distribution</span><a href="#top" className="back-top focus-ring">Back to top ↑</a></div>
      </footer>
    </div>
  );
}

export default App;
