import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Máquina Local de Corridas | Andrezinho Uber",
  description:
    "Rotas, horários e reservas no WhatsApp em um só lugar. Motorista particular para Tangará da Serra, Arenápolis e região.",
  keywords:
    "Andrezinho Uber, motorista particular, Tangará da Serra, Arenápolis, transporte regional",
  openGraph: {
    title: "Máquina Local de Corridas | Andrezinho Uber",
    description: "Escolha a cidade, selecione o serviço e chame o André com a mensagem pronta.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
