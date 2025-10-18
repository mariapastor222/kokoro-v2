import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
// ⬇️ Importa la barra de navegación
import Nav from "@/components/Nav"; // Si te da error, mira la nota al final

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-playfair",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Kokoro Studio",
  description: "Creations with soul. Mind, Heart & Spirit. Limited drops",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${outfit.variable} font-sans bg-[#FFFDEF]`}>
        {/* Barra superior */}
        <Nav />

        {/* Contenido de la página */}
        <main className="mx-auto max-w-6xl px-6">{children}</main>
      </body>
    </html>
  );
}
