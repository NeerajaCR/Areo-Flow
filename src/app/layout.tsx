import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { SimulationEngine } from "@/engine/SimulationEngine";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AeroFlow | Smart Grid Dashboard",
  description: "Advanced wind farm power grid simulation and control dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased selection:bg-primary/30`}>
        <TooltipProvider>
          <SimulationEngine>
            {children}
          </SimulationEngine>
        </TooltipProvider>
      </body>
    </html>
  );
}
