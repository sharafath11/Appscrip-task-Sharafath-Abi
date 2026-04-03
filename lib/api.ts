export type ProductRating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  rating: ProductRating;
  isNew: boolean;
  isOutOfStock: boolean;
  alt: string;
};

type FakeStoreProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
};

const PRODUCTS_ENDPOINT = "https://fakestoreapi.com/products";
const FALLBACK_IMAGE = "/product-placeholder.svg";

const FALLBACK_PRODUCTS: FakeStoreProduct[] = [
  {
    id: 101,
    title: "PPXOC Milkyway Dress In Grey",
    price: 129.99,
    description: "Structured everyday carry piece with premium texture and minimal form.",
    category: "bags",
    image: FALLBACK_IMAGE,
    rating: { rate: 4.7, count: 184 },
  },
  {
    id: 102,
    title: "Soft Knit Dino Plush",
    price: 54.0,
    description: "Playful hand-knit collectible with a tactile finish and bright accents.",
    category: "toys",
    image: FALLBACK_IMAGE,
    rating: { rate: 4.9, count: 231 },
  },
  {
    id: 103,
    title: "Leather Loop Tag",
    price: 39.0,
    description: "Compact accessory with a refined leather loop and polished hardware.",
    category: "accessories",
    image: FALLBACK_IMAGE,
    rating: { rate: 4.5, count: 96 },
  },
  {
    id: 104,
    title: "Cotton Cap",
    price: 42.5,
    description: "Lightweight cap finished with soft embroidery and an easy everyday fit.",
    category: "caps",
    image: FALLBACK_IMAGE,
    rating: { rate: 4.4, count: 88 },
  },
  {
    id: 105,
    title: "Rolltop Backpack",
    price: 158.0,
    description: "Utility-inspired backpack designed with folded closure and wide straps.",
    category: "bags",
    image: FALLBACK_IMAGE,
    rating: { rate: 4.8, count: 203 },
  },
  {
    id: 106,
    title: "Product Name",
    price: 68.0,
    description: "Signature product silhouette for the curated metta muse edit.",
    category: "featured",
    image: FALLBACK_IMAGE,
    rating: { rate: 4.3, count: 57 },
  },
  {
    id: 107,
    title: "Woven Belt Bag",
    price: 112.0,
    description: "Soft woven carry piece with warm tones and compact storage.",
    category: "bags",
    image: FALLBACK_IMAGE,
    rating: { rate: 4.6, count: 149 },
  },
  {
    id: 108,
    title: "Canvas Pouch",
    price: 32.0,
    description: "Small-format pouch with striped finish for everyday essentials.",
    category: "accessories",
    image: FALLBACK_IMAGE,
    rating: { rate: 4.1, count: 42 },
  },
  {
    id: 109,
    title: "Travel Organizer",
    price: 74.0,
    description: "Zipped organizer with clean structure and color-woven detailing.",
    category: "travel",
    image: FALLBACK_IMAGE,
    rating: { rate: 4.5, count: 119 },
  },
  {
    id: 110,
    title: "Classic Sling",
    price: 136.0,
    description: "Crossbody sling with warm leather tones and soft woven texture.",
    category: "bags",
    image: FALLBACK_IMAGE,
    rating: { rate: 4.7, count: 173 },
  },
  {
    id: 111,
    title: "Minimal Fold Backpack",
    price: 149.0,
    description: "Minimal backpack with a bold folded top and lightweight build.",
    category: "bags",
    image: FALLBACK_IMAGE,
    rating: { rate: 4.6, count: 165 },
  },
  {
    id: 112,
    title: "Product Name",
    price: 82.0,
    description: "Versatile featured product selected for the responsive listing layout.",
    category: "featured",
    image: FALLBACK_IMAGE,
    rating: { rate: 4.2, count: 73 },
  },
];

function normalizeProduct(product: FakeStoreProduct, index: number): Product {
  return {
    ...product,
    isNew: index < 2,
    isOutOfStock: product.id % 7 === 0,
    alt: `${product.title} product image`,
  };
}

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(PRODUCTS_ENDPOINT, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`FakeStore API request failed with status ${response.status}.`);
    }

    const products = (await response.json()) as FakeStoreProduct[];

    return products.map(normalizeProduct);
  } catch (error) {
    console.error("Falling back to local product data.", error);

    return FALLBACK_PRODUCTS.map(normalizeProduct);
  }
}
