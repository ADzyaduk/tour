import type { Metadata } from "next"
import { Cormorant_Garamond, DM_Sans } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { PageTransition } from "@/components/PageTransition"
import { CookieBanner } from "@/components/shared/CookieBanner"

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "AquaVista — Экскурсии и морские прогулки в Сочи",
    template: "%s | AquaVista",
  },
  description:
    "Экскурсии по Сочи и Абхазии, аренда яхт и групповые морские прогулки. Более 1000 довольных гостей. Незабываемый отдых на черноморском побережье.",
  keywords: [
    "экскурсии Сочи",
    "экскурсии Абхазия",
    "аренда яхты Сочи",
    "морские прогулки Сочи",
    "яхты Адлер",
    "туры Красная Поляна",
    "33 водопада",
    "озеро Рица",
    "Новый Афон",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://aquavista.ru",
    siteName: "AquaVista",
    title: "AquaVista — Экскурсии и морские прогулки в Сочи",
    description:
      "Экскурсии по Сочи и Абхазии, аренда яхт и групповые морские прогулки. Более 1000 довольных гостей.",
    images: [
      {
        url: "https://aquavista.ru/hero.jpg",
        width: 1200,
        height: 630,
        alt: "AquaVista — Экскурсии и морские прогулки в Сочи",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://aquavista.ru",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="antialiased bg-background text-foreground font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristInformationCenter",
              "name": "AquaVista",
              "description": "Экскурсии по Сочи и Абхазии, аренда яхт и морские прогулки",
              "url": "https://aquavista.ru",
              "telephone": "+7 988 123-45-67",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Сочи",
                "addressCountry": "RU"
              },
              "priceRange": "₽₽",
              "areaServed": ["Сочи", "Адлер", "Абхазия"]
            }),
          }}
        />
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
