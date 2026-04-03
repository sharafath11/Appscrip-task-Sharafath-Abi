import Image from "next/image";
import { Navbar } from "@/components/Navbar";

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.2-4.2" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20.5s-7-4.3-7-10a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5c0 5.7-7 10-7 10Z" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 9h12l-1 10H7L6 9Z" />
      <path d="M9 9V7a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header_ticker" aria-hidden="true">
        <span>Lorem ipsum dolor</span>
        <span>Lorem ipsum dolor</span>
        <span>Lorem ipsum dolor</span>
      </div>

      <div className="site-header_top">
        <button
          className="icon-button icon-button--menu"
          type="button"
          aria-label="Open navigation menu"
        >
          <MenuIcon />
        </button>

        <a className="site-header_brand-mark" href="/plp" aria-label="metta muse home">
          <Image
            src="/brand-mark.svg"
            alt="metta muse brand mark"
            width={32}
            height={32}
            priority
          />
        </a>

        <a className="site-header_logo" href="/plp" aria-label="metta muse product listing">
          LOGO
        </a>

        <div className="site-header_actions" aria-label="Store actions">
          <button className="icon-button" type="button" aria-label="Search">
            <SearchIcon />
          </button>
          <button className="icon-button" type="button" aria-label="Wishlist">
            <HeartIcon />
          </button>
          <button className="icon-button" type="button" aria-label="Cart">
            <BagIcon />
          </button>
          <button className="icon-button" type="button" aria-label="Profile">
            <ProfileIcon />
          </button>
          <button className="language-button" type="button" aria-label="Select language">
            ENG
            <span aria-hidden="true">⌄</span>
          </button>
        </div>
      </div>

      <Navbar />
    </header>
  );
}
