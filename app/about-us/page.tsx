
import Link from "next/link";
import "./about.css";

export default function AboutPage() {
  return (
    <main className="about-luxury-page">
      <section className="about-luxury-hero">
        <p className="about-luxury-eyebrow">OUR STORY</p>
        <h1>Elegance in Every Detail</h1>
        <p className="about-luxury-intro">
          Discover a world where timeless style meets
          thoughtful choices. We believe luxury lives
          in the little details.
        </p>

        <Link href="/products" className="about-luxury-button">
          Shop Our Collection
        </Link>
      </section>

      <section className="about-luxury-story">
        <div className="about-luxury-number">01 — OUR PHILOSOPHY</div>
        <h2>Less, but better.</h2>
        <p>
          We believe shopping should feel personal,
          inspiring, and effortless. Our collection
          brings together carefully selected pieces
          for everyday living.
        </p>
      </section>

      <section className="about-luxury-values">
        <article className="about-luxury-card">
          <span>✦</span>
          <h3>Timeless Style</h3>
          <p>Thoughtful pieces that complement your lifestyle.</p>
        </article>

        <article className="about-luxury-card">
          <span>◇</span>
          <h3>Curated Choices</h3>
          <p>A collection designed to make discovering products enjoyable.</p>
        </article>

        <article className="about-luxury-card">
          <span>♡</span>
          <h3>Made for You</h3>
          <p>A shopping experience centred around your preferences.</p>
        </article>
      </section>

      <section className="about-luxury-cta">
        <p className="about-luxury-eyebrow">YOUR NEXT FAVOURITE AWAITS</p>
        <h2>Find something you love.</h2>
        <Link href="/products" className="about-luxury-button">
          Explore Products
        </Link>
      </section>
    </main>
  );
}

