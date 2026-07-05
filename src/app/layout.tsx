import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maquina Local de Corridas | Andrezinho Uber",
  description: "Rotas, horarios e reservas no WhatsApp em um so lugar. Motorista particular para Tangara da Serra, Arenapolis e regiao.",
  keywords: "Andrezinho Uber, motorista particular, Tangara da Serra, Arenapolis, transporte regional",
  icons: {
    icon: "/logo-andre-luiz-uber.webp",
  },
  openGraph: {
    title: "Maquina Local de Corridas | Andrezinho Uber",
    description: "Escolha a cidade, selecione o servico e chame o Andre com a mensagem pronta.",
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