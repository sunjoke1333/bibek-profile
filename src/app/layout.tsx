import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CursorGlow } from "@/components/CursorGlow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bibek Poudyal | Solution Architect & Sales Leader",
  description: "Official portfolio of Bibek Poudyal (Thuldaji) – Solution Architect, Technical Engineer, and Sales Leader. Showcasing expertise in enterprise operations, network infrastructure, and visual storytelling.",
  keywords: ["Bibek Poudyal", "Thuldaji", "Solution Architect", "Sales Leader", "Nepal Tech", "Digital Identity", "Sunjoke Photography"],
  openGraph: {
    title: "Bibek Poudyal | Solution Architect & Sales Leader",
    description: "Architecting digital solutions and leading strategic sales operations.",
    url: "https://bibekpoudyal.com.np",
    siteName: "Bibek Poudyal Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibek Poudyal | Solution Architect",
    description: "Strategic lead and technical architect based in Nepal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} min-h-screen bg-background antialiased selection:bg-primary/30 overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CursorGlow />
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
