
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import FloatingShapes from "@/components/floating-shape";
import Header from "@/components/header";
import { ConvexClientProvider } from "@/app/convex-client-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Pixel",
  description: "AI Image Editor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body
        className={inter.className}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ClerkProvider appearance={{
              baseTheme: shadesOfPurple
            }}>
              <ConvexClientProvider>
            <Header />
            <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden" >
              <FloatingShapes />
              <Toaster richColors />
              {children}
            </main>
            </ConvexClientProvider>
            </ClerkProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
