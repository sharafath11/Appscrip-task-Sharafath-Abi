"use client";

import { useState } from "react";
import type { Product } from "@/lib/api";
import { FiltersSidebar } from "@/components/FiltersSidebar";
import { ProductGrid } from "@/components/ProductGrid";
import { SortDropdown, type SortOption } from "@/components/SortDropdown";

type PLPClientProps = {
  products: Product[];
};

function sortProducts(products: Product[], sort: SortOption): Product[] {
  const sortedProducts = [...products];

  switch (sort) {
    case "newest":
      return sortedProducts.sort((a, b) => {
        if (a.isNew === b.isNew) {
          return b.id - a.id;
        }

        return Number(b.isNew) - Number(a.isNew);
      });
    case "popular":
      return sortedProducts.sort((a, b) => b.rating.count - a.rating.count);
    case "price-high":
      return sortedProducts.sort((a, b) => b.price - a.price);
    case "price-low":
      return sortedProducts.sort((a, b) => a.price - b.price);
    case "recommended":
    default:
      return sortedProducts;
  }
}

export function PLPClient({ products }: PLPClientProps) {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortOption, setSortOption] = useState<SortOption>("recommended");

  const sortedProducts = sortProducts(products, sortOption);

  return (
    <div className="plp" id="main-content">
      <section className="plp__hero" aria-labelledby="plp-title">
        <p className="plp__eyebrow">HOME / SHOP</p>
        <h1 id="plp-title">DISCOVER OUR PRODUCTS</h1>
        <p className="plp__description">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </section>

      <section className="plp__toolbar" aria-label="Product listing tools">
        <div className="plp__toolbar-left">
          <strong>{products.length} ITEMS</strong>
          <button
            className="plp__filter-toggle"
            type="button"
            aria-expanded={isFilterVisible}
            onClick={() => setIsFilterVisible((current) => !current)}
          >
            {isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </div>

        <SortDropdown
          value={sortOption}
          isOpen={isSortOpen}
          onToggle={() => setIsSortOpen((current) => !current)}
          onChange={(value) => {
            setSortOption(value);
            setIsSortOpen(false);
          }}
        />
      </section>

      <div className="plp__content">
        <FiltersSidebar
          isOpen={isFilterVisible}
          onClose={() => setIsFilterVisible(false)}
        />
        <div className="plp__products">
          <ProductGrid products={sortedProducts} />
        </div>
      </div>
    </div>
  );
}
