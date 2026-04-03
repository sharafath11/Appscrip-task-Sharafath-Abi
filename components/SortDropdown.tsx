"use client";

export type SortOption =
  | "recommended"
  | "newest"
  | "popular"
  | "price-high"
  | "price-low";

const SORT_OPTIONS: Array<{ value: SortOption; label: string }> = [
  { value: "recommended", label: "Recommended" },
  { value: "newest", label: "Newest first" },
  { value: "popular", label: "Popular" },
  { value: "price-high", label: "Price : high to low" },
  { value: "price-low", label: "Price : low to high" },
];

type SortDropdownProps = {
  value: SortOption;
  isOpen: boolean;
  onToggle: () => void;
  onChange: (value: SortOption) => void;
};

export function SortDropdown({
  value,
  isOpen,
  onToggle,
  onChange,
}: SortDropdownProps) {
  const selected = SORT_OPTIONS.find((option) => option.value === value);

  return (
    <div className="sort-dropdown">
      <button
        className="sort-dropdown__trigger"
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        {selected?.label ?? "Recommended"}
        <span aria-hidden="true">⌄</span>
      </button>

      {isOpen ? (
        <ul className="sort-dropdown__menu" role="listbox" aria-label="Sort products">
          {SORT_OPTIONS.map((option) => (
            <li key={option.value}>
              <button
                className={`sort-dropdown__option${
                  option.value === value ? " is-selected" : ""
                }`}
                type="button"
                role="option"
                aria-selected={option.value === value}
                onClick={() => onChange(option.value)}
              >
                {option.value === value ? (
                  <span className="sort-dropdown__check" aria-hidden="true">
                    ✓
                  </span>
                ) : null}
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
