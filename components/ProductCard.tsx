"use client";

import Image from "next/image";
import type { Product } from "@/lib/api";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article className="product-card" id={`product-${product.id}`}>
      <div className="product-card__media">
        {product.isNew ? <span className="product-card__badge">NEW PRODUCT</span> : null}
        {product.isOutOfStock ? (
          <span className="product-card__stock">OUT OF STOCK</span>
        ) : null}

        <Image
          className="product-card__image"
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 28vw"
          priority={priority}
        />
      </div>

      <div className="product-card__body">
        <h3 className="product-card__title">{product.title}</h3>
        <div className="product-card__meta">
          <p className="product-card__pricing">
            <a href="#sign-in">Sign in</a> or Create an account to see pricing
          </p>
          <button className="product-card__wishlist" type="button" aria-label="Add to wishlist">
            <span aria-hidden="true">♡</span>
          </button>
        </div>
      </div>
    </article>
  );
}
