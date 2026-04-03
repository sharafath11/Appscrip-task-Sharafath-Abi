import type { Metadata } from "next";
import { connection } from "next/server";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PLPClient } from "@/components/PLPClient";
import { getProducts } from "@/lib/api";
import { buildPageMetadata } from "@/lib/seo";
import { buildProductListSchema } from "@/lib/schema";

export const metadata: Metadata = buildPageMetadata({
  title: "Discover Our Products",
  description:
    "Browse the metta muse product listing page with responsive filters, server-rendered product cards, and SEO-first ecommerce structure.",
  path: "/plp",
});

export default async function ProductListingPage() {
  await connection();

  const products = await getProducts();
  const schema = buildProductListSchema(products);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main className="page-shell">
        <PLPClient products={products} />
      </main>
      <Footer />
    </>
  );
}
