import Image from "next/image";
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

const PAYMENT_METHODS = [
  { name: "Google Pay", src: "/images/gpay.png" },
  { name: "Mastercard", src: "/images/rupiye.png" },
  { name: "PayPal", src: "/images/paypal.png" },
  { name: "American Express", src: "/images/amex.png" },
  { name: "Apple Pay", src: "/images/apple_pay.png" },
  { name: "Shop Pay", src: "/images/opay.png" },
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
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4.5" y="4.5" width="15" height="15" rx="4.5" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.2" cy="6.8" r="1" className="social-icons_fill" />
        </svg>
      </a>
      <a href="#main-content" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.2 9.2v7.6" />
          <path d="M7.2 6.8a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6Z" className="social-icons_fill" />
          <path d="M11 16.8v-4.3c0-1.4 1-2.3 2.2-2.3 1.3 0 2 .8 2 2.4v4.2" />
          <path d="M11 12.2c.4-1.2 1.5-2 2.9-2 1.9 0 3.1 1.3 3.1 3.7v2.9" />
        </svg>
      </a>
    </div>
  );
}

function PaymentIcons() {
  return (
    <div className="payment-icons" aria-label="Accepted payment methods">
      {PAYMENT_METHODS.map((method) => (
        <div key={method.name} className="payment-icons_card">
          <Image
            src={method.src}
            alt={method.name}
            width={112}
            height={70}
            sizes="(max-width: 768px) 72px, 88px"
          />
        </div>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer_container">
        <div className="site-footer_top">
        <section className="site-footer_newsletter" aria-labelledby="newsletter-heading">
          <h2 id="newsletter-heading">BE THE FIRST TO KNOW</h2>
          <p>Sign up for updates from mettā muse.</p>
          <Newsletter />
        </section>

        <div className="site-footer_contact">
          <section aria-labelledby="contact-heading">
            <h2 id="contact-heading">CONTACT US</h2>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </section>

          <section aria-labelledby="currency-heading">
            <h2 id="currency-heading">CURRENCY</h2>
            <p className="site-footer_currency">
              <span className="site-footer_flag" aria-hidden="true">
                <Image
                  src="/images/usa_flag.png"
                  alt=""
                  width={32}
                  height={32}
                  sizes="32px"
                />
              </span>
              <span className="site-footer_currency-dot" aria-hidden="true">
                •
              </span>
              USD
            </p>
            <p className="site-footer_note">
              Transactions will be completed in Euros and a currency reference is
              available on hover.
            </p>
          </section>
        </div>
        </div>

        <div className="site-footer_divider" />

        <div className="site-footer_bottom">
          <section className="footer-section">
            <h3 className="footer-section_title footer-section_title--brand">
              mettā muse
            </h3>
            <FooterLinks items={METTA_MUSE_LINKS} />
          </section>

          <section className="footer-section">
            <h3 className="footer-section_title">QUICK LINKS</h3>
            <FooterLinks items={QUICK_LINKS} />
          </section>

          <section className="footer-section footer-section--social">
            <h3 className="footer-section_title">FOLLOW US</h3>
            <SocialIcons />
          </section>

          <section className="footer-section footer-section--payments">
            <h3 className="footer-section_title">mettā muse ACCEPTS</h3>
            <PaymentIcons />
          </section>
        </div>

        <p className="site-footer_copyright">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
