
"use client"
import Link from "next/link";
import "./contact.css";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  let router=useRouter()
  function RouterHandler(){
    router.push('/products')
  }
  return (
    
    <main className="contact-luxury-page">
      <section className="contact-luxury-hero">
        <p className="contact-luxury-eyebrow">WE'RE HERE FOR YOU</p>
        <h1>Let's Start a Conversation</h1>
        <p>
          Have a question about our collection?
          We'd love to hear from you.
        </p>
      </section>

      <div className="contact-luxury-layout">
        <section className="contact-luxury-info">
          <p className="contact-luxury-eyebrow">GET IN TOUCH</p>
          <h2>We'd love to help.</h2>
          <p>
            Whether you need help with a product or have
            a question, send us a message.
          </p>

          <div className="contact-luxury-detail">
            <span>01</span>
            <div>
              <h3>Customer Care</h3>
              <p>Questions about our products and collection.</p>
            </div>
          </div>

          <div className="contact-luxury-detail">
            <span>02</span>
            <div>
              <h3>Product Enquiries</h3>
              <p>Need more information before choosing?</p>
            </div>
          </div>

          <Link
            href="/products"
            className="contact-luxury-button"
          >
            Explore Products
          </Link>
        </section>

        <section className="contact-luxury-form-card">
          <h2>Send Us a Message</h2>
          <p className="contact-luxury-form-intro">
            Fill in the details below.
          </p>

          <form className="contact-luxury-form">
            <div className="contact-luxury-field">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="contact-luxury-field">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="contact-luxury-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="How can we help?"
                required
              />
            </div>

            <div className="contact-luxury-field">
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                required
              />
            </div>

            <button
              type="submit"
              className="contact-luxury-submit"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>

      <section className="contact-luxury-bottom">
        <p>TAKE A MOMENT TO DISCOVER</p>
        <h2>Your next favourite piece is waiting.</h2>
        <button  className="contact-luxury-button" onClick={RouterHandler}>
 Browse Our Collection
        </button>
      
         
        
      </section>
    </main>
  );
}
