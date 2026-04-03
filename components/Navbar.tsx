const NAV_LINKS = ["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"];

export function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <ul className="navbar_list">
        {NAV_LINKS.map((item) => (
          <li key={item}>
            <a className="navbar_link" href="#main-content">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
