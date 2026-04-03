const NAV_LINKS = ["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"];

export function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <ul className="navbar__list">
        {NAV_LINKS.map((item) => (
          <li key={item}>
            <a className="navbar__link" href="#main-content">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
