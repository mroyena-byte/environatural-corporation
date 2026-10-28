import { useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Leaf, Menu, X } from "lucide-react";
import "./environatural-archive.css";

const suppliers = [
  "SYMRISE",
  "IOI OLEO",
  "GLOBAL AMINES",
  "KaleCare",
  "univar solutions",
  "LUCAS MEYER",
  "Martha Tilaar",
  "CLARIANT",
];

const emailAddress = "info@enc.com.ph";

export default function EnvironaturalArchive() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState("");

  const closeMenu = () => setMenuOpen(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const category = String(data.get("category") ?? "");
    const date = String(data.get("date") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();
    if (!name || !company || !email || !category || !details) {
      setFormError("A few details are missing. Please complete the marked fields.");
      return;
    }
    setFormError("");
    setSent(true);
    const subject = `Meeting request — ${company}`;
    const body = [
      "Hello EnC team,",
      "",
      "I would like to request a conversation with Environatural Corporation.",
      "",
      `Name: ${name}`,
      `Company: ${company}`,
      `Work email: ${email}`,
      `Area of interest: ${category}`,
      `Preferred date: ${date || "Flexible"}`,
      "",
      "A little about what we are looking for:",
      details,
    ].join("\n");
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="enc-archive" id="top">
      <a className="ea-skip" href="#main">Skip to content</a>
      <header className="ea-header">
        <div className="ea-wrap ea-header-inner">
          <a className="ea-brand" href="#top" aria-label="Environatural Corporation home" onClick={closeMenu}>
            <span className="ea-brand-mark">EnC<span>®</span></span>
            <span className="ea-brand-name">ENVIRONATURAL<br /><b>CORPORATION</b></span>
          </a>
          <nav className={`ea-nav ${menuOpen ? "ea-nav-open" : ""}`} aria-label="Main navigation">
            <a href="#what-we-do" onClick={closeMenu}>What we do</a>
            <a href="#suppliers" onClick={closeMenu}>Suppliers</a>
            <a href="#who-we-serve" onClick={closeMenu}>Who we serve</a>
            <a href="#approach" onClick={closeMenu}>Our approach</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
          <a className="ea-header-cta" href="#request">Let’s talk <ArrowUpRight size={15} /></a>
          <button className="ea-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="ea-hero">
          <div className="ea-wrap ea-hero-grid">
            <div className="ea-hero-copy">
              <p className="ea-kicker"><span className="ea-kicker-dot" /> A Filipino ingredient partner <span className="ea-kicker-line" /></p>
              <h1>Good ingredients.<br /><em>Good things</em><br />in the making.</h1>
              <p className="ea-hero-intro">Raw materials for the things we reach for every day. EnC brings makers and ingredient partners into the same conversation.</p>
              <div className="ea-actions">
                <a className="ea-button" href="#request">Request an appointment <ArrowRight size={17} /></a>
                <a className="ea-text-link" href="#what-we-do">Get to know EnC <ArrowDown size={15} /></a>
              </div>
              <div className="ea-hero-note"><span>01</span> Filipino-owned. Rooted in thoughtful distribution.</div>
            </div>
            <div className="ea-hero-visual">
              <div className="ea-image-window"><img src="/__mockup/images/enc-archive-hero.png" alt="A thoughtfully arranged ingredient sample table inside a bright distribution warehouse" /></div>
              <div className="ea-image-label"><span>FIELD NOTES / 01</span><span>PARAÑAQUE, PHILIPPINES</span></div>
              <div className="ea-roundel" aria-hidden="true"><span>MATTER<br />WITH CARE</span><Leaf size={22} strokeWidth={1.5} /></div>
              <div className="ea-side-caption">A GOOD PLACE<br />TO BEGIN</div>
              <span className="ea-sun-disc" aria-hidden="true" />
            </div>
          </div>
          <div className="ea-hero-index">EN C&nbsp; / &nbsp;DISTRIBUTION&nbsp; / &nbsp;01—04</div>
        </section>

        <section className="ea-intro" id="who-we-serve">
          <div className="ea-wrap">
            <div className="ea-intro-grid">
              <div className="ea-section-id"><span className="ea-label">Who we serve</span><small>01 — A useful connection</small></div>
              <div>
                <h2>For the people who make<br className="ea-desktop" /> everyday essentials.</h2>
                <p>We work with manufacturers and tollers looking for a distribution partner for the materials behind personal care, home care and pharmaceutical products. Start with a question, an idea, or a brief—we’ll make room for a practical conversation.</p>
              </div>
            </div>
            <div className="ea-rule" />
            <div className="ea-audience-row">
              <div className="ea-audience"><span>01</span><div><b>Manufacturers</b><small>Exploring or developing products</small></div></div>
              <div className="ea-audience"><span>02</span><div><b>Tollers</b><small>Working across product requirements</small></div></div>
              <p>Close to the work. Curious about what comes next.</p>
            </div>
          </div>
        </section>

        <section className="ea-scope" id="what-we-do">
          <div className="ea-wrap">
            <div className="ea-section-heading">
              <div><p className="ea-label">What we do</p><h2>A considered range<br />of material categories.</h2></div>
              <p>EnC trades and distributes raw materials for personal and home care, including natural and environment-friendly materials. Our work also serves pharmaceutical product needs.</p>
            </div>
            <div className="ea-category-list">
              <a className="ea-category" href="#request">
                <span className="ea-category-num">01</span><span className="ea-category-symbol"><Leaf size={24} strokeWidth={1.35} /></span>
                <span className="ea-category-title"><small>CATEGORY</small><b>Personal care</b></span>
                <span className="ea-category-copy">Raw materials for the personal care products people reach for every day.</span><span className="ea-circle-arrow"><ArrowUpRight size={18} /></span>
              </a>
              <a className="ea-category" href="#request">
                <span className="ea-category-num">02</span><span className="ea-category-symbol ea-symbol-home">⌂</span>
                <span className="ea-category-title"><small>CATEGORY</small><b>Home care</b></span>
                <span className="ea-category-copy">Materials for products made to care for the spaces around us.</span><span className="ea-circle-arrow"><ArrowUpRight size={18} /></span>
              </a>
              <a className="ea-category" href="#request">
                <span className="ea-category-num">03</span><span className="ea-category-symbol ea-symbol-pharma">+</span>
                <span className="ea-category-title"><small>CATEGORY</small><b>Pharmaceutical</b></span>
                <span className="ea-category-copy">Connect with our team to discuss materials relevant to your requirements.</span><span className="ea-circle-arrow"><ArrowUpRight size={18} /></span>
              </a>
            </div>
            <p className="ea-disclaimer">Specific availability and suitability depend on your requirements. Tell us what you are working on and our team can discuss it with you.</p>
          </div>
        </section>

        <section className="ea-suppliers" id="suppliers">
          <div className="ea-wrap">
            <div className="ea-section-heading">
              <div><p className="ea-label">Our network</p><h2>Suppliers behind<br /><em>the ingredients.</em></h2></div>
              <p>EnC works with established suppliers across specialty ingredients. Availability and suitability depend on each application—talk to our team about your needs.</p>
            </div>
            <div className="ea-supplier-grid" aria-label="EnC supplier network">
              {suppliers.map((supplier, index) => <div className={`ea-supplier ea-supplier-${index + 1}`} key={supplier}><span>{supplier}</span><small>INGREDIENT PARTNER</small></div>)}
            </div>
            <div className="ea-network-foot"><span>OUR PARTNERSHIP IS BUILT ON SPECIFICITY</span><span>08 / PARTNERS</span></div>
          </div>
        </section>

        <section className="ea-nature">
          <div className="ea-nature-pattern" aria-hidden="true" />
          <div className="ea-wrap ea-nature-grid">
            <div className="ea-nature-marker"><span>02</span><i /><Leaf size={30} strokeWidth={1.2} /></div>
            <div className="ea-nature-copy">
              <p className="ea-label ea-light-label">Nature, without the noise</p>
              <h2>A thoughtful place<br />for <em>better questions.</em></h2>
              <p>Natural and environment-friendly materials are part of EnC’s story. We believe the conversation should begin with your actual brief—not a promise that every material is right for every application.</p>
              <a href="#request">Bring us your question <ArrowRight size={16} /></a>
            </div>
            <div className="ea-nature-aside"><span>EN C / 02</span><p>Materials in context.<br />Conversations with care.</p></div>
          </div>
        </section>

        <section className="ea-approach" id="approach">
          <div className="ea-wrap">
            <div className="ea-approach-head">
              <div><p className="ea-label">Our approach</p><h2>A good first step<br /><em>is a conversation.</em></h2></div>
              <p>No complicated pitch. Share what you’re making, where you are in the process, and what you need to understand. We’ll take it from there together.</p>
            </div>
            <div className="ea-steps">
              <article><span>01</span><i /><h3>Tell us what you’re working on</h3><p>Share a little about your company, product area and material needs.</p></article>
              <article><span>02</span><i /><h3>We get the context</h3><p>Our team can understand the request and the questions behind it.</p></article>
              <article><span>03</span><i /><h3>Find a time to talk</h3><p>Request a meeting by email. A date is only confirmed once the team replies.</p></article>
            </div>
            <div className="ea-approach-note"><span>“</span>Specific needs deserve a thoughtful conversation—not a one-size-fits-all answer.</div>
          </div>
        </section>

        <section className="ea-request" id="request">
          <div className="ea-wrap ea-request-grid">
            <div className="ea-request-copy">
              <p className="ea-label ea-light-label">Start here</p>
              <h2>Let’s make<br />time to <em>talk.</em></h2>
              <p>Tell us a little about your needs and a preferred date. Your email app will open with a request addressed to EnC.</p>
              <div className="ea-email"><span><ArrowUpRight size={17} /></span><div><small>Prefer to write directly?</small><a href={`mailto:${emailAddress}`}>{emailAddress}</a></div></div>
              <div className="ea-privacy"><Check size={15} /> Your form details are prepared in your email app; nothing is submitted on this site.</div>
            </div>
            <form className="ea-form" onSubmit={handleSubmit} noValidate>
              <div className="ea-form-top"><span>APPOINTMENT REQUEST</span><span>03 / 04</span></div>
              <div className="ea-fields-two">
                <label><span>Your name <i>*</i></span><input name="name" autoComplete="name" placeholder="Name" required /></label>
                <label><span>Company <i>*</i></span><input name="company" autoComplete="organization" placeholder="Company name" required /></label>
              </div>
              <label><span>Work email <i>*</i></span><input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label>
              <label><span>Area of interest <i>*</i></span><span className="ea-select"><select name="category" defaultValue="" required><option value="" disabled>Select a category</option><option>Personal care</option><option>Home care</option><option>Pharmaceutical</option><option>Natural or environment-friendly materials</option><option>Not sure yet</option></select><ChevronDown size={16} /></span></label>
              <label><span>Preferred date <small>(optional)</small></span><input name="date" type="date" /></label>
              <label><span>What would you like to discuss? <i>*</i></span><textarea name="details" rows={3} placeholder="A short note about your product or material needs..." required /></label>
              {formError && <p className="ea-form-error" role="alert">{formError}</p>}
              {sent && <p className="ea-form-success" role="status">Your email app should open with the request ready to send. The meeting is not confirmed until EnC replies.</p>}
              <button type="submit" className="ea-button ea-submit">Prepare appointment request <ArrowRight size={17} /></button>
              <p className="ea-legal">This opens your device’s email app with a pre-addressed, prefilled message to {emailAddress}. Sending the email requests a meeting; it does not confirm a booking.</p>
            </form>
          </div>
        </section>

        <section className="ea-contact" id="contact">
          <div className="ea-wrap ea-contact-grid">
            <div className="ea-contact-intro"><p className="ea-label">Get in touch</p><h2>A real person<br />is a good place<br />to <em>begin.</em></h2><a href={`mailto:${emailAddress}`}>{emailAddress} <ArrowUpRight size={17} /></a></div>
            <div className="ea-contact-details">
              <div><small>TELEPHONE</small><a href="tel:+63288329561">(632) 8832 9561</a><a href="tel:+63286889701">(632) 8688 9701</a></div>
              <div><small>WAREHOUSE</small><address>Warehouse No. 11 Sanford Compound,<br />Edison Ave., Brgy Sun Valley,<br />Paranaque NCR 1700, Philippines</address></div>
              <a className="ea-map-link" href="https://maps.google.com/?q=Warehouse+No.+11+Sanford+Compound+Edison+Ave+Brgy+Sun+Valley+Paranaque+NCR+1700+Philippines" target="_blank" rel="noopener noreferrer">View location <ArrowUpRight size={15} /></a>
            </div>
            <div className="ea-contact-art"><span>EN C / 04</span><div className="ea-leaf-drawing"><i /><b /><b /><b /></div><small>Environatural Corporation<br />Philippines</small></div>
          </div>
        </section>
      </main>

      <footer className="ea-footer">
        <div className="ea-wrap ea-footer-main">
          <a className="ea-brand" href="#top"><span className="ea-brand-mark">EnC<span>®</span></span><span className="ea-brand-name">ENVIRONATURAL<br /><b>CORPORATION</b></span></a>
          <p>Connecting materials<br />with makers in the Philippines.</p>
          <a href="#request">Request an appointment <ArrowUpRight size={15} /></a>
        </div>
        <div className="ea-wrap ea-footer-bottom"><span>© {new Date().getFullYear()} Environatural Corporation</span><span>Filipino-owned · Raw material trading & distribution</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </div>
  );
}
