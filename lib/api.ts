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

type DummyJsonProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  images?: string[];
  rating: number;
  stock: number;
};

type DummyJsonProductsResponse = {
  products: DummyJsonProduct[];
  total: number;
  skip: number;
  limit: number;
};

const defaultProductsApiBase = "https://dummyjson.com";
const productsApiBase =
  process.env.NEXT_PUBLIC_PRODUCTS_API_BASE?.replace(/\/$/, "") ||
  defaultProductsApiBase;
export const productsEndpoint = `${productsApiBase}/products?limit=20`;
const FALLBACK_IMAGE = "/product-placeholder.svg";

const FALLBACK_PRODUCTS: DummyJsonProduct[] = [
  {
    id: 101,
    title: "PPXOC Milkyway Dress In Grey",
    price: 129.99,
    description:
      "Structured everyday carry piece with premium texture and minimal form.",
    category: "bags",
    thumbnail: FALLBACK_IMAGE,
    images: [FALLBACK_IMAGE],
    rating: 4.7,
    stock: 18,
  },
  {
    id: 102,
    title: "Soft Knit Dino Plush",
    price: 54,
    description:
      "Playful hand-knit collectible with a tactile finish and bright accents.",
    category: "toys",
    thumbnail: FALLBACK_IMAGE,
    images: [FALLBACK_IMAGE],
    rating: 4.9,
    stock: 24,
  },
  {
    id: 103,
    title: "Leather Loop Tag",
    price: 39,
    description:
      "Compact accessory with a refined leather loop and polished hardware.",
    category: "accessories",
    thumbnail: FALLBACK_IMAGE,
    images: [FALLBACK_IMAGE],
    rating: 4.5,
    stock: 9,
  },
  {
    id: 104,
    title: "Cotton Cap",
    price: 42.5,
    description:
      "Lightweight cap finished with soft embroidery and an easy everyday fit.",
    category: "caps",
    thumbnail: FALLBACK_IMAGE,
    images: [FALLBACK_IMAGE],
    rating: 4.4,
    stock: 15,
  },
  {
    id: 105,
    title: "Rolltop Backpack",
    price: 158,
    description:
      "Utility-inspired backpack designed with folded closure and wide straps.",
    category: "bags",
    thumbnail: FALLBACK_IMAGE,
    images: [FALLBACK_IMAGE],
    rating: 4.8,
    stock: 13,
  },
  {
    id: 106,
    title: "Product Name",
    price: 68,
    description: "Signature product silhouette for the curated metta muse edit.",
    category: "featured",
    thumbnail: FALLBACK_IMAGE,
    images: [FALLBACK_IMAGE],
    rating: 4.3,
    stock: 0,
  },
  {
    id: 107,
    title: "Woven Belt Bag",
    price: 112,
    description: "Soft woven carry piece with warm tones and compact storage.",
    category: "bags",
    thumbnail: FALLBACK_IMAGE,
    images: [FALLBACK_IMAGE],
    rating: 4.6,
    stock: 7,
  },
  {
    id: 108,
    title: "Canvas Pouch",
    price: 32,
    description: "Small-format pouch with striped finish for everyday essentials.",
    category: "accessories",
    thumbnail: FALLBACK_IMAGE,
    images: [FALLBACK_IMAGE],
    rating: 4.1,
    stock: 6,
  },
  {
    id: 109,
    title: "Travel Organizer",
    price: 74,
    description: "Zipped organizer with clean structure and color-woven detailing.",
    category: "travel",
    thumbnail: FALLBACK_IMAGE,
    images: [FALLBACK_IMAGE],
    rating: 4.5,
    stock: 11,
  },
  {
    id: 110,
    title: "Classic Sling",
    price: 136,
    description:
      "Crossbody sling with warm leather tones and soft woven texture.",
    category: "bags",
    thumbnail: FALLBACK_IMAGE,
    images: [FALLBACK_IMAGE],
    rating: 4.7,
    stock: 10,
  },
  {
    id: 111,
    title: "Minimal Fold Backpack",
    price: 149,
    description: "Minimal backpack with a bold folded top and lightweight build.",
    category: "bags",
    thumbnail: FALLBACK_IMAGE,
    images: [FALLBACK_IMAGE],
    rating: 4.6,
    stock: 5,
  },
  {
    id: 112,
    title: "Product Name",
    price: 82,
    description:
      "Versatile featured product selected for the responsive listing layout.",
    category: "featured",
    thumbnail: FALLBACK_IMAGE,
    images: [FALLBACK_IMAGE],
    rating: 4.2,
    stock: 0,
  },
];

function normalizeProduct(product: DummyJsonProduct, index: number): Product {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    category: product.category,
    image: product.thumbnail || product.images?.[0] || FALLBACK_IMAGE,
    price: product.price,
    rating: {
      rate: product.rating,
      count: Math.max(product.stock, 1) * 8,
    },
    isNew: index < 2,
    isOutOfStock: product.stock <= 0,
    alt: `${product.title} product image`,
  };
}

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(productsEndpoint, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`DummyJSON API request failed with status ${response.status}.`);
    }

    const data = (await response.json()) as DummyJsonProductsResponse;

    return data.products.map(normalizeProduct);
  } catch (error) {
    console.error("Falling back to local product data.", error);

    return FALLBACK_PRODUCTS.map(normalizeProduct);
  }
}
