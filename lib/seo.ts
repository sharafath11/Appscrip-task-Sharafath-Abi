import type { Metadata } from "next";

const siteName = "Appscrip-task-Sharafath-Abi";
const fallbackSiteUrl = "https://appscrip-task-sharafath-abi.vercel.app";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || fallbackSiteUrl;

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | metta muse`,
    template: `%s | ${siteName}`,
  },
  description:
    "Server-rendered ecommerce product listing page built with Next.js App Router, TypeScript, and plain CSS.",
  applicationName: siteName,
  openGraph: {
    type: "website",
    siteName,
    title: `${siteName} | metta muse`,
    description:
      "Responsive product listing experience with filters, sorting, structured data, and SSR integration.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | metta muse`,
    description:
      "Responsive ecommerce PLP using Next.js App Router and server-rendered product data.",
  },
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
    },
  };
}
