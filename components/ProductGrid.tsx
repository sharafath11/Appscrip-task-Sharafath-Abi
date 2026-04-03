"use client";

import type { Product } from "@/lib/api";
import { ProductCard } from "@/components/ProductCard";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="product-grid-section" aria-labelledby="product-grid-heading">
      <h2 className="sr-only" id="product-grid-heading">
        Product listing
      </h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} priority={index < 4} />
        ))}
      </div>
    </section>
  );
}
