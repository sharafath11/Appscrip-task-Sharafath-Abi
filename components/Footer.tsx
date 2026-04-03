import { Newsletter } from "@/components/Newsletter";

const METTA_MUSE_LINKS = [
  "About Us",
  "Stories",
  "Artisans",
  "Boutiques",
  "Contact Us",
  "EU Compliances Docs",
];

const QUICK_LINKS = [
  "Orders & Shipping",
  "Join/Login as a Seller",
  "Payment & Pricing",
  "Return & Refunds",
  "FAQs",
  "Privacy Policy",
  "Terms & Conditions",
];

function FooterLinks({ items }: { items: string[] }) {
  return (
    <ul className="footer-links">
      {items.map((item) => (
        <li key={item}>
          <a href="#main-content">{item}</a>
        </li>
      ))}
    </ul>
  );
}

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="#main-content" aria-label="Instagram">
        IG
      </a>
      <a href="#main-content" aria-label="LinkedIn">
        IN
      </a>
    </div>
  );
}

function PaymentIcons() {
  return (
    <div className="payment-icons" aria-label="Accepted payment methods">
      <span>G Pay</span>
      <span>Mastercard</span>
      <span>PayPal</span>
      <span>Amex</span>
      <span>Apple Pay</span>
      <span>Shop Pay</span>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <section className="site-footer__newsletter" aria-labelledby="newsletter-heading">
          <h2 id="newsletter-heading">BE THE FIRST TO KNOW</h2>
          <p>Sign up for updates from metta muse.</p>
          <Newsletter />
        </section>

        <div className="site-footer__contact">
          <section aria-labelledby="contact-heading">
            <h2 id="contact-heading">CONTACT US</h2>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </section>

          <section aria-labelledby="currency-heading">
            <h2 id="currency-heading">CURRENCY</h2>
            <p className="site-footer__currency">🇺🇸 USD</p>
            <p className="site-footer__note">
              Transactions will be completed in Euros and a currency reference is
              available on hover.
            </p>
          </section>
        </div>
      </div>

      <div className="site-footer__divider" />

      <div className="site-footer__bottom">
        <details className="footer-section">
          <summary>metta muse</summary>
          <div className="footer-section__content">
            <FooterLinks items={METTA_MUSE_LINKS} />
          </div>
        </details>

        <details className="footer-section">
          <summary>QUICK LINKS</summary>
          <div className="footer-section__content">
            <FooterLinks items={QUICK_LINKS} />
          </div>
        </details>

        <details className="footer-section footer-section--social">
          <summary>FOLLOW US</summary>
          <div className="footer-section__content">
            <SocialIcons />
            <h3>metta muse ACCEPTS</h3>
            <PaymentIcons />
          </div>
        </details>
      </div>

      <p className="site-footer__copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}
