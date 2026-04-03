import type { Product } from "@/lib/api";
import { getSiteUrl } from "@/lib/seo";

export function buildProductListSchema(products: Product[]) {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Discover Our Products",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}/plp#product-${product.id}`,
      item: {
        "@type": "Product",
        name: product.title,
        description: product.description,
        image: product.image,
        category: product.category,
        sku: String(product.id),
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: product.price.toFixed(2),
          availability: product.isOutOfStock
            ? "https://schema.org/OutOfStock"
            : "https://schema.org/InStock",
          url: `${siteUrl}/plp#product-${product.id}`,
        },
      },
    })),
  };
}
