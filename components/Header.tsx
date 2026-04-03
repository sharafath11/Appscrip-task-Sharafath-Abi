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

function BrandMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" rx="6" />
      <path d="M8 8l16 16M24 8 8 24M16 4v24M4 16h24" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__ticker" aria-hidden="true">
        <span>Lorem ipsum dolor</span>
        <span>Lorem ipsum dolor</span>
        <span>Lorem ipsum dolor</span>
      </div>

      <div className="site-header__top">
        <button
          className="icon-button icon-button--menu"
          type="button"
          aria-label="Open navigation menu"
        >
          <MenuIcon />
        </button>

        <a className="site-header__brand-mark" href="/plp" aria-label="metta muse home">
          <BrandMark />
        </a>

        <a className="site-header__logo" href="/plp" aria-label="metta muse product listing">
          LOGO
        </a>

        <div className="site-header__actions" aria-label="Store actions">
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
