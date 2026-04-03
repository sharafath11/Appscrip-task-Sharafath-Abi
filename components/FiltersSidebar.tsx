"use client";

const FILTER_SECTIONS = [
  {
    label: "IDEAL FOR",
    options: ["Men", "Women", "Baby & Kids"],
    open: true,
  },
  { label: "OCCASION" },
  { label: "WORK" },
  { label: "FABRIC" },
  { label: "SEGMENT" },
  { label: "SUITABLE FOR" },
  { label: "RAW MATERIALS" },
  { label: "PATTERN" },
];

type FiltersSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function FiltersSidebar({ isOpen, onClose }: FiltersSidebarProps) {
  return (
    <>
      <div
        className={`filters-backdrop${isOpen ? " is-visible" : ""}`}
        aria-hidden={!isOpen}
        onClick={onClose}
      />
      <aside className={`filters${isOpen ? " is-open" : ""}`} aria-label="Product filters">
        <div className="filters_header">
          <p className="filters_drawer-title">Filters</p>
          <button
            className="filters_close"
            type="button"
            onClick={onClose}
            aria-label="Close filters"
          >
            ×
          </button>
        </div>

        <label className="filters_toggle">
          <input type="checkbox" name="customizable" />
          <span>CUSTOMIZABLE</span>
        </label>

        {FILTER_SECTIONS.map((section) => (
          <details
            className="filters_section"
            key={section.label}
            open={section.open}
          >
            <summary>{section.label}</summary>
            {section.options ? (
              <div className="filters_content">
                <p className="filters_all">All</p>
                <button className="filters_unselect" type="button">
                  Unselect all
                </button>
                <div className="filters_options">
                  {section.options.map((option) => (
                    <label key={option} className="filters_option">
                      <input type="checkbox" />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ) : (
              <div className="filters_content">
                <p className="filters_all">All</p>
              </div>
            )}
          </details>
        ))}
      </aside>
    </>
  );
}
