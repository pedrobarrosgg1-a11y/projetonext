import type { Metadata } from "next";
import { LandingPage } from "../templates/landing-page";

export const metadata: Metadata = {
  title: "Site.set",
  description: "Venda seus produtos como afiliado em um único lugar",
  robots: "index, follow",
  openGraph: {
    title: "Site.set",
    description: "Venda seus produtos como afiliado em um único lugar",
    url: "https://projetonext-ochre.vercel.app/og-image.jpg",
    siteName: "Site.set",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://projetonext-ochre.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Site.Set",
      },
    ],
  },
};

export default function AppPage() {
  return (
    <>
      <LandingPage />
    </>
  );
}
